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
                onTextChange={props.onTextChange}
            />
        )
    })
}

class SearchBar extends Component {
    state ={
        searchTerm: '',
    };

    performSearch = debounce((searchTerm) => {
        if (this.props.searchTerm !== searchTerm) {
            this.props.searchAction.setTerm(searchTerm);
            this.props.requestAction.fetchGifs(this.props.searchTerm, this.props.offset);
        }
    }, 500);

    onTextChange = (_, searchTerm) => {
        this.setState({searchTerm: searchTerm});
        this.performSearch(searchTerm);
    };

    render() {
        return (
            <div className="SearchBar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" value={this.state.searchTerm} onChange={this.onTextChange} />
                    <div className="label-wrapper">
                        <Labels
                            recentTerms={this.props.recentTerms}
                            onTextChange={this.onTextChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
