import React, {Component} from 'react';
import debounce from 'lodash/debounce'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './components/SearchBar';
import Content from './components/Content'
import SearchService from "./services/searchService";

class App extends Component {

    state = {
        search: new SearchService(),
        data: [],
        valueText: ''
    };

    updateText = (value) => {
        this.setState({valueText: value});
    };

    performSearch = debounce((nextState) => {
        this.state.search.search(nextState.valueText)
            .then((data) => {
                this.setState({data});
            })
    }, 500);

    componentWillUpdate(nextProps, nextState) {
        if (this.state.valueText !== nextState.valueText || this.state.valueSlider !== nextState.valueSlider) {
            this.performSearch(nextState);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MuiThemeProvider>
                        <SearchBar updateText={this.updateText} updateSlider={this.updateSlider}/>
                    </MuiThemeProvider>
                </header>
                <div className="App-content">
                    <Content data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default App;
