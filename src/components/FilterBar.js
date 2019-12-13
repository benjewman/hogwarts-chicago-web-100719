import React from 'react'

export default class FilterBar extends React.Component {
    
    render() {
        return (
            <div className="ui menu">
                <div className="item">
                    Greased Pigs Only?    
                </div>
                <div className="item">
                    <div classname="ui checkbox">
                        <input onClick={this.props.changeCheck} id='checkbox' type="checkbox" name="greased" />
                    </div>
                </div>
                <div className="item">
                    Sort By    
                </div>
                <div id="dropdown-overflow" className="ui simple selection dropdown">
                    <input type="hidden" name="sort" />
                    <i className="dropdown icon"></i>
                    <div className="default text">Sort</div>
                    <div className="menu">
                        <div onClick={(event) => this.props.sortHogs(event.target.innerText)} className="item" data-value="1">Name</div>
                        <div onClick={(event) => this.props.sortHogs(event.target.innerText)} className="item" data-value="0">Weight</div>
                    </div>
                </div>
            </div>
        )
    }
}