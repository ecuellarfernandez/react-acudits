import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {

    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <Link to='/principal'>Enter jokes page &#10142;</Link>
        </div>
    )
}
