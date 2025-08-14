import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const API_ENDPOINT = 'https://6zbd618rob.execute-api.us-west-2.amazonaws.com/prod'

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message);

      // Reset form or navigate user or show success message
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error or show error message to user
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
        <h3 className="mb-3 text-white">Send a Message</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
            <label htmlFor="message" className="form-label text-white">Message</label>
            <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-light">Send</button>
        </form>
    </>
  );
};

export default Contact;
