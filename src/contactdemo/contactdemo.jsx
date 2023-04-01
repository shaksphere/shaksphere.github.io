import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import '../App.scss';
import Header from '../components/Header';
import Contact from '../contact/Contact';
import { useNavigate } from "react-router-dom";

function ContactDemo() {
  const [cast, setCast] = useState([]);
  const [memberInfo, setMemberInfo] = useState(null);       
    
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('cast.json');
        setCast(await response.json());
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // async function fetchCast() {
  //   const response = await fetch('cast.json');
  //   setCast(await response.json());
  // }

  // useEffect(() => {
  //   fetchCast();
  // });
 
  //const [count, setCount] = useState(0)
  return (
    <>
    <section id="contactdemo">
    <div className="ContactDemo">
    <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />

      <Header />
      <section id="contact">
      <Contact />
      </section>      </div>
      </section>
    </>
  )
}

export default ContactDemo;
