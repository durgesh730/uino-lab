import React from 'react'
import { Link } from 'react-router-dom'

const Logged = () => {
    return (
        <>
            <div style={{ textAlign: "center", paddingTop: "4rem", textDecoration:"none"}} >
                <span>Your are successfully Registered</span>
                <div>
                    <Link to="/" >Go To Home Page</Link>
                </div>
            </div>
        </>
    )
}

export default Logged
