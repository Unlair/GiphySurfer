import React, {Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress'


class Spinner extends Component {
    render() {
        const isLoading = this.props.isLoading;
        return(
            <div>
                {isLoading ? <CircularProgress /> : <h1>No items!</h1>}
            </div>
        )
    }
}

export default Spinner
