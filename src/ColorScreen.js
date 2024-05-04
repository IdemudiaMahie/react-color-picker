import React from 'react'

const ColorScreen = ({ color, hexValue, isDarkText }) => {
  return (
    <section
        style={{
            backgroundColor: color, 
            color: isDarkText ? 'black' : 'white'
        }}
    >
        <p>{color ? color : 'Empty Value'}</p>
        <p>{hexValue}</p>
    </section>
  )
}

export default ColorScreen