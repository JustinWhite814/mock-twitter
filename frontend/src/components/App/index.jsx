import { useEffect, useState } from 'react'
import HomePage from '../HomePage';
import AuthFormPage from '../AuthFormPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [tweets, setTweets] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState([])
  
  const handleLogout = () => {
    // Clear the user token from local storage
    localStorage.removeItem('userToken');
    
    // Update the authentication state
    setIsLoggedIn(false);

    // Redirect the user to the login page or another appropriate page
    navigate('/auth/login');
  };

  async function getTweets(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setTweets([...tweets, ...data])
  }

  useEffect(() => {
    getTweets('/api/tweets')
  }, [])
  return (
    <>
    <Routes >
    <Route path="/" element={
                    <HomePage
                       
                    />}
                />
    <Route path="/auth/:formType" element={<AuthFormPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
     {/* <HomePage/> */}
    </>
  )
}

export default App
