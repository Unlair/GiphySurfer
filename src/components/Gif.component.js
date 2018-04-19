import React, {Component} from 'react'

class Gif extends Component {
    getHeightWrapper = (pic) => {
        if (typeof pic.preview === 'undefined') {
            const widthWrapper = pic.widthOriginal / 300;
            return pic.heightOriginal / widthWrapper;
        } else {
            const widthWrapper = pic.widthPreview / 300;
            return pic.heightPreview / widthWrapper;
        }
    };

    wrapperStyle = {
        height: this.getHeightWrapper(this.props.pic),
        backgroundColor: '#' +  Math.random().toString(16).substr(-6),
    };

    srcGif = (pic) => {
        if (typeof pic.preview === 'undefined') {
            return pic.original;
        } else {
            return pic.preview;
        }
    };

    render() {
        return (
            <div style={this.wrapperStyle} className="gif-wrapper">
                <img alt="gif" src={this.srcGif(this.props.pic)} onClick={() => {this.props.openModal(this.props.pic)}} />
            </div>
        )
    }
}

export default Gif;
