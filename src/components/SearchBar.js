import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        valueText: ''
    };

    handleText = (event, value) => {
        this.setState({valueText: value}, () => {
            this.props.changeText(this.state.valueText);
        });
    };

    render() {
        return (
            <div className="search-bar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.handleText}/>
                </Paper>
            </div>
        );
    }
}

export default SearchBar;
