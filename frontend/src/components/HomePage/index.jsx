import './styles.css'
import { NewsFeed } from '../NewsFeed'
export default function HomePage({tweets, getTweets}) {
  
  return (
    <>
    <h1>Welcome to Tweeeter</h1>
    <NewsFeed tweets={tweets} getTweets={getTweets}/>
        
    </>
    
  )
}
