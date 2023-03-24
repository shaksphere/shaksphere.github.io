import React from 'react';
import '../portfolio/Portfolio.scss';

class Contact extends React.Component {
    
    render () {
    
    return (
        <>
        <div className="Contact" >
        <article className="contact-card">
        <h1>Connect With Me</h1>
        <div className="row-contact">
        <div className="column-contact">
        <h3>Email</h3>
        <span className="material-symbols-outlined" >outgoing_mail</span>
        <a href={"mailto: shak@shaksphere.au"}><br /> <br />shak@shaksphere.au
        </a>
        </div>
        <div className="column-contact">
        <h3>Phone</h3>
        <span className="material-symbols-outlined">smartphone</span>
        <a href="tel:+61405629848"><br /> <br /> 0405 629 848 
        </a>
        </div>
        <div className="column-contact">
        <h3>Personal Website</h3>
        <span className="material-symbols-outlined" >language</span>
        <a href="https://shaksphere.au" target="_blank"><br /> <br />shaksphere.au
                </a>
            </div>
            <div className="column-contact">
                <h3>LinkedIn</h3>
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" className="linkedin"alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/shakeelaabbas/" target="blank"> <br /> <br /> View my profile
                </a>    

            </div>
            </div>
          
        </article>
        </div>
        <div className="Contact">
            <section id="resume">
        <article>
            <div className="row-contact">
            <div className="column-contact">
            <h1>Download My Resumé</h1>
            <span className="material-symbols-outlined resume" >description</span>
            <a href="https://drive.google.com/file/d/1NPSMV1Rg833KRwdTMKEnVu6X7TLS1udj/view?usp=share_link" target="_blank" className="button"><br /><br />Click Here</a>
           </div>
           </div>
           </article>
           </section>
        </div>
        </>
             )
    }
}

export default Contact;

// ReactDOM.render(
//     <React.StrictMode>
//         <h1>Contact Shakeel</h1>
//     </React.StrictMode>,
//     document.getElementById('root')
// )












/*const emailIcon = <span className="material-symbols-outlined">outgoing_mail</span>;
const email = "shak@shaksphere.au";
const phoneIcon = <span className="material-symbols-outlined">smartphone</span>;
const mobile = '0405629848';
const contactHeading = <h1>Contact Shakeel</h1>;

export function Contact() {
    return (
        <div>
        {contactHeading}
        {emailIcon}
        <p>{email}</p>
        {phoneIcon}
        <p>{mobile}</p>
        </div>
    );
}*/