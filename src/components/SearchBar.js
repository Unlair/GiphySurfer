import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        valueText: '',
        valueSlider: 20,
    };

    handleText = (event, value) => {
        this.setState({valueText: value}, () => {
            this.props.updateText(this.state.valueText);
        });
    };

    handleSlider = (event, value) => {
        this.setState({valueSlider: value});
        this.props.updateSlider(this.state.valueSlider);
    };

    render() {
        return (
            <div className="search-bar">
                <Paper className="paper" zDepth={1}>
                    <TextField className="text-field" hintText="Hint Text" onChange={this.handleText}/>
                    <div className="slider-group">
                        <Slider
                            className="slider"
                            min={0}
                            max={100}
                            step={10}
                            value={this.state.valueSlider}
                            onChange={this.handleSlider}
                        />
                        <p>
                            <span>Number of GIFs: </span>
                            <span>{this.state.valueSlider}</span>
                        </p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default SearchBar;