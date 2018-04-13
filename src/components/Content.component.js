import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Modal from './Modal.component'
import '../styles/Content.css'

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

        const renderModal = <MuiThemeProvider>
            <Modal
                hidden={this.props.selected ? 'block' : 'none'}
                onClose={this.props.closeModal}
                data={this.props.selected}
            />
        </MuiThemeProvider>;

        return (
            <div className="Content">
                {this.props.data.length ? renderList : noItem}
                {renderModal}
            </div>
        )
    }
}

export default Content;
