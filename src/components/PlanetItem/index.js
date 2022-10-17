// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="item-container">
      <img className="planet" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-para">{description}</p>
    </div>
  )
}

export default PlanetItem
