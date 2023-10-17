import React, { Component } from 'react'

export default class Show extends Component {
    state={
        Time:0
    }
    componentDidMount() {setInterval( ()=> this.setState({Time:this.state.Time+1}), 1000);
    
     }
  render() {
    return (
      <div>
      <h1> {this.props.el.fullName}</h1>
      <p>{this.props.el.bio}</p>
      <img style={{height:'250px', width:'250px'}} src={ this.props.el.imgSrc}></img>
     {this.state.Time}
      </div>
    )
  }
}
