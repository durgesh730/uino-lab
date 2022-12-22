import React, { useState } from 'react'
import './register.css'
import {useNavigate } from 'react-router-dom'

const Register = () => {

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
        const {name, email, phone, address } = details;
        if (name ==="") {
            alert('please enter the Name')
        } else if (email ==="") {
            alert('please enter your email')
        } else if (!email.includes('@')) {
            alert('please valid email')
        } else if (address ==="") {
            alert('please your address')
        } else if (phone ==="") {
            alert('Please Enter Your Phone number')
        }else if (phone.length < 10) {
            alert('Phone number must be 10 digits')
        } else {
            Navigate('/registered')
        } 
    }

    return (
        <>
            <form className='container register' onSubmit={submitHandle}>
            <span id="emailHelp"  className="form-text text-muted my-3 text-center ">User Registration</span>
            <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" name='name' className="form-control" id="exampleInputName" placeholder="Name" value={details.name} onChange={setVal} />
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email"  name='email' className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" value={details.email} onChange={setVal}/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="text" className="form-control" name='phone' id="phone" placeholder="Phone Number"  value={details.phone} onChange={setVal} />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="address" className="form-control" name='address' id="address" placeholder="address" value={details.address} onChange={setVal} />
                </div>
                <div className='text-center my-2 ' >
                    <button type="submit" onClick={handleclick} className="btn btn-primary ">Submit</button></div>
            </form>
        </>
    )
};

export default Register;
