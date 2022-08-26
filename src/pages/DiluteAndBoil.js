//Calculator to adjust final gravity with either dilution or boil off
import React from 'react'

export default function DiluteAndBoil() {

  function handleChange() {

  }
  
  const answer = "answer"
  
  return (
    <div>
      <h1>Dilute and Boil Calculator</h1>
        <form>
          <input 
            type="text" 
            placeholder="Volume"
            name=""
            value=""  
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Meausured Gravity"
            name=""
            value="" 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            placeholder="Target Gravity"
            name=""
            value=""  
            onChange={handleChange}
          />
        </form>
        <div>{answer}</div>
    </div>
  )
}