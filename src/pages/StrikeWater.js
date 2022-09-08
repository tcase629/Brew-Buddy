//Calculator to find the temp of water before pouring in your grain
import React from 'react'

export default function StrikeWater() {
  const [strikeData, setStrikeData] = React.useState(
    {targetTemp: "", grainTemp: "", ratio: ""}
  )

  function handleChange(event) {
    setStrikeData(prevStrikeData => {
      return {
        ...prevStrikeData,
        [event.target.name]: event.target.value
      }
    })
  }

  const tTemp = strikeData.targetTemp
  const gTemp = strikeData.grainTemp
  const ratio = strikeData.ratio
  const first = (0.2 / ratio) * (tTemp - gTemp)
  const strikeTotal = Math.round(parseInt(first) + parseInt(tTemp))

  return (
    <div>
      <h1>Strike Water Calculator</h1>
        <form>
            <input 
              type="text" 
              placeholder="Target Temperature"
              name="targetTemp"
              onChange={handleChange}
              value={strikeData.targetTemp}
            />
            <input 
              type="text" 
              placeholder="Grain Temperature"
              name="grainTemp"
              onChange={handleChange}
              value={strikeData.grainTemp}
            />
            <input 
              type="text" 
              placeholder="Water to Grain Ratio (quarts per pound)"
              name="ratio"
              onChange={handleChange}
              value={strikeData.ratio}
            />
            <div>{strikeData.targetTemp !== "" && 
              strikeData.grainTemp !== "" && 
              strikeData.ratio !== "" ?
              strikeTotal : "0"}° F</div>
        </form>
    </div>
  )
}