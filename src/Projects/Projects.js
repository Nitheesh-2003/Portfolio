import { DiReact } from 'react-icons/di';
import {IoLogoNodejs,IoLogoFirebase} from 'react-icons/io5'
import '../Projects/Projects.css'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    return ( 
        <div className="projects">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="pj-content">
                <h2 className='title'>PROJECTS</h2>
                    <div className="pj-card-block">
                        <div className="card-left pj-card" data-aos="zoom-in">
                        <div class="lg-square b1"></div>
                        <div class="lg-square b2"></div>
                        <div class="lg-square b3"></div>
                        <div class="lg-square b4"></div>
                        <div class="lg-square b5"></div>
                            <h2>Chat AI</h2>
                            <p className='pj-para'>Designed a private social media website for GCE students with four modules : Post, Chat, Chatbot, Q/A. These modules enable seamless communication, information sharing and collaboration  among college community</p>
                            <div className="pj-icon-box">
                                <div className='pj-icon'><DiReact size={35}></DiReact></div>
                                <div className="pj-inner-icon">
                                    <p>React for UI designing</p>
                                </div>
                            </div>
                            <div className="pj-icon-box">
                                <div className='pj-icon'><IoLogoNodejs size={35}></IoLogoNodejs></div>
                                <div className="pj-inner-icon">
                                    <p>Node Js for creating server</p>
                                </div>
                            </div>
                            <div className="pj-icon-box">
                                <div className='pj-icon'><IoLogoFirebase size={35}></IoLogoFirebase></div>
                                <div className="pj-inner-icon">
                                    <p>Firebase for storage and Auth</p>
                                </div>
                            </div>
                            <Link className='pj-button'>Go to Website</Link>
                        </div>
                        <div className="card-right  pj-card" data-aos="zoom-in">
                        <div class="lg-square b1"></div>
                        <div class="lg-square b2"></div>
                        <div class="lg-square b3"></div>
                        <div class="lg-square b4"></div>
                        <div class="lg-square b5"></div>
                            <h2>Progen'I</h2>
                            <p className='pj-para'>Designed a website for Progen'i, the department function of GCE,Salem that enables students from other college to register and participate in events.The user-friendly platform allows for easy event browsing, registration and timely updates</p>
                            <div className="pj-icon-box">
                                <div className='pj-icon'><DiReact size={35}></DiReact></div>
                                <div className="pj-inner-icon">
                                    <p>React for UI designing</p>
                                </div>
                            </div>
                            <div className="pj-icon-box">
                                <div className='pj-icon'><IoLogoNodejs size={35}></IoLogoNodejs></div>
                                <div className="pj-inner-icon">
                                    <p>Node Js for creating server</p>
                                </div>
                            </div>
                            <div className="pj-icon-box">
                                <div className='pj-icon'><IoLogoFirebase size={35}></IoLogoFirebase></div>
                                <div className="pj-inner-icon">
                                    <p>Firebase for storage and Auth</p>
                                </div>
                            </div>
                            <div className="pj-button">Go to Website</div>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Projects;