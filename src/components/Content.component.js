import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import Modal from './Modal.component'
import '../styles/Content.css'

function Spinner (props) {
    const isLoading = props.isLoading;
    if (isLoading) {
        return <MuiThemeProvider>
            <CircularProgress />
        </MuiThemeProvider>
    } else {
        return <h1>No items!</h1>
    }
}

function ModalWindow (props) {
    const selected = props.selected;
    const action = props.action;
    if (selected) {
        return <MuiThemeProvider>
            <Modal
                onClose={action}
                data={selected}
            />
        </MuiThemeProvider>
    } else {
        return <div>{null}</div>
    }
}

class Content extends Component {
    renderList = (data) => {
        return data.map((pic) => {
            return (
                <div key={pic.id} className="gif-single">
                    <img alt="gif" src={pic.preview} onClick={() => {this.props.openModal(pic)}} />
                </div>
            )
        })
    };

    render() {
        const renderList = <Masonry>{this.renderList(this.props.data)}</Masonry>;
        const spinner = <Spinner isLoading={this.props.isLoading} />;

        return (
            <div className="Content">
                {this.props.data.length ? renderList : spinner}
                <ModalWindow selected={this.props.selected} action={this.props.closeModal} />
            </div>
        )
    }
}
export default Content;
