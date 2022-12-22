import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';

const Everification = () => {
    const Navigate = useNavigate();
    const [details, setDetails] = useState({name: "", email: "", phone: "", address: "" })

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
        const {email } = details;
        if (email ==="") {
            alert('please enter email')
        } else {
            alert('Your email Succesfully verified')
            Navigate('/')
        } 
    }

    return (
        <>
            <form className='container register' onSubmit={submitHandle} style={{marginTop:"4rem"}} >
                <span id="emailHelp" className="form-text text-muted my-3 text-center ">Verify Email</span>
                <div className="form-group">
                    <label for="email">Enter Email</label>
                    <input type="email" name='email' className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" value={details.email} onChange={setVal} />
                </div>
                <div className='text-center my-2 ' >
                    <button type="submit" onClick={handleclick} className="btn btn-primary ">Submit</button></div>
            </form>
        </>
    )
}

export default Everification;
