import "./EmailConfirm.css"
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'
import React from "react"

export default function EmailConfirm() {

    const {token} = useParams()
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    // contact the server to send the token
    useEffect(() => {

        const getData = async () => {

            try {
                const response = await axios.get(`/users/emailconfirm/${token}`)
                
                console.log('reponse is', response)

                if (response.data.success) {
                    setMessage('Your email has been verified! In few seconds you will be redirected to the home page')

                    setTimeout(() => navigate.push('/'), 5000)
                    
                } else {
                    setMessage('Your email could not be verified, please contact the system administrators')
                }

            } catch (error) {
                
                console.log(error.message)
            }
        }

        getData()
    }, [])

    return <div className='email-container'>
        <p>Thank you for registering in our App</p>
        <p>Please wait a while until we verify your email</p>
        <p>{message}</p>
        </div>
}