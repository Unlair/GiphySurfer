import React, {Component} from 'react'
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from '../components/SearchBar.component'
import Content from '../components/Content.component'
import * as searchAction from '../actions/search.action'
import * as contentAction from '../actions/content.action'
import * as requestAction from '../actions/request.action'

class App extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.performSearch();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    };

    onTextChange = debounce((_, searchTerm) => {
        if (this.props.searchTerm !== searchTerm) {
            this.props.searchAction.setTerm(searchTerm);
            this.setRecentSearch(searchTerm);
            this.performSearch();
        }
    }, 500);

    onScroll = debounce(() => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)) {
            this.props.searchAction.offsetInc(30);
            this.performSearch();
        }
    }, 500);

    setRecentSearch = (searchTerm) => {
        if (searchTerm !== '') {
            this.props.searchAction.setRecentSearch(searchTerm);
        }
    };

    performSearch = () => {
        console.log(this.props.searchTerm);
        this.props.requestAction.fetchGifs(this.props.searchTerm, this.props.offset);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MuiThemeProvider>
                        <SearchBar
                            onTextChange={this.onTextChange}
                            recentTerms={this.props.recentTerms}
                            setTerm={this.props.searchAction.setTerm}
                            performSearch={this.performSearch}
                        />
                    </MuiThemeProvider>
                </header>
                <div className="App-content">
                    <Content
                        isLoading={this.props.isLoading}
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

App.propTypes = {
    setTerm: PropTypes.string,
    offset: PropTypes.number,
    data: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
