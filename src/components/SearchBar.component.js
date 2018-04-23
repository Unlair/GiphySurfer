import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Label from './Label.component'
import '../styles/SearchBar.css'

class SearchBar extends Component {
    renderLabels = (recentTerms) => {
        return recentTerms.map((term, index) => {
            return (
                <Label
                    key={index}
                    term={term}
                    setTerm={this.props.setTerm}
                    performSearch={this.props.performSearch}
                />
            )
        })
    };

    render() {
        return (
            <div className="SearchBar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.props.onTextChange} />
                    <div className="label-wrapper">{this.renderLabels(this.props.recentTerms)}</div>
                </Paper>
            </div>
        );
    }
}

export default SearchBar;
