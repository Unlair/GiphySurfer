import React, {Component} from 'react';
import './Modal.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Modal extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.props.onClose}
            />
        ];

        return (
            <Dialog
                className="dialog"
                title="Details"
                actions={actions}
                modal={false}
                open={true}
                onRequestClose={this.props.onClose}
            >
                <p className="p-img">
                    <img
                    width={this.props.data.widthOriginal}
                    height={this.props.data.heightOriginal}
                    alt="gifModal" src={this.props.data.original}
                    />
                </p>
                <p className="p-url">URL: {this.props.data.original}</p>
                <p className="p-rating"> Rating: {this.props.data.rating}</p>
                <p className="p-date">Date: {this.props.data.date}</p>
            </Dialog>
        );
    }
}
