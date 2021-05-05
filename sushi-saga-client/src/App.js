import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis/?_limit=4&_page="

class App extends Component {
  state={
    sushis: [],
    eaten: Array(101).fill(false),
    plates: [],
    page: 1,
    money: 100
  }

  fetchSushi = page => {
    fetch(API + page).then(r => r.json()).then(sushis => this.setState({sushis}))
  }

  componentDidMount(){
    this.fetchSushi(this.state.page)
  }

  handleClick = (price, id) => {
    let arr = [...this.state.eaten]
    console.log(id)
    arr[id] = true
    this.state.money - price >= 0 ? this.setState({money: this.state.money - price, eaten: arr, plates: [...this.state.plates, 'Chau is sexy']}) : alert("You don't have enough money!")
  }

  handlePage = () => {
    const newPage = this.state.page + 1
    const updateState = page => {
      this.setState({page: page})
      this.fetchSushi(page)
    }
    this.state.page < 25 ? updateState(newPage) : updateState(1)
  }

  handleSubmit = (e,input) => {
    e.preventDefault()
    this.setState({money: this.state.money + input})
    e.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eaten={this.state.eaten} handlePage={this.handlePage} handleClick={this.handleClick}/>
        <Table money={this.state.money} plates={this.state.plates}/>
        <SushiWallet handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;