import React from "react";
import ReactDOM from 'react-dom';
import Nav from '../components/Nav'

function Contact() {
    const emailIcon = <span className="material-symbols-outlined">outgoing_mail</span>;
    const email = "shak@shaksphere.au";
    const phoneIcon = <span className="material-symbols-outlined">smartphone</span>;
    const mobile = '0405629848';
    const contactHeading = <h1>Contact Shakeel</h1>;
    
    return (
        <>

        <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
        <div className="Contact">
            <div>
                <a href="https://shaksphere.au" target="_blank">
                <img loading="lazy" 
                src={'assets/images/shaksphere.jpg'} className="logo" alt="Shaksphere logo" />
                </a>
            </div>

            <div>
                {contactHeading}
                {emailIcon}
                <p>{email}</p>
                {phoneIcon}
                <p>{mobile}</p>
            </div>

        </div>

        </>
    )
}

export default Contact

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