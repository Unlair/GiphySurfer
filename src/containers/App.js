import React, {Component} from 'react'
import debounce from 'lodash/debounce'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/App.css'
import GiphyService from '../services/giphyService'
import SearchBar from '../components/SearchBar'
import Content from '../components/Content'
import * as searchAction from '../actions/searchAction'
import * as contentAction from '../actions/contentAction'

class App extends Component {
    state = {
        giphyService: new GiphyService()
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    };

    onTextChange = debounce((_, searchTerm) => {
        if (this.props.searchTerm !== searchTerm) {
            this.props.searchAction.setTerm(String(searchTerm));
            this.performSearch();
        }
    }, 500);

    performSearch = () => {
        this.state.giphyService.fetchGifs(this.props.searchTerm, this.props.offset)
            .then((data) => {
                this.props.searchAction.dataGifsUpdate(data);
            });
    };

    onScroll = debounce(() => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)) {
            this.props.searchAction.offsetInc(30);
            this.performSearch();
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
        contentAction: bindActionCreators(contentAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
