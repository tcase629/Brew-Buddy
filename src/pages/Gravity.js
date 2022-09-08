//Calculator to raise the original gravity with DME
import React from 'react'

export default function Gravity() {
  const [gravityData, setGravityData] = React.useState(
    {measuredGravity: "", targetGravity: "", volume: ""}
  )

function handleChange(event) {
  setGravityData(prevGravityData=> {
    return {
      ...prevGravityData,
      [event.target.name]: event.target.value
    }
  })
}

const pointsDifference = (gravityData.targetGravity - gravityData.measuredGravity) * 1000
const pointsTotal = pointsDifference * gravityData.volume
const answer = pointsTotal / 49

  return (
    <div>
      <h1>Gravity Adjustment Calculator</h1>
        <form>
          <input 
            type="text" 
            placeholder="Volume"
            name="volume"
            value={gravityData.volume}  
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Meausured Gravity"
            name="measuredGravity"
            value={gravityData.measuredGravity} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            placeholder="Target Gravity"
            name="targetGravity"
            value={gravityData.targetGravity}  
            onChange={handleChange}
          />
        </form>
        <div>Add {gravityData.volume !== "" && 
          gravityData.measuredGravity !== "" && 
          gravityData.targetGravity !== "" ?
          answer.toFixed(3) : "0"} lbs of DME</div>
    </div>
  )
}