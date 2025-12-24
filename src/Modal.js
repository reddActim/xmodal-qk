import { useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: ""
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const validated = (data) => {
        if (data.phone.length < 10)
        {
            window.alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }
        if (new Date(data.dob) > new Date())
        {
            window.alert("Invalid date of birth. Date of birth cannot be in the future.")
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validated(formData))
        {
            setFormData({
        username: "",
        email: "",
        phone: "",
        dob: ""
    })
        }
    }

    if (!isOpen) return null;
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}> ✖ </button>
                <form onSubmit={handleSubmit}>
                    <h1>Fill Details</h1>
                    <strong>Username:</strong>
                    <input required type="text" id="username" value={formData.username} onChange={handleChange} />
                    <strong>Email Address:</strong>
                    <input type="email" required id="email" value={formData.email} onChange={handleChange} />
                    <strong>Phone Number:</strong>
                    <input type="number" id="phone" value={formData.phone} onChange={handleChange} />
                    <strong>Date of Birth:</strong>
                    <input type="date" id="dob" value={formData.dob} onChange={handleChange} />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    );
}