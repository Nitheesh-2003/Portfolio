import {AiOutlineFormatPainter} from 'react-icons/ai'
import image from './Asserts/N-logo.png'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="left">
                <img src={image} alt="N" />
                <h3>ITHEESH</h3>
            </div>
            <div className="right">
                <div className="nav-links">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Me</a></li>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Achievements</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li className='icon'><AiOutlineFormatPainter size={30}/></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;