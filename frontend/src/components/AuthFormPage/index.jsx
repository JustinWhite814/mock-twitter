import React from 'react'
import {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { logIn, signUp } from '../../../utils/backend'

export default function AuthFormPage({setIsLoggedIn}) {
  const { formType } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault()
    if(formType === 'login'){
      const {token} = await logIn(formData)
      localStorage.setItem('userToken', token)
      setIsLoggedIn(true)
    }else{
      const token = await signUp(formData)
      localStorage.setItem('userToken', token)
      setIsLoggedIn(true)
    }
     navigate('/')
  }

  let actionText
  formType === 'login' ? (actionText= "Log In") : (actionText = "Sign Up");

  return (
    <div>
      <div>
        <h2>{actionText}</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>
            Username
          </label>
          <input 
            id='username'
            name='username'
            type='username'
            required
            placeholder='User Name'
            value={formData.username}
            onChange={handleInputChange}
          />
         </div>
          <div>
          <label htmlFor='email'>
            Email
          </label>
          <input 
            id='email'
            name='email'
            type='email'
            required
            placeholder='Email Address'
            value={formData.email}
            onChange={handleInputChange}
          />
         </div>
         <div>
          <label htmlFor='password'>
            Password
          </label>
          <input 
            id='password'
            name='password'
            type='password'
            minLength='6'
            required
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
          />
         </div>
         <div>
          <button type='submit'>
              {actionText}
          </button>
         </div>
        </form>
      </div>
    </div>
  )
}
