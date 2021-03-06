import Head from 'next/head'
import styles from '../styles/Signup.module.css'
import { Modal } from '../components/modal'
import React, { useState } from 'react'

const SignUp = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [details, setDetails] = useState([])
  const [modal, setModal] = useState({
    shown: false,
    modalText: '',
    textColor: '',
  })

  const showModal = (modalText, textColor) => {
    setModal({ shown: true, modalText: modalText, textColor: textColor })
    setTimeout(() => {
      setModal({ shown: false, modalText: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const [name, value] = [e.target.name, e.target.value]
    const newItem = {
      ...person,
      [name]: value,
    }
    setPerson(newItem)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((person.firstName, person.lastName, person.email, person.message)) {
      const contactDetails = { ...person, id: new Date().getTime().toString() }
      setDetails([...details, contactDetails])
      showModal(
        `Thank you ${contactDetails.firstName} for signing up!`,
        '#00005f'
      )
      setPerson({ firstName: '', lastName: '', email: '', message: '' })
    } else {
      showModal('Please fill in all the fields', 'red')
    }
  }

  return (
    <>
      <Head>
        <title>Gamerland | Sign up</title>
        <meta name='description' content='Gamerland- A website for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formContainer}>
            <h1 className='themedTitle'>Get In Touch</h1>
            {modal.shown && (
              <Modal modalText={modal.modalText} textColor={modal.textColor} />
            )}
            <div className={styles.formControl}>
              <label htmlFor='firstName'>First Name : </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={person.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor='lastName'>Last Name : </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={person.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor='email'>Email Address : </label>
              <input
                type='text'
                id='email'
                name='email'
                value={person.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor='message'>Message : </label>
              <input
                type='text'
                id='message'
                style={{ padding: '20px' }}
                name='message'
                value={person.message}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className={styles.formBtn}>
              Submit
            </button>
          </div>
          <img src='/images/contact.jpeg' width='70%' alt='Sign up Image' />
        </form>
      </main>
    </>
  )
}

export default SignUp
