import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import '../styles/Label.css'

import debounce from 'lodash/debounce'

class Label extends Component {
    // onLabelClick = debounce(() => {
    //     this.props.setTerm(this.props.term);
    //     this.props.performSearch()
    // }, 100);

    onLabelClick = () => {
        let that = this;
        return new Promise((resolve) => {
            debugger;
            that.props.setTerm(this.props.term);
            resolve(that.props.performSearch());
        })
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