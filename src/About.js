import Typewriter from 'typewriter-effect'
import {BsCalendar3} from 'react-icons/bs'
import './About.css';
const About = () => {
    return ( 
        <div className='about'>
            <h2>ABOUT ME</h2>
            <div className="about-content">
                <div className="ab-left">
                    <h2>I'm <span className='motion-text'>NITHEESH</span> and I'm a &nbsp;</h2>
                    <h2 className='ab-motion-text'><Typewriter options={{autoStart : true,loop :true,delay :50,strings:["Web Developer","Software Developer","Web Designer"]}}/></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos numquam eligendi quo placeat dignissimos dolore earum molestiae optio corrupti laudantium, consequatur, odit sint distinctio.molestiae optio corrupti laudantium, consequatur, odit sint distinctio.</p>
                    <div className="ab-table">
                        <table>
                            <tr>
                                <td>Birthday</td>
                                <td>02 April 2003</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>+91-770623734</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>svnitheesh2003@gmail.com</td>
                            </tr>
                            <tr>
                                <td>From</td>
                                <td>18-55, Chothavilai, KanyaKumari-629602</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>Tamil, English</td>
                            </tr>
                        </table>
                    </div>
                    <button className='download contact'>Download CV</button>
                </div>
                <div className="ab-right">
                <h2>Education</h2>
                <div className="ab-box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="about-card">
                        <div className="cal">
                        <div className="ab-logo">
                                <BsCalendar3></BsCalendar3>
                                <b>2017-2018</b>
                            </div>
                            <div className="ab-card-content">
                                <h3>Secondary School</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste consequuntur repudiandae, molestias reiciendis dolorem.</p>
                            </div>
                        </div>
                        <div className="cal">
                            <div className="ab-logo">
                                <BsCalendar3></BsCalendar3>
                                <b>2019-2020</b>
                            </div>
                            <div className="ab-card-content">
                                <h3>Higher Seconday</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste consequuntur repudiandae, molestias reiciendis dolorem.</p>
                            </div>
                        </div>
                        <div className="cal">
                            <div className="ab-logo">
                                <BsCalendar3></BsCalendar3>
                                <b>2020-2024</b>
                            </div>
                            <div className="ab-card-content">
                                <h3>SSLC</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste consequuntur repudiandae, molestias reiciendis dolorem.</p>
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