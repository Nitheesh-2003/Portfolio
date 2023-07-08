import {AiOutlineFormatPainter} from 'react-icons/ai'
import image from '../Asserts/N-logo1.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {BsFillChatRightTextFill} from 'react-icons/bs'
import { AiFillProject} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {SiMusicbrainz} from 'react-icons/si'
import {scroller } from 'react-scroll';

const Navbar = () => {
    const handleHome=()=>{
        scroller.scrollTo('home-page', {
            duration: 800, 
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    }
    const handleAbout=()=>{
        scroller.scrollTo('about-page', {
            duration: 800, 
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    }
    const handleSkills=()=>{
        scroller.scrollTo('skills-page', {
            duration: 800, 
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    }
    const handleProject=()=>{
        scroller.scrollTo('project-page', {
            duration: 800, 
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    }
    const handleContact=()=>{
        scroller.scrollTo('contact-page', {
            duration: 800, 
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    }
    return ( 
        <div className='navbar'>
                <div className="nav-links">
                    <ul>
                        <li>
                            <img className='profile' src={image} alt="N" />
                        </li>
                        <li>
                        <div onClick={handleHome}  className='nav-icon'><FaHome size={21} style={{color : 'black'}}></FaHome></div>

                        </li>
                        <li>
                            <div onClick={handleAbout}  className='nav-icon'><BsFillChatRightTextFill size={21}></BsFillChatRightTextFill></div>
                        </li>
                        <li>
                        <div onClick={handleSkills}  className='nav-icon'>
                                <SiMusicbrainz size={21}></SiMusicbrainz>
                            </div>
                        </li>
                        <li>
                            <div onClick={handleProject} className='nav-icon'>
                                <AiFillProject size={21}></AiFillProject>
                            </div>
    
                        </li>
                        <li>
                            <div className='nav-icon' onClick={handleContact}>
                                <IoMdContact size={25}></IoMdContact>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
     );
}
 
export default Navbar;