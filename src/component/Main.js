import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './main.css'

const Main = () => {

    const Navigate = useNavigate();
    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandle = e => {
        e.preventDefault();
        // console.log("you are logged")
    }

    const setVal = e => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setDetails(() => {
            return {
                ...details,
                [name]: value
            }
        })
    }

    const handleclick = (e) => {
        e.preventDefault();
        const { email, password } = details;
        if (email === "") {
            alert('please enter the email')
        } else if (!email.includes('@')) {
            alert('please valid email')
        } else if (password === " ") {
            alert('please your password')
        } else if (password.length < 6) {
            alert('password must be 6 char')
        } else {
            Navigate('/logged')
        }
    }

    return (
        <>
            <form className='container login' onSubmit={submitHandle}>
                <span id="emailHelp" className="form-text text-muted my-3 text-center ">User Login</span>
                <div className="form-group">
                    <label for="Email">Email address</label>
                    <input type="email" className="form-control" name="email" id="Email" aria-describedby="emailHelp" placeholder="Enter email" value={details.email} onChange={setVal} />
                </div>
                <div className="form-group">
                    <label for="Password">Password</label>
                    <input type="password" className="form-control" name="password" id="Password" placeholder="Password" value={details.password} onChange={setVal} />
                </div>
                <Link id="emailHelp" to="/" className="form-text text-muted ">create new account/User Registration</Link>
                <Link id="emailHelp" to="/forget" className="form-text text-muted ">Forget Password/Change Password</Link>
                <Link id="emailHelp" to="/everification" className="form-text text-muted ">Email Verification</Link>
                <div className='text-center my-2 ' >
                    <button type="submit" onClick={handleclick} className="btn btn-primary ">Submit</button></div>
            </form>
        </>
    )
};

export default Main
