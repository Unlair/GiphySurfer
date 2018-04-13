import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Modal from './Modal.component'
import '../styles/Content.css'

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
        const noItem = <p>No items!</p>;

        return (
            <div className="Content">
                {this.props.data.length ? renderList : noItem}
                <ModalWindow selected={this.props.selected} action={this.props.closeModal} />
            </div>
        )
    }
}
export default Content;
