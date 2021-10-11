import { FaCopy } from 'react-icons/fa'

const Password = ({password}) => {

  const copyPass = () => {
    // copy password to clipboard 
    navigator.clipboard.writeText(password);
    // trigger copied animation
  }
    return (
        <div className="password-input-box">
        <input className="password-input" onChange={() => {}} type="text" value={password}/>
        <FaCopy className="btn copy-btn" title="Copy to clipboard" onClick={copyPass} />
      </div>
    )
}


export default Password
