import { useEffect, useState } from 'react'
import HomePage from '../HomePage';
import AuthFormPage from '../AuthFormPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [tweets, setTweets] = useState([])
  async function getTweets(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setTweets((tweets) => [...tweets, ...data]);
  }

  useEffect(() => {
    getTweets('/api/tweets')
  }, [])
  const handleLogout = () => {
    // Clear the user token from local storage
    localStorage.removeItem('userToken');
    
    // Update the authentication state
    setIsLoggedIn(false);

    // Redirect the user to the login page or another appropriate page
    navigate('/auth/login');
  };

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
    <Routes >
    <Route path="/" element={
                    <HomePage
                       tweets={tweets} getTweets={getTweets}
                    />}
                />
    <Route path="/auth/:formType" element={<AuthFormPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
    </>
  )
}

export default App
