import React from 'react'
import './styles.css'
export const NewsFeed = ({tweets}) => {
  console.log(tweets)
  const newsFeed = tweets.map((tweet) => {
 return (
     <figure key={tweet._id}>
        <figcaption >{tweet.content}</figcaption>
      </figure>
  )})
  return (
  <>
    <div >
      {newsFeed}
    </div>
      
    
  </>
  )
}
