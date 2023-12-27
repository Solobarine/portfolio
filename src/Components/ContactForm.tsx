import React, { ChangeEvent, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sendStatus, setSendStatus] = useState('normal')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormDetails(formDetails => ({
      ...formDetails,
      [e.target.name]: e.target.value,
    }))
  }

  const keys = {
    service_id: 'service_g704dsh',
    template_id: 'template_jmq7t9h',
    public_key: 'MW7DZKtPN9vcUnOIR',
  }

  const submit = () => {
    setSendStatus('pending')
    emailjs
      .send(keys.service_id, keys.template_id, formDetails, keys.public_key)
      .then(res => {
        if (res.status === 200) {
          setSendStatus('success')
        } else {
          setSendStatus('failed')
        }
      })
  }

  return (
    <form
      onSubmit={submit}
      className='formDiv gap-2 p-4 pt-6 shadow-md rounded-lg w-full shrink grow max-w-[25em]'
    >
      <div className='relative grid rounded-md overflow-hidden mb-4'>
        <i className='fa-solid fa-user absolute text-2xl text-emerald-500 bg-gray-200 h-full aspect-square grid place-items-center p-2'></i>
        <input
          type='text'
          name='name'
          className='p-2 rounded-md pl-14'
          placeholder='Enter your Name'
          onChange={handleChange}
        />
      </div>
      <div className='relative grid rounded-md overflow-hidden mb-4'>
        <i className='fa-solid fa-envelope absolute text-2xl text-emerald-500 bg-gray-200 h-full aspect-square grid place-items-center p-2'></i>
        <input
          type='email'
          name='email'
          className='p-2 rounded-md pl-14'
          placeholder='Enter your email'
          onChange={handleChange}
        />
      </div>
      <div className='relative grid'>
        <textarea
          name='message'
          className='p-2 rounded-md min-h-[12em]'
          placeholder='Message......'
          onChange={handleChange}
        />
      </div>
      <button
        type='submit'
        disabled={sendStatus === 'pending' ? true : false}
        className='bg-emerald-400 py-2 px-16 rounded-lg mb-2 mt-6'
      >
        {sendStatus === 'normal'
          ? 'Send'
          : sendStatus === 'pending'
          ? 'Sending'
          : 'Send Failed'}
      </button>
    </form>
  )
}

export default ContactForm
