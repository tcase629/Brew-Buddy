//Calculator to adjust final gravity with either dilution or boil off
import React from 'react'

export default function DiluteAndBoil() {
  const [diluteAndBoilData, setDiluteAndBoilData] = React.useState(
    {measuredGravity: "", targetGravity: "", currentVolume: "", targetVolume: "", currentBoilVolume: "", measuredBoilGravity: ""}
  )

function handleChange(event) {
  setDiluteAndBoilData(prevDiluteAndBoilData=> {
    return {
      ...prevDiluteAndBoilData,
      [event.target.name]: event.target.value
    }
  })
}
  //Calculations for Volume Change
  const measuredPoints = (diluteAndBoilData.measuredGravity - 1) * 1000
  const targetPoints = (diluteAndBoilData.targetGravity - 1) * 1000
  const volumeChange = (diluteAndBoilData.currentVolume * measuredPoints) / targetPoints
  //Calculations for Boil Off
  const measuredBoilPoints = (diluteAndBoilData.measuredBoilGravity - 1) * 1000
  const boilOffPoints = (diluteAndBoilData.currentBoilVolume * measuredBoilPoints) / (diluteAndBoilData.targetVolume)
  const boilOffConvert = (boilOffPoints / 1000) + 1
  
  return (
    <div>
      <h1>Dilute and Boil Calculator</h1>
      <h3>Volume Change</h3>
        <form>
          <input 
            type="text" 
            placeholder="Current Volume"
            name="currentVolume"
            value={diluteAndBoilData.currentVolume}  
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Meausured Gravity"
            name="measuredGravity"
            value={diluteAndBoilData.measuredGravity}
            onChange={handleChange} 
          />
          <input 
            type="text" 
            placeholder="Target Gravity"
            name="targetGravity"
            value={diluteAndBoilData.targetGravity}  
            onChange={handleChange}
          />
        </form>
        <div>{diluteAndBoilData.currentVolume !== "" && 
          diluteAndBoilData.measuredGravity !== "" && 
          diluteAndBoilData.targetGravity !== "" ? 
          volumeChange.toFixed(2) : "0"}
        </div>
      <h3>Boil Off</h3>
        <form>
          <input 
            type="text" 
            placeholder="Current Volume"
            name="currentBoilVolume"
            value={diluteAndBoilData.currentBoilVolume}  
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Target Volume"
            name="targetVolume"
            value={diluteAndBoilData.targetVolume} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            placeholder="Measured Gravity"
            name="measuredBoilGravity"
            value={diluteAndBoilData.measuredBoilGravity}  
            onChange={handleChange}
          />
        </form>
        <div>{diluteAndBoilData.currentBoilVolume !== "" && 
          diluteAndBoilData.targetVolume !== "" && 
          diluteAndBoilData.measuredBoilGravity !== "" ?
          boilOffConvert.toFixed(3) : "0"}</div>
    </div>
  )
}