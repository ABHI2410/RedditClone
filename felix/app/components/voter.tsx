'use client';
import React from 'react'


const Voter = () => {
    const [vote, setVote] = React.useState(0);
    const [isUpvote, setIsUpvote] = React.useState(false);
    const [isDownvote, setIsDownvote] = React.useState(false);
    const handleUpvote = () =>{
      if (vote === 1) {
        setVote(0);
        setIsUpvote(false);
      } else {
        setVote(1);
        setIsUpvote(true);
        setIsDownvote(false);
      }
    };
    
    const handleDownvote = () => {
      if (vote === -1) {
        setVote(0);
        setIsDownvote(false);
      } else {
        setVote(-1);
        setIsDownvote(true);
        setIsUpvote(false);
      }
    };
    return (
      <div className='flex flex-row'>  
        <button 
          className= {`border-2 rounded-l-2xl p-2 ${isUpvote ? 'bg-green-600 text-white' : ''}`}
          onClick = {handleUpvote}
          >
          &uarr;
        </button>
        <div className='border-t-2 border-b-2 p-2'>{vote}</div>
        <button 
          className={`border-2 rounded-r-2xl p-2 ${isDownvote ? 'bg-red-600 text-white' : ''}`}
          onClick = {handleDownvote}
          >
          &darr;
        </button>
      </div>
    );
}

export default Voter