import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 200
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  getPicture = () => {
    if (this.props.eyeColor === "blue") {
      console.log(BlueBaby)
      return BlueBaby
    } else if (this.props.eyeColor === "glowing") {
      console.log(GlowingBaby)
      return GlowingBaby
    } else if (this.props.eyeColor === "sun") {
      console.log(SunBaby)
      return SunBaby
    } else {
      return normalBaby
    }
  }


  render() {
    return (
      <li className="hogbabies">
        <h1>Name</h1>
        <h3>Weight:</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color:{this.props.eyeColor}</h4>

        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.getPicture()} style={{height: `${this.state.weight}px`}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }

}
