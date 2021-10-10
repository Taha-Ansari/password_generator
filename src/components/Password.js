import { FaCopy } from 'react-icons/fa'

const Password = () => {
    return (
        <div className="password-input-box">
        <input className="password-input" type="text" />
        <FaCopy title="Copy to clipboard" placeholder="test" className="btn copy-btn"/>
      </div>
    )
}

export default Password
