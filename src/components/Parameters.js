import { useState } from "react";

const Parameters = ({genPass}) => {
    const [passLength, setPassLength] = useState('16');
    const [nums, setNums] = useState(true);
    const [upper, setUpper] = useState(true);
    const [lower, setLower] = useState(true);
    const [symbols, setSymbols] = useState(true);
    
    const onSubmit = (e) => {
      // Stops page from reloading on form submit
      e.preventDefault()
      genPass(passLength,nums, upper, lower, symbols)
    }

    return (
        <div className="parameter-container">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label">Length: {passLength}</label>
            <input className="slider" defaultValue={passLength} onChange={(e) => setPassLength(e.target.value)} type="range" min="12" max="99" />
          </div>
          <div className="form-control form-check">
            <label className="label box1">
              <input className="check-box" type="checkbox" checked={nums} onChange={(e) => setNums(e.target.checked)}/>
              <span className="checkmark"></span><br />
              Numbers</label>
            <label className="label box2">
              <input className="check-box" type="checkbox" checked={upper} onChange={(e) => setUpper(e.target.checked)}/><br />
              Uppercase</label>
            <label className="label box3">
              <input className="check-box" type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)}/><br />
              Lowercase</label>
            <label className="label box4">
              <input className="check-box" type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)}/><br />
              Symbols</label>
          </div>
          <input type="submit" className="btn btn-block gen-btn" value="Generate Password" />
        </form>
      </div>
    )
}

export default Parameters
