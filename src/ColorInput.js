import React from "react"
import colorNames from "colornames"

const ColorInput = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {

  return (
    <form>
        <label htmlFor="colorInput">Type in a Color name or id </label>
        <input 
            type="text" 
            name="colorInputName" 
            id="colorInput" 
            placeholder='Add color name'
            autoFocus 
            required 
            value={color} 
            onChange={(e)=>{
                setColor(e.target.value) 
                setHexValue(colorNames(e.target.value))
            }}
        />
        <button 
            type="button" 
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default ColorInput