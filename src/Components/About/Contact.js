import React from 'react';
import styled from 'styled-components';
import MainSubTitle from '../MainSubTitle';
import { device } from '../../Theme/MediaQueries';
import Swal from 'sweetalert2'





const ContactWrapper = styled.div`
      padding-bottom: 40px;
      background: var(--contactBg);
.contact__subtitle { 
    text-align: center;
    font-family: "Cabin";
    font-weight: 400;
    font-style: italic;
    font-size: 1.7rem;
    color: var(--pTag);
    margin-bottom: 60px;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    flex-direction: column;
  }

  .form__item01 {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${device.tablet}{
      width: 100%;
    }


   input[type="text"] {
     width: 100%;
    background: #2C2A2A;
    border: none;
    height: 80px;

    }
    input { 
    margin-bottom: 44px;
    width: 100%;
    display: block;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 7px;
    border: 1px solid #cbc8c8;
    color: var(--white);
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    }
  }
  .form__item02 { 
    width: 47%;
    @media ${device.tablet}{
      width: 100%;
    }
    textarea { 
      width: 100%;
      resize: none;
    padding-bottom: 20px;
    min-height: 328px;
    padding: 20px;
    margin-bottom: 44px;
    background: #2C2A2A;
    border: none;
    font-size: 1.6rem;
    color: var(--white);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    }
  }
}

.form__btn { 
 input {
  display: block;
    margin: 0 auto;
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    font-size: 2.4rem;
    color: var(--white);
    border: none;
    padding: 10px 20px;
    margin-top: 50px;
    margin-bottom: 30px;
    width: 200px;
    min-height: 70px;
    background: #C1A667;
    -webkit-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;

    &:hover { 
      color: #C1A667;
      background: var(--white);
    }
 }
}
`

function Contact() {

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "e740604c-4f2b-4728-88fc-f35603f41136");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     Swal.fire({
  //       title: "Success",
  //       text: "Message sent successfully!",
  //       icon: "success"
  //     });
  //   }
  // };
  const [formvalue, setFormvalue] = useState({ name: '', email: '', subject: '', message: '' });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation=(e)=>{
    const{name,value}=e.target;
    setFormvalue({...formvalue,[name]:value});
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  }

  const validationform=(value)=>{
    const errors={};

    if(!value.name){
      errors.name="Please Enter Name";
    }

    if(!value.email){
      errors.email="Please Enter Email";
    }

    if(!value.subject){
      errors.subject="Please Enter Subject";
    }


    return errors;
  }
  return (
    <ContactWrapper>
      <div className="wrapper">
        <MainSubTitle>Contact</MainSubTitle>
        <p className="contact__subtitle">W325 State Road 123 Mondovi, WI (Wisconsin) 98746-54321</p>

        <form onSubmit={handlesubmit}>
          <div className="form__item form__item01">
            <input type="text" id="name" name="name" placeholder="Name" value={formvalue.name} onchange={handlevalidation} />

            <input type="text" id="email" name="email" placeholder="Email" value={formvalue.email} onchange={handlevalidation}></input>

            <input type="text" id="subject" name="subject" placeholder="Subject" value={formvalue.subject} onchange={handlevalidation}></input>

          </div>
          <div className="form__item form__item02">
            <textarea id="message" name="message" placeholder="Message" rows="10" value={formvalue.message} onchange={handlevalidation}></textarea>
          </div>
        </form>
        <div className="form__btn">
          <input type="submit" className="button contact center" value="Submit" />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;