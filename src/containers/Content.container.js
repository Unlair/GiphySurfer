import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import debounce from 'lodash/debounce'
import * as contentAction from '../actions/content.action'
import * as requestAction from '../actions/request.action'
import Masonry from 'react-masonry-component'
import Gif from '../components/Gif.component'
import Spinner from '../components/Spinner.component'
import Modal from '../components/Modal.component'
import '../styles/Content.css'

class Content extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.props.requestAction.fetchGifs(this.props.searchTerm, this.props.offset);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    };

    onScroll = debounce(() => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1)) {
            this.props.requestAction.fetchGifs(this.props.searchTerm, this.props.offset);
        }
    }, 500);

    renderList = (data) => {
        return data.map((pic) => {
            return (
                <Gif pic={pic} key={pic.id} openModal={this.props.contentAction.openModal} />
            )
        })
    };

    render() {
        const renderList = <Masonry>{this.renderList(this.props.data)}</Masonry>;

        return (
            <div className="Content">
                {this.props.data.length ? renderList : <Spinner isLoading={this.props.isLoading} />}
                <Modal data={this.props.selected} onClose={this.props.contentAction.closeModal} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchReducer.searchTerm,
        isLoading: state.searchReducer.isLoading,
        data: state.searchReducer.data,
        offset: state.searchReducer.offset,
        selected: state.contentReducer.selected,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        contentAction: bindActionCreators(contentAction, dispatch),
        requestAction: bindActionCreators(requestAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
