import React, {Component} from 'react'
import '../styles/Modal.css'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class Modal extends Component {
    getHeightGif = () => {
        if (window.innerWidth < 768) {
            const widthGifModal = this.props.data.widthOriginal / 190;
            return this.props.data.heightOriginal / widthGifModal;
        } else {
            const widthGifModal = this.props.data.widthOriginal / 500;
            return this.props.data.heightOriginal / widthGifModal;
        }
    };

    render() {
        const styleGifModal = {
          height: this.getHeightGif(),
        };

        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.props.onClose}
            />
        ];

        const modal = (
            <Dialog
                className="Modal"
                title="Details"
                actions={actions}
                modal={false}
                open={true}
                onRequestClose={this.props.onClose}
                autoScrollBodyContent={true}
            >
                <img
                    style={styleGifModal}
                    alt="gifModal" src={this.props.data.original}
                />

                <p className="url">URL: {this.props.data.original}</p>
                <p className="rating"> Rating: {this.props.data.rating}</p>
                <p className="date">Date: {this.props.data.date}</p>
            </Dialog>
        );

        return(
            <div>
                {this.props.data ? modal : <div>{null}</div>}
            </div>
        );
    }
}
