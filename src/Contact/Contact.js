 import './Contact.css'
import {AiOutlineMail, AiOutlinePhone,AiOutlineInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {FiGithub} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'
import 'aos/dist/aos.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    
    const email="svnitheesh2003@gmail.com";
    const address="Chothavilai"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_pjxxxip', 'template_1v1po2e', form.current, 'N3X1ewi-3qjeqGOVB')
          .then((result) => {
            console.log(result.text);
            toast.success('Email sent successfully!', {
              position: 'top-right',
              autoClose: 3000, 
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
            });
          })
          .catch((error) => {
            console.error(error.text);
            toast.error('Failed to send email. Please try again.', {
              position: 'top-right',
              autoClose: 3000, 
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
            });
          });
        };
    return ( 
        <div className="cc-contact" id='contact-page' >
            <ToastContainer />
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="cc-left" data-aos="zoom-in">
            <div class="lg-square b1"></div>
            <div class="lg-square b2"></div>
            <div class="lg-square b3"></div>
            <div class="lg-square b4"></div>
            <div class="lg-square b5"></div>
                <div className="cc-head">
                    <h2>Just Say Hello</h2>
                </div>
                <form className="cc-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Your Name' />
                    <input type="text" name="user_email" placeholder='Your Email' />
                    <input type="text" name="user_subject" placeholder='Enter the Subject..' />
                    <textarea name="message"  cols="25" rows="5" placeholder='Your Message.......'></textarea>
                    <button className="cc-button">Send Me</button>
                </form>
            </div>
            <div className="cc-right" data-aos="zoom-in">
                    <div class="lg-square b1"></div>
                    <div class="lg-square b2"></div>
                    <div class="lg-square b3"></div>
                    <div class="lg-square b4"></div>
                    <div class="lg-square b5"></div>
                    <h2 className='cc-right-head'>Contact Info</h2>
                    <p className='cc-con'>I invite you to reach out, as I am eager to discuss how my skills and experience can contribute to your organization's success</p>
                    <div className="cc-icon">
                        <div className="cc-contact-icon">
                            <a href={`mailto:${email}`}>
                            <div className="icon-round"><AiOutlineMail size={35}></AiOutlineMail></div>
                            </a>
                            <div className="cc-icon-inner">
                                <h4>Email</h4>
                                <p>svnitheesh2003@gmail.com</p>
                            </div>
                        </div>
                        <div className="cc-contact-icon">
                        <div className="icon-round"><AiOutlinePhone size={35}></AiOutlinePhone></div>
                            <div className="cc-icon-inner">
                                <h4>Phone</h4>
                                <pre>+91-7708623734</pre>
                            </div>
                        </div>
                        <div className="cc-contact-icon">
                            <a href={`https://www.google.com/maps/place/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
                            <div className="icon-round"><GoLocation size={35}></GoLocation></div>
                            </a>
                            <div className="cc-icon-inner">
                                <h4>Address</h4>
                                <pre>Chothavilai,</pre>
                                <pre>Kanyakumari-629602;
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="social-icon">
                        <div className="ss-icon">
                        <div className="icon-float s1"><a href="https://www.instagram.com/sv_nitheesh/" target='_blank' rel='noopener noreferrer'><AiOutlineInstagram size={25}></AiOutlineInstagram></a></div>
                        <div className='icon-float s2'><a href="https://github.com/Nitheesh-2003/" target='_blank' rel='noopener noreferrer'><FiGithub size={25}></FiGithub></a></div>
                        <div className='icon-float s3'><a href="https://www.linkedin.com/in/nitheesh-kumar-s/" target='_blank' rel='noopener noreferrer'><GrLinkedinOption size={25}></GrLinkedinOption></a></div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Contact;