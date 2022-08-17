//Calculator to measure alcohol by volume
import React from 'react'

export default function ABV() {
  const [formData, setFormData] = React.useState(
    {originalGravity: "", finalGravity: ""}
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const og = formData.originalGravity
  const fg = formData.finalGravity
  const total = (og - fg) * 131.25
  
  return (
    <div>
      <h1>ABV Calculator</h1>
        <form>
          <input 
            type="text" 
            placeholder="Original Gravity"
            name="originalGravity"
            onChange={handleChange}
            value={formData.originalGravity}
          />
          <input 
            type="text" 
            placeholder="Final Gravity"
            name="finalGravity"
            onChange={handleChange}
            value={formData.finalGravity}
          />
          <div>{total.toFixed(2)}%</div>
        </form>
    </div>
  )
}
