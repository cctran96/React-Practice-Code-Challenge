import React, { Component } from 'react'

class SushiWallet extends Component {
    state={
        input: ''
    }

    newInput = e => {
        const num = parseInt(e.target.value)
        num ? this.setState({input: num}) : null
    }

    render(){
        return(
            <form onSubmit={e => this.props.handleSubmit(e, this.state.input)}>
                <label>Add Money</label>
                <input onChange={this.newInput} type='text' value={this.state.input}/>
                <input type='button' value='Add'/>
            </form>
        )
    }
}

export default SushiWallet