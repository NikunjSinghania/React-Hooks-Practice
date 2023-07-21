import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    countChange(){
        this.setState({
            count: this.state.count+1
        })
    }

  render() {
    return (
      <>
        <button onClick={() => this.countChange()}>Click {this.state.count}</button>
      </>
    )
  }
}

export default ClassCounter