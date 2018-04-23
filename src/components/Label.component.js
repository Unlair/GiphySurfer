import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import '../styles/Label.css'

class Label extends Component {
    onLabelClick = () => {
        this.props.setTerm(this.props.term);
        this.props.fetchGifs(this.props.term, 0);
    };

    render() {
        return (
            <div className="Label">
                <Chip onClick={this.onLabelClick}>
                    {this.props.term}
                </Chip>
            </div>
        )
    }
}

export default Label;