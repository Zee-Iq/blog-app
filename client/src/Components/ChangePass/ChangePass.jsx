import axios from "axios"
import { useState } from "react"
import {  useParams } from "react-router-dom"

export default function ChangePass() {

    const [pass, setPass] = useState('')
    const [message, setMessage] = useState('')

    const {token} = useParams()


    const handleSubmit = async () => {

        try {
            
            const response = await axios.post('/users/changepass', {pass, token})

            console.log('reponse is ', response)

            if (response.data.success) {
                setMessage('Password changed successfully')
            } else {
                setMessage('There was a problem changing your password')
            }
        } catch (error) {

            console.log('error is', error.message)
            setMessage('There was a problem changing your password')
            
        }

    }

    return <div className="container">
        <p>Please type your new password</p>
        <input placeholder="Type your password" value={pass} onChange={e => setPass(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        <p>{message}</p>
    </div>
}