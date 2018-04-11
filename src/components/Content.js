import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Modal from './Modal'
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
        return (
            <div className="Content">
                {this.props.data.length ? <Masonry>{this.renderList(this.props.data)}</Masonry> : <p>No items!</p>}
                {this.props.selected ?
                    <MuiThemeProvider>
                        <Modal
                            onClose={this.props.closeModal}
                            data={this.props.selected}
                        />
                    </MuiThemeProvider> : undefined}
            </div>
        )
    }
}

export default Content;
