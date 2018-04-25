import React, {Component} from 'react'
import '../styles/Modal.css'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class Modal extends Component {
    render() {
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
                    width={this.props.data.widthOriginal}
                    height={this.props.data.heightOriginal}
                    alt="gifModal" src={this.props.data.original}
                />

                <p className="url">URL: {this.props.data.original}</p>
                <p className="rating"> Rating: {this.props.data.rating}</p>
                <p className="date">Date: {this.props.data.date}</p>
            </Dialog>
        );

        if (this.props.selected) {
            return modal
        } else {
            return <div>{null}</div>
        }
    }
}
