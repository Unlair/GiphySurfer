import React, {Component} from 'react'
import '../styles/Gif.css'

class Gif extends Component {
    getHeightWrapper = (pic) => {
        const widthWrapper = pic.widthOriginal / 300;
        return pic.heightOriginal / widthWrapper;
    };

    getRandomColor = () => {
        return ( '#' +  Math.random().toString(16).substr(-6) );
    };

    wrapperStyle = {
        height: this.getHeightWrapper(this.props.pic),
        backgroundColor: this.getRandomColor(),
    };

    srcGif = (pic) => {
        return ( typeof pic.preview === 'undefined' ? pic.original : pic.preview );
    };

    render() {
        return (
            <div style={this.wrapperStyle} className="Gif">
                <img
                    alt="gif"
                    src={this.srcGif(this.props.pic)}
                    onClick={() => {this.props.openModal(this.props.pic)}}
                />
            </div>
        )
    }
}

export default Gif;
