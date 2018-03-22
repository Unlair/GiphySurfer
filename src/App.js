import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './components/SearchBar';
import Content from './components/Content'
import SearchService from "./services/searchService";

class App extends Component {

    state = {
        search: new SearchService(),
        data: [],
        valueText: '',
        valueSlider: 20,
    };

    updateText = (value) => {
        this.setState({valueText: value});
        console.log(this.state)
    };

    updateSlider = (value) => {
        this.setState({valueSlider: value});
        console.log(this.state)
    };

    componentWillUpdate (nextProps, nextState) {
        if (this.state.valueText !== nextState.valueText || this.state.valueSlider !== nextState.valueSlider) {
            // это вынести в отдельный метод
            // сделать его debounce
            this.state.search.search(nextState.valueText, nextState.valueSlider)
                .then((data) => {
                    this.setState({data});
                })
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
                <div className={"App-content"}>
                    <Content data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default App;
