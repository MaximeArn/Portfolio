import React from 'react'
import './landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import resume from '../../assets/resume.jpg';

const Landing = () => {
    return (
        <div className="landing-background">
                <header className="navbar">
                    <div className="logo-section">
                        <div className="logo">
                            <p>M</p>
                        </div>
                        <div className="logo-text">
                            <h1>Maxime Arnould</h1>
                            <h2>Web Developer</h2>
                        </div>
                    </div>
                    <div className="burger-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </header>
            <div className="landing-content">

                <div className="text">
                    <p className="presentation">Hi Myself <strong>Maxime Arnould</strong></p>
                    <h2 className="sub-title">Professionel Web Developer</h2>
                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorum perspiciatis ipsa quos quam. Vero reiciendis quasi pariatur obcaecati animi totam architecto corporis accusamus beatae, cumque rerum unde labore aliquid!</p>
                </div>

                <div className="buttons">
                    <button className="green-button">About Me</button>
                    <a href={resume} download="Maxime-Arnould-Resume">
                    <button>
                        Download CV
                    </button>

                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing
