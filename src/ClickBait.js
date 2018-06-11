import React, {Component} from 'react'

class ClickBait extends React.Component {
    render() {
      return <div className= {this.props.name}> 
      <a href= {this.props.a}/>
       <img sre= {this.props.img} alt= {this.props.alt}/>
       <p> {this.props.p}</p>
       </div>
    }
  }
