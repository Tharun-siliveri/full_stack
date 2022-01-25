import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div style={{height:'400px'}}>
           <form style={{width:'450px',marginLeft:'500px'}}>
                <h3 style={{textAlign:'center',padding:'30px'}}>Sign Up</h3>

                <div className="form-group">
                    <label>name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{backgroundColor:'white'}} ><Link to="/SlotBookingPage">Sign Up</Link></button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default Form

