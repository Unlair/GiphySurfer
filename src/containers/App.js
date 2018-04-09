import React, {Component} from 'react';
import debounce from 'lodash/debounce';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/App.css';
import SearchBar from '../components/SearchBar';
import Content from '../components/Content';
import GiphyService from "../services/giphyService";
import * as searchAction from '../actions/searchAction';
import {bindActionCreators} from 'redux';

class App extends Component {

    state = {
        giphyService: new GiphyService(),
        data: [],
        searchTerm: '',
        offset: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    };

    onTextChange = debounce((_, searchTerm) => {

        if (this.state.searchTerm !== searchTerm) {
            this.setState({
                searchTerm: searchTerm,
                offset: 0,
                data: [],
            });
            this.performSearch();
        }
    }, 500);

    performSearch = () => {
        this.state.giphyService.fetchGifs(this.state.searchTerm, this.state.offset)
            .then((data) => {
                this.setState({
                    data: this.state.data.concat(data),
                });
            });
    };

    onScroll = debounce(() => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)) {
            this.setState({offset: this.state.offset + 30});
            this.performSearch(this.state.searchTerm, this.state.offset);
        }
    }, 500);

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MuiThemeProvider>
                        <SearchBar onTextChange={this.onTextChange} />
                    </MuiThemeProvider>
                </header>
                <div className="App-content">
                    <Content data={this.state.data} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.search.searchTerm,
        offset: state.search.offset,
        data: state.content.data,
        selected: state.content.selected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
