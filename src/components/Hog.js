import React from 'react'

export default class Hog extends React.Component {
    constructor(){
        super()
        this.state = {
            detailToggle: false
        }
    }

    toggleDetails = () => {
        this.setState({
            detailToggle: !this.state.detailToggle
        })
    }

    revealDetails = () => {
        if (this.state.detailToggle === true) {
            return (
                <div className="description">
                    <div>Specialty: {this.props.details.specialty}</div>
                    <div>Weight: {this.props.details.weight}</div>
                    <div>Highest Medal: {this.props.details['highest medal achieved']}</div>
                </div>
            )
        } else {
            return true
        }
    }

    render() {
        return (
            <div className="ui card eight wide column" onClick={this.toggleDetails}>
                <div className="image">
                    <img src={require(`../hog-imgs/${this.props.imageName}.jpg`)} alt="piggy"/>
                </div>
                <div className="content">
                    <div className="header">{this.props.details.name}</div>
                    {this.revealDetails()}
                </div>
                <button onClick={() => this.props.hideHog(this.props.details)} class="ui button">Hide</button>
            </div>
        )
    }
}