import React, {Component} from 'react'
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

//TODO: PropTypes

export default connect()(App);
