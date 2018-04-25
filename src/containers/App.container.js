import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as searchAction from '../actions/search.action'
import * as contentAction from '../actions/content.action'
import * as requestAction from '../actions/request.action'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from './SearchBar.container'
import Content from './Content.container'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MuiThemeProvider>
                        <SearchBar />
                    </MuiThemeProvider>
                </header>
                <div className="App-content">
                    <MuiThemeProvider>
                        <Content />
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchReducer.searchTerm,
        isLoading: state.searchReducer.isLoading,
        data: state.searchReducer.data,
        offset: state.searchReducer.offset,
        recentTerms: state.searchReducer.recentTerms,
        selected: state.contentReducer.selected,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch),
        contentAction: bindActionCreators(contentAction, dispatch),
        requestAction: bindActionCreators(requestAction, dispatch)
    }
}

//TODO: PropTypes

export default connect(mapStateToProps, mapDispatchToProps)(App);
