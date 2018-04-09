import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import '../styles/SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.props.setTerm} />
                </Paper>
            </div>
        );
    }
}

export default SearchBar;
