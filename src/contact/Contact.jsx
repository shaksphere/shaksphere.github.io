import React from 'react';
import '../portfolio/portfolio.scss';

class Contact extends React.Component {
    
    render () {
    
    return (
        <>
        <div className="Contact" >
        <h1>Connect With Me</h1>
        <article className="contact-card">
        <div className="row">
        <div className="column">
        <h3>Email</h3>
        <a href={"mailto: shak@shaksphere.au"}>shak@shaksphere.au
        <span className="material-symbols-outlined" >outgoing_mail</span>
        </a>
        </div>
        <div className="column">
        <h3>Phone</h3>
        <a href="tel:+61405629848"> 0405 629 848 
        <span className="material-symbols-outlined">smartphone</span>
        </a>
        </div>
        <div className="column">
        <h3>Personal Website</h3>
                <a href="https://shaksphere.au" target="_blank">
                <img loading="lazy" 
                src={'../../assets/images/shaksphere.jpeg'} className="logo" alt="Shaksphere logo" />
                </a>
            </div>
            </div>
        </article>

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