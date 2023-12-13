import React from 'react'
import { useState, useEffect } from 'react'
export const NewsFeed = () => {

  const [tweets, setTweets] = useState([])
  async function getTweets(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setTweets((prevTweets) => [...prevTweets, ...data]);
  }
  console.log(tweets)
  useEffect(() => {
    getTweets('/api/tweets')
  }, [])
  const newsFeed = tweets.map((tweet) => (
   
      <> 
      <div key={tweet._id}>
        <div>{tweet.content}</div>
      </div>
     
      </>
      
   
  ))
  return (
    <>
    <div>
      {newsFeed}
    </div>
    </>
  )
}
