import React, { Component } from 'react'
import Show from './Show'

export default class App extends Component {
  state ={
   person:{
    fullName: 'Angelina Jolie',
    bio: 'Angelina Jolie is an American actress, filmmaker, and humanitarian. She has received several awards for her work in film, including an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards. Jolie is known for her humanitarian work and has been recognized for her efforts in promoting social justice and human rights around the world.',
    imgSrc: 'https://www.koimoi.com/wp-content/new-galleries/2023/10/angelina-jolie-is-yet-to-warm-up-to-her-son-paxs-girlfriend-carmen-blanchard-but-she-is-busy-grilling-the-poor-girl-01.jpg',
   },
    show: false
  }
  render() {
    return (
      
      <div>
        {(this.state.show)? 
        <>
        <Show el={this.state.person}></Show>
        </>:<></> }
     
      <>
      <br/>
      <button onClick={()=> this.setState({show:!this.state.show})}>show</button>
      </>
      </div>
    )
  }
}
