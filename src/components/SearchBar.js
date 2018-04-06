import React, {Component} from 'react';
import debounce from 'lodash/debounce'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.props.onTextChange} />
                </Paper>
            </div>
        );
    }
}

export default SearchBar;
