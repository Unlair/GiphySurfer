import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import '../styles/Label.css'

class Label extends Component {
    onLabelClick = (_) => {
        this.props.onTextChange(_, this.props.term);
    };

    shortenString = (term) => {
        if (term.length > 9) {
            return term.slice(0,3) + '...' + term.slice(-3);
        } else {
            return term;
        }
    };

    render() {
        return (
            <div className="Label">
                <Chip onClick={this.onLabelClick}>
                    {this.shortenString(this.props.term)}
                </Chip>
            </div>
        )
    }
}

export default Label;
