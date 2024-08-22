// import React from 'react'
// import './Contact.css'
// import swal from 'sweetalert2'
// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "1c8a1d8f-5a87-4640-8647-b0f587f9c75b");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       swal.fire({
//         title:"Success!",
//         text:"Message sent successfully!",
//         icon:"success"

//       })

//     }
//   };

//   return (
//     <section className='contact-of'>
//       <form action="" onSubmit={onSubmit} className='form-of'>
//         <h2>Contact Form</h2>
//         <div className="input-box">
//           <h6 >Full Name</h6>
//           <input type="text" className='Field' placeholder='Enter your name' required name='name' style={{border:"1px solid #ddd", width:"100%", height:"50px",borderRadius: "6px",background: "transparent"}}/>
//         </div>
//         <div className="input-box">
//         <h6>Email</h6>
//         <input type="email" className='Field' placeholder='Enter your email' required name='email'style={{border:"1px solid #ddd", width:"100%", height:"50px",borderRadius: "6px",background: "transparent"}} />
//         </div>
//         <div className="input-box">
//         <label htmlFor="">Your Message</label>
//         <textarea name="message" id="" className='field mess' placeholder='Enter your message'></textarea>
//         </div>
//         <button className="submit">Send Message</button>
//       </form>
//     </section>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import './Contact.css';
import swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const dataToSubmit = {
      ...formData,
      access_key: '1c8a1d8f-5a87-4640-8647-b0f587f9c75b'
    };

    const json = JSON.stringify(dataToSubmit);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success'
      });

      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <section className='contact-of'>
      <form action="" onSubmit={onSubmit} className='form-of'>
        <h2>Contact Form</h2>
        <div className="input-box">
          <h6>Full Name</h6>
          <input
            type="text"
            className='Field'
            placeholder='Enter your name'
            required
            name='name'
            value={formData.name}
            onChange={onChange}
            style={{border:"1px solid #ddd", width:"100%", height:"50px", borderRadius: "6px", background: "transparent"}}
          />
        </div>
        <div className="input-box">
          <h6>Email</h6>
          <input
            type="email"
            className='Field'
            placeholder='Enter your email'
            required
            name='email'
            value={formData.email}
            onChange={onChange}
            style={{border:"1px solid #ddd", width:"100%", height:"50px", borderRadius: "6px", background: "transparent"}}
          />
        </div>
        <div className="input-box">
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            id=""
            className='field mess'
            placeholder='Enter your message'
            value={formData.message}
            onChange={onChange}
          ></textarea>
        </div>
        <button className="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
