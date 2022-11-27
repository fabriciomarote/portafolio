import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });
  
    return (
        <>
            <div className='contact-container'>
            <p className='text-contact'> Contactate conmigo</p>
                <div className='box-form'>
                    <form className='formModal'>
                        <label>Nombre:</label> 
                        <input className="form-input" type='text' name="name" value={data.name} placeholder="Nombre" required  ></input>
                        <label>Email:</label>
                        <input className="form-input" type='text' name="email" value={data.email} placeholder="Email" required></input> 
                        <label>Mensaje:</label>
                        <input className="form-input" id='message' type='text' name="message" value={data.message} placeholder="Mensaje" required></input> 
                        <button type="submit" className="btn btn-info">Enviar</button>
                    </form>
                </div>
            </div>
        </>  
    );
  }
  
  export default Contact;