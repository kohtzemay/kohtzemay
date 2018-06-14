import React, { Component } from 'react';
import './index.css';

class ContactPage extends Component {

    render() {
        return (
            <div className="main-content">
                <h1 style={{marginTop: '15%', marginBottom: '5%'}}>Get in Touch</h1>

                <div className="social">

                    <div className="icons">
                        <a href="http://instagram.com/megicorn_" target="_blank">
                            <span class="tooltiptext">@megicorn_</span>
                            <img src="img/instagram.png" width="40px" />
                            <p>instagram</p>
                        </a>
                    </div>

                    <div className="icons">
                        <a href="https://www.linkedin.com/in/megan-koh-b02182144/" target="_blank">
                            <span class="tooltiptext">Megan Koh</span>
                            <img src="img/linkedin.png" width="40px" />
                            <p>linkedin</p>
                        </a>
                    </div>

                    <div className="icons">
                        <a href="http://vsco.co/megic0rn/images/1" target="_blank">
                            <span class="tooltiptext">@megic0rn</span>
                            <img src="img/vsco.png" width="40px" />
                            <p>vsco</p>
                        </a>
                    </div>

                    <div className="icons">
                        <a href="https://github.com/kohtzemay" target="_blank">
                            <span class="tooltiptext">kohtzemay</span>
                            <img src="img/github-logo-1.png" width="40px" />
                            <p>github</p>
                        </a>
                    </div>

                </div>
            </div>
        );
    }

}

export default ContactPage;
