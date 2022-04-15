import React from 'react'
import { useParams } from 'react-router-dom'
import "./EmailConfirm.css"

export default function EmailConfirm() {

    const {token} = useParams()
  return (
    <div className='email-container'> hello from email confirm. Token is {token}</div>
  )
}
