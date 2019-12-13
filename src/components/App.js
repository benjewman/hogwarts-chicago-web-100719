import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import FilterBar from './FilterBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      greaseCheck: false,
      hogs: hogs
    }
  }

  changeCheck = (event) => {
    this.setState({
        greaseCheck: (event.target.checked)
    })
    // since state doesn't change until after the function completes
    // i pass in the greaseCheck state to my next function through the event
    this.changeHogs(event.target.checked)
  }

  hideSingleHog = (hiddenHog) => {
    console.log(hiddenHog)
    const newHogs = this.state.hogs.filter(hog => hog.name !== hiddenHog.name)
    this.setState({
      hogs: newHogs
    })
  }

  changeHogs = (isChecked) => {
    console.log(isChecked)
    let newHogs
    isChecked ? (newHogs = this.state.hogs.filter(hog => hog.greased)) : (newHogs = hogs)
    console.log(newHogs)
    this.setState({
      hogs: newHogs
    })
  }

  // Why are the pigs still sorted when we uncheck the grease
  // We set the state equal to the hogs list we import which should be out of order

  sortHogs = (sortWord) => {
    // console.log(sortWord)
    let newHogs
    if (sortWord === 'Weight') {
      newHogs = this.state.hogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
    } else {
      newHogs = this.state.hogs.sort((hog1, hog2) => (hog1.name > hog2.name) ? 1 : -1)
    }
    this.setState({
      hogs: newHogs
    })
  }
  
  render() {
    return (
      <div className="App">
          < Nav />
          <FilterBar sortHogs={this.sortHogs} changeCheck={this.changeCheck}/>
          <HogsContainer hideSingleHog={this.hideSingleHog} hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
