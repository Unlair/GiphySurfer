import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './Modal'
import './Content.css'

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
        this.renderModal = this.renderModal.bind(this);
    }

    renderModal = () => this.setState({selected: true});

    closeModal = () => this.setState({selected: undefined});

    renderList = (data) => {
        return data.map((pic) => {
            return (
                <div key={pic.id} className="gif-single">
                    <img alt="gif" src={pic.url} onClick={() => this.setState({selected: pic})}/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="Content">
                {this.renderList(this.props.data)}
                {this.state.selected ? <MuiThemeProvider><Modal onClose={this.closeModal}
                                                                data={this.state.selected}/></MuiThemeProvider> : undefined}
            </div>
        )
    }
}

export default Content;