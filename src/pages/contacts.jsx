import React, { useState } from "react";
import axios from "axios";
import "../styles/contacts.css";


const Contacts = () => {
    const [formData, setFormData] = useState({ name: '', email: '', messages: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            alert(response.data.messages);
        }
        catch (error) {
            alert('Failed to send message')
        }

    };
    return (
        <form onSubmit={handleSubmit} action="">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <textarea type="text" name="messages" value={formData.messages} onChange={handleChange} placeholder="Messages" required />
            <button type="submit">Send Message</button>
        </form>
    )
};




export default Contacts;