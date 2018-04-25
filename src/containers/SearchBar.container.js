import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import debounce from 'lodash/debounce'
import * as searchAction from '../actions/search.action'
import * as requestAction from '../actions/request.action'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Label from '../components/Label.component'
import '../styles/SearchBar.css'

function Labels (props) {
    const terms = props.recentTerms;
    return terms.map((term, index) => {
        return (
            <Label
                key={index}
                term={term}
                offset={props.offset}
                setTerm={props.setTerm}
                fetchGifs={props.fetchGifs}
            />
        )
    })
}

class SearchBar extends Component {
    onTextChange = debounce((_, searchTerm) => {
        if (this.props.searchTerm !== searchTerm) {
            this.props.searchAction.setTerm(searchTerm);
            this.props.requestAction.fetchGifs(this.props.searchTerm, this.props.offset);
        }
    }, 500);

    render() {
        return (
            <div className="SearchBar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.onTextChange} />
                    <div className="label-wrapper">
                        <Labels
                            recentTerms={this.props.recentTerms}
                            offset={this.props.offset}
                            setTerm={this.props.searchAction.setTerm}
                            fetchGifs={this.props.requestAction.fetchGifs}
                        />
                    </div>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchReducer.searchTerm,
        recentTerms: state.searchReducer.recentTerms,
        offset: state.searchReducer.offset,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch),
        requestAction: bindActionCreators(requestAction, dispatch)
    }
}

//TODO: PropTypes

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
