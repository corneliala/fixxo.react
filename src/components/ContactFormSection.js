import React, { useState } from 'react'

const ContactFormSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState ('')
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [errors,setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regEx_email =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"

        if(!values.email)
            errors.email = "You must enter an e-mail address"
        else if(!regEx_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"


        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.lenght < 5)
            errors.comment = "Your comment must be longer than five characters"

        if(Object.keys(errors).lenght === 0)
            setSubmitted(true)
        else 
            setSubmitted(false)


        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target 
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(contactForm))

        if (errors.name === null && errors.email === null && errors.comments === null) {
            let json = JSON.stringify({ name, email, comments})

            setName('')
            setEmail('')
            setComments('')
            setErrors({})

            if (submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
                setSubmitted (true)
            } else {
                setSubmitted (false)
            }



        } else {
            setSubmitted(false)
        }
    }
    const submitData = (url, method, data, contentType = 'application/json') => {
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType
            },
            body: data
        })
        .then (res => {
            if (res.status ===200) {
                return true
            }

            return false
        })
    }

  return (
    <section className="contact-form">
        <div className="container">
            {
                submitted ? (<div className="d-flex justify-content-center align-items-center">
                    <div>Thank you for your comment!</div>
                    </div>)
                :
                (
                    <>
                    <h2>Come in Contact with Us</h2>
                    <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                        <div className="errorMessage">{errors.name} </div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange}/>
                        <div className="errorMessage">{errors.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comment" placeholder="Comments"value={contactForm.comment} onChange={handleChange}></textarea>
                        <div className="errorMessage">{errors.comment}</div>
                    </div>
                    <div className="formbtn">
                        <button type="submit" className="btn-theme">Post Comments</button>
                    </div>
                    </form>
                    </>
                )
            }
        </div>
    </section>
  )
}


export default ContactFormSection