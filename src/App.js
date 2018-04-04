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
        valueText: '',
        offset: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    };

    componentWillUpdate(nextProps, nextState) {
        if (this.state.valueText !== nextState.valueText) {
            this.performSearch(nextState);
        }
    }

    updateText = (value) => {
        this.setState({valueText: value});
    };

    performSearch = debounce((nextState) => {
        this.state.search.search(nextState.valueText, nextState.offset)
            .then((data) => {
                this.setState({data});
            })
    }, 500);

    infiniteSearch = debounce((text, offset) => {
        this.state.search.search(text, offset)
            .then((data) => {
                this.setState({data: this.state.data.concat(data)});
            })
    }, 500);

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)
        ) {
            this.setState({offset: this.state.offset + 30});
            this.infiniteSearch(this.state.valueText, this.state.offset);
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MuiThemeProvider>
                        <SearchBar updateText={this.updateText}/>
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
