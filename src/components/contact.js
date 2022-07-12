import React, { useState } from "react";
import { validateEmail } from "../../src/utils/helpers";
import css from './../pages/Pages.module.css'

function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleBlank(e) {
        if (e.target.name === "Name" || e.target.name === "Message") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section>
            <div style={{
                width:'100%', display:'flex', flex:'wrap'
            }}>
                <form style={{display:'flex',}} id="contact-form">
                    <div style={{
                            width:'100%', display:'flexBlock', 
                        }}>
                        <label style={{width:'75px', display:'flex',}}  htmlFor="Name">Name:</label>
                        <br></br>
                        <input style={{width:'300px', display:'flex',}}
                            type="text"
                            defaultValue={name}
                            onBlur={handleBlank}
                            name="Name"
                        />
                    </div>
                    <div>
                        <label style={{width:'75px', display:'flex',}} htmlFor="email">Email address:</label>
                        <br></br>
                        <input
                            style={{width:'300px', display:'flex',}}
                            type="email"
                            defaultValue={email}
                            name="email"
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="Message">Message:</label>
                        <br></br>
                        <textarea
                            name="Message"
                            defaultValue={message}
                            onBlur={handleBlank}
                            rows="5"
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button style={{width:'auto', display:'block',}} type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;