import React, { Component } from 'react';
import './ForgotPassword.css';


export class ForgotPassword extends Component {

    handleSumbit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <h3> Glömt lösenord?</h3>
                    <div className="email_input">
                        <input type="email" className="form-control" placeholder="Skriva din e-post"
                            onClick={e => this.email = e.target.value} />
                    </div>
                    <button className="submitBtn"> Submit</button>
                </form>
            </div>
        )
    }

}

export default ForgotPassword;