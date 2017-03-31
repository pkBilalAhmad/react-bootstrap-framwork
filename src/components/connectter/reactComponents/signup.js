import React, { Component } from 'react';
import './BloodStyles.css'
class Signup extends Component {
    render() {
        return (

            <div className="container pd-20 bg-primary">
                <h2 className="red-blood pd-12 bdr-r-6 t-center">Registration form for Blood doners</h2>
                <div className="jumbotron bg-primary">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="fullName"></label>
                            <input type="text" id="name" placeholder="Full Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="Email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd"></label>
                            <input type="password" id="pwd" placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cell"></label>
                            <input type="text" id="cell" placeholder="Cell Number" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city"></label>
                            <input type="text" id="city" placeholder="City" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address"></label>
                            <input type="text" id="address" placeholder="Complate Address" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="blood"></label>
                            <input type="text" id="blood" placeholder="Blood Gruop" className="form-control" />
                        </div>
                        <button type="submit" className="red-blood bdr-r-6 pd-9">Submit Detaile</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Signup;