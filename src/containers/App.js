import React, {Component} from 'react'
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/App.css'
import SearchBar from '../components/SearchBar'
import Content from '../components/Content'
import * as searchAction from '../actions/searchAction'
import * as contentAction from '../actions/contentAction'
import * as requestAction from '../actions/requestAction'

class App extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    };

    onTextChange = debounce((_, searchTerm) => {
        if (this.props.searchTerm !== searchTerm) {
            this.props.searchAction.setTerm(searchTerm);
            this.performSearch();
        }
    }, 500);

    onScroll = debounce(() => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)) {
            this.props.searchAction.offsetInc(30);
            this.performSearch();
        }
    }, 500);

    performSearch = () => {
        this.props.requestAction.fetchRequest(this.props.searchTerm, this.props.offset);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MuiThemeProvider>
                        <SearchBar onTextChange={this.onTextChange} />
                    </MuiThemeProvider>
                </header>
                <div className="App-content">
                    <Content
                        data={this.props.data}
                        selected={this.props.selected}
                        openModal={this.props.contentAction.openModal}
                        closeModal={this.props.contentAction.closeModal}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchReducer.searchTerm,
        data: state.searchReducer.data,
        offset: state.searchReducer.offset,
        selected: state.contentReducer.selected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch),
        contentAction: bindActionCreators(contentAction, dispatch),
        requestAction: bindActionCreators(requestAction, dispatch)
    }
}

App.propTypes = {
    setTerm: PropTypes.string,
    offset: PropTypes.number,
    data: PropTypes.array
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
