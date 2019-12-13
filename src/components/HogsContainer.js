import React from 'react'
import Hog from './Hog'


export default class HogsContainer extends React.Component {

    // filter hogs that are greased

    adjustNameForPic(name) {
        return name.toLowerCase().replace(/ /g,"_"); 
    }
    
    renderAllHogs(hogArray) {
        return hogArray.map(hog => <Hog hideHog={this.props.hideSingleHog} imageName={this.adjustNameForPic(hog.name)} details={hog}/>)
    }

    render() {
        return (
            <div className="ui grid container">
                {this.renderAllHogs(this.props.hogs)}
            </div>
        )
    }
}