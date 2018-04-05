import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        searchTerm: ''
    };

    onTextChange = (event, value) => {
        this.setState({searchTerm: value}, () => {
            this.props.onTextChange(this.state.searchTerm);
        });
    };

    render() {
        return (
            <div className="search-bar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.onTextChange}/>
                </Paper>
            </div>
        );
    }
}

export default SearchBar;
