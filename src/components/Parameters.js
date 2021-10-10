
const Parameters = () => {
    return (
        <div className="parameter-container">
        <form>
          <div className="form-control">
            <label className="label">Length: 20</label>
            <input className="slider" defaultValue="20" type="range" min="12" max="99" />
          </div>
          <div className="form-control form-check">
            <label className="label box1">
              <input className="check-box" type="checkbox" />
              <span className="checkmark"></span><br />
              Numbers</label>
            <label className="label box2">
              <input className="check-box" type="checkbox" /><br />
              Uppercase</label>
            <label className="label box3">
              <input className="check-box" type="checkbox" /><br />
              Lowercase</label>
            <label className="label box4">
              <input className="check-box" type="checkbox" /><br />
              Symbols</label>
          </div>
          <input type="submit" className="btn btn-block gen-btn" value="Generate Password" />
        </form>
      </div>
    )
}

export default Parameters
