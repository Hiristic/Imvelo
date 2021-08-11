import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="box_welcome_text">
                    <h1 > Välkommen till ImVelo</h1>
                </div>
                <div className="info_home_page">
                    <p> Vi löser alla dina kemikaliehanteringsproblem... <br /> Kontakta oss för mer information </p>
                </div>

            </div>
        );
    }
}
export default Home;