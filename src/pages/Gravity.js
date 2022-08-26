//Calculator to raise the original gravity with DME
import React from 'react'

export default function Gravity() {

function handleChange() {

}

const answer = "answer"

  return (
    <div>
      <h1>Gravity Adjustment Calculator</h1>
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