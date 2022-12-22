import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const Navigate = useNavigate();
    const [details, setDetails] = useState({Rpassword: "", password: "" })

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
        const { Rpassword, password } = details;
        if (password === "") {
            alert('please enter the Password')
        } else if (Rpassword === "") {
            alert('please enter your Re-enter New Password')
        }else if (password != Rpassword) {
            alert('Password do not match')
        }else if (password.length < 6) {
            alert('Password must be not less than 6 char')
        }else if (Rpassword.length < 6) {
            alert('Password must be not less than 6 char')
        }else{
            alert('Your Password successfully Forget/Change')
            Navigate("/")
        }
    }

    return (
        <>
            <form className='container register' onSubmit={submitHandle}  style={{marginTop:"4rem"}} >
                <span id="emailHelp" className="form-text text-muted my-3 text-center ">Forget Password</span>
                <div className="form-group">
                    <label for="phone">Enter New Password</label>
                    <input type="password" className="form-control" name='password' id="password" placeholder="New Password" value={details.password} onChange={setVal} />
                </div>
                <div className="form-group">
                    <label for="Rpassword">Re-enter New Password</label>
                    <input type="password" className="form-control" name='Rpassword' id="Rpassword" placeholder="New Password" value={details.Rpassword} onChange={setVal} />
                </div>
                <div className='text-center my-2 ' >
                    <button type="submit" onClick={handleclick} className="btn btn-primary ">Submit</button></div>
            </form>
        </>
    )
};

export default Register;
