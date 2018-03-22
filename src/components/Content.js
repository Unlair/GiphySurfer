import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './Modal'
import './Content.css'

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.renderModal = this.renderModal.bind(this);
    }

    renderModal = () => this.setState({showModal: true,});

    closeModal = () => this.setState({showModal: false});

    renderList = (data) => {
        return data.map((pic) => {
            return (
                <div key={pic.id} className="gif-single">
                    <img alt="gif" src={pic.url} onClick={this.renderModal}/>
                    {this.state.showModal ? <MuiThemeProvider><Modal onClose={this.closeModal}/></MuiThemeProvider> : undefined}
                </div>
            )
        })
    };

    render() {
        return (
            <div className="Content">
                {this.renderList(this.props.data)}
            </div>
        )
    }
}

export default Content;