import React from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'
import SubredditList from '../components/subredditsList'

const Subreddit = () => {
  return (
    <>
        <Header/>
        <Navigation/>
        <SubredditList />
    </>
  )
}

export default Subreddit