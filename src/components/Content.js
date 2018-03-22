import React, {Component} from 'react';

class Content extends Component {

    renderList = (data) => {
        return data.map(function (pic) {
            return (
                <div key={pic.id}>
                    <img alt={"gif"} src={pic.url}/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className={"Content"}>
                {this.renderList(this.props.data)}
            </div>
        )
    }
}

export default Content;


// function () {
//     this.state.search.search('cat','10')
//         .then((data) =>{
//             let gifList = data.map(function (pic) {
//                         return (
//                             <div key={pic.id}>
//                                 <img alt={"hui"} src={pic.url}/>
//                             </div>
//                         )
//                     });
//             self.setState({gifList: gifList});
//         })
// }


// constructor() {
//     super();
//     this.state = {
//         gifList: [],
//     };
//     this.create = this.create.bind(this);
// }
//
// create() {
//
//     let self = this;
//     let myValue = 'agnez';
//     let limit = '25';
//
//     fetch('http://api.giphy.com/v1/gifs/search?q=' + myValue + '&api_key=wZ7TY2vuJXe9lk8ngjHNI2dkpwAssmEU&limit=' + limit)
//         .then(
//             function (response) {
//                 response.json().then(function (data) {
//                     console.log(data);
//                     let gifList = data.data.map(function (pic) {
//                         return (
//                             <div key={pic.id}>
//                                 <img alt={"hui"} src={pic.images.downsized.url}/>
//                             </div>
//                         )
//                     });
//                     console.log(gifList);
//                     self.setState({gifList: gifList});
//                 });
//             }
//         )
//         .catch(function (err) {
//             console.log('Fetch Error :-S', err);
//         });
// }