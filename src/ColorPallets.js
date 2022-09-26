import React from 'react'

export default function ColorPallets(props) {
    const objStyle = {
        position : "absolute",
        right : "1px",
        bottom : "0px"
    }
  return (
    <div style={props.style}>
       <div style={objStyle}>
       <h3>Custom Themes</h3>
        <div className="form-check form-switch" >
            <input className="form-check-input" onClick={props.greenToggler} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Green Mode</label>
        </div>
        <div className="form-check form-switch" >
            <input className="form-check-input" onClick={props.pinkToggler} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Pink Mode</label>
        </div>
       </div>
    </div>
  )
}
