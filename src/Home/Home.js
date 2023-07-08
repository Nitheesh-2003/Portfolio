import profile from '../Asserts/profile1.png'
import Typewriter from 'typewriter-effect'
import '../Home/Home.css'
const Home = () => {
    return ( 
        <div className="home">
            <div className="content">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="home-left">
                    <h1>NITHEESH KUMAR S</h1>
                    <h3 className='second-head'>I am a</h3>
                    <h3 className='second-head hx'><Typewriter options={{autoStart : true,loop :true,delay :50,strings:["Web Developer","Software Developer","Web Designer"]}}/></h3>
                    <p>Highly creative and detail-oriented web designer with a passion for creating visually appealing and user-friendly websites. Motivated web developer with a passion for learning and developing new skills. Quick learner, able to adapt to new technologies and programming languages</p>
                    <a href='#contact-page'><button className='contact-me'>Contact Me</button></a>
                </div>
                <div className="home-right">
                <div class="ho-square b1"></div>
                <div class="ho-square b2"></div>
                <div class="ho-square b3"></div>
                <div class="ho-square b4"></div>
                <div class="ho-square b5"></div>
                    <img src={profile} alt="profile" />
                </div>
            </div>
            <div className="animation-area">
                    <ul className='home-ul'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
        </div>
     );
}
 
export default Home;