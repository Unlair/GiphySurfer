import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
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
        offset: state.searchReducer.offset,
        data: state.searchReducer.data,
        recentTerms: state.searchReducer.recentTerms,
        isLoading: state.searchReducer.isLoading,
        selected: state.contentReducer.selected,
    }
}

App.propTypes = {
    setTerm: PropTypes.string,
    offset: PropTypes.number,
    data: PropTypes.array,
    recentTerms: PropTypes.array,
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps)(App);
