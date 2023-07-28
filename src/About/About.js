import Typewriter from 'typewriter-effect'
import {BsCalendar3} from 'react-icons/bs'
import './About.css';
import 'aos/dist/aos.css';

const About = () => {
   
    return ( 
        <div className='about'>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <h2 className='about-head'>ABOUT ME</h2>
            <div className="about-content">
                <div className="ab-left " data-aos="fade">
                <div class="lg-square b2"></div>
                    <h2>I'm <span>NITHEESH</span> and I'm a &nbsp;</h2>
                    <h2 className='ab-motion-text'><Typewriter options={{autoStart : true,loop :true,delay :50,strings:["Web Developer","Software Developer","Web Designer"]}}/></h2>
                    <p>Highly creative and detail-oriented web designer with a passion for creating visually appealing and user-friendly websites. Motivated web developer with a passion for learning and developing new skills. Quick learner, able to adapt to new technologies and programming languages</p>
                    <div className="ab-table" >
                        <table>
                            <tr>
                                <td><b>Birthday</b></td>
                                <td>02 April 2003</td>
                            </tr>
                            <tr>
                                <td><b>Phone</b></td>
                                <td>+91-770623734</td>
                            </tr>
                            <tr>
                                <td><b>Email</b></td>
                                <td>svnitheesh2003@gmail.com</td>
                            </tr>
                            <tr>
                                <td><b>From</b></td>
                                <td>Nagercoil, KanyaKumari-629602</td>
                            </tr>
                            <tr>
                                <td><b>Language</b></td>
                                <td>Tamil, English</td>
                            </tr>
                        </table>
                    </div>
                    <button className='cc-button ab-button '>Download CV</button>
                </div>
                <div className="ab-right" data-aos="zoom-in">
                <div class="lg-square b1"></div>
                <div class="lg-square b2"></div>
                <div class="lg-square b3"></div>
                <div class="lg-square b4"></div>
                <div class="lg-square b5"></div>
                <h2>Education</h2>
                <div className="ab-box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="about-card">
                        <div className="cal">
                        <div className="about-logo">
                                <div className='icon-round'><BsCalendar3></BsCalendar3></div>
                                <div>2020-2024</div>
                        </div>
                            <div className="ab-card-content">
                                <h3>B.E. Computer Science</h3>
                                <p>Currently pursuing a Bachelor's degree in Computer Science from Government College of Engineering, Salem, maintaining a CGPA of 9.5 up to the sixth semester.</p>
                            </div>
                        </div>
                        <div className="cal">
                            <div className="about-logo">
                            <div className='icon-round'><BsCalendar3></BsCalendar3></div>
                                <div>2018-2020</div>
                            </div>
                            <div className="ab-card-content">
                                <h3>Higher Seconday Education</h3>
                                <p>Completed my  Higher Secondary in Computer Science from Hebron Matriculation Higher Secondary School, with an aggregate of 90%.</p>
                            </div>
                        </div>
                        <div className="cal">
                            <div className="about-logo">
                                <div className='icon-round'><BsCalendar3></BsCalendar3></div>
                                <div>2017-2018</div>
                            </div>
                            <div className="ab-card-content">
                                <h3>SSLC</h3>
                                <p>Completed my Secondary Education from Hebron Matriculation Higher Secondary School, with an aggregate of 97%.            </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                
        </div>
     );
}
 
export default About;