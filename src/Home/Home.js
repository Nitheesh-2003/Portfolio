import video from '../Asserts/particles.mp4'
import profile from '../Asserts/profile.png'
import Typewriter from 'typewriter-effect'
import '../Home/Home.css'
const Home = () => {
    return ( 
        <div className="home">
            <div className="video">
                <video src={video} autoPlay muted loop></video>
            </div>
            <div className="content">
            <div className="home-left">
                    <h1>NITHEESH KUMAR S</h1>
                    <h3>I am a</h3>
                    <h3 className='motion-text'><Typewriter options={{autoStart : true,loop :true,delay :50,strings:["Web Developer","Software Developer","Web Designer"]}}/></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor, error aliquid ut natus minima earum quis harum ducimus provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor, error aliquid ut natus minima earum quis harum ducimus provident?</p>
                    <button className='contact'>Contact Me</button>
                </div>
                <div className="home-right">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;