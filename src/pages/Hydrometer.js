//Calculator to adjust the hydrometer reading based on temperature
import React from 'react'

export default function Hydrometer() {
  const [hydrometerData, setHydrometerData] = React.useState(
    {specificGravity: "", currentTemp: "", calibratedTemp: ""}
  )

  function handleChange(event) {
    setHydrometerData(prevHydrometerData => {
      return {
        ...prevHydrometerData,
        [event.target.name]: event.target.value
      }
    })
  }

  const measuredGravity = hydrometerData.specificGravity
  const currentTemperature = hydrometerData.currentTemp
  const calibratedTemperature = hydrometerData.calibratedTemp
  const correctedGravity = measuredGravity * ((1.00130346 - 0.000134722124 * currentTemperature + 0.00000204052596 * currentTemperature - 0.00000000232820948 * currentTemperature) / (1.00130346 - 0.000134722124 * calibratedTemperature + 0.00000204052596 * calibratedTemperature - 0.00000000232820948 * calibratedTemperature))
  // CG = MG * ((1.00130346 – 0.000134722124 * TR + 0.00000204052596 * TR – 0.00000000232820948 * TR) / 
  // (1.00130346 – 0.000134722124 * TC + 0.00000204052596 * TC – 0.00000000232820948 * TC))
  return (
    <div>
      <h1>Hydrometer Adjustment Calculator</h1>
        <form>
          <input 
            type="text" 
            placeholder="Gravity Reading"
            name="specificGravity"
            onChange={handleChange}
            value={hydrometerData.specificGravity}
          />
          <input 
            type="text" 
            placeholder="Current Temperature"
            name="currentTemp"
            onChange={handleChange}
            value={hydrometerData.currentTemp}
          />
          <input 
            type="text" 
            placeholder="Calibration Temperature"
            name="calibratedTemp"
            onChange={handleChange}
            value={hydrometerData.calibratedTemp}
          />
          <div>{hydrometerData.specificGravity !== "" && 
            hydrometerData.currentTemp !== "" && 
            hydrometerData.calibratedTemp !== "" ?
            correctedGravity.toFixed(3) : "0"}</div>
        </form>
    </div>
  )
}