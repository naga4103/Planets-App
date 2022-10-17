// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">PLANETS</h1>

        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
