import { FaCopy } from 'react-icons/fa'

const Password = ({password}) => {

  const copyPass = () => {
    // logic for copying password to clipboard here
    // password is already stored in the prop 'password'
  }
    return (
        <div className="password-input-box">
        <input className="password-input" onChange={() => {}} type="text" value={password}/>
        <FaCopy className="btn copy-btn" title="Copy to clipboard" onClick={copyPass} />
      </div>
    )
}


export default Password
