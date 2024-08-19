import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Voter from './voter'
import Link from 'next/link'


const SubredditList = async () => {
    const subreddits = await fetch(
        "http://localhost:8000/subreddit/",
        { next: { revalidate: 600}}
      )
      const result = await subreddits.json()
      console.log(result)
  return (
    <>
        <div className="flex-grow ml-64 px=4 mt-20">
            <div className="flex items-center justify-center p-4 border-b border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="9ca3af">
                    <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
                <span className='text-gray-600'>Create new Subreddit</span>
            </div>
            {result.map((data) => (
                <div className="border-b border-gray-700 py-4">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <img
                            className="w-15 h-15 rounded-full"
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            />
                            <Link href={`/subreddits/${data.id}/`}>
                                <div className="text-sm font-semibold text-gray-900">
                                    {data.name}
                                </div>
                                <div className="text-xs text-gray-900">
                                    {data.description}
                                </div>
                            </Link>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                            Follow
                        </button>
                    </div>
                </div>
            ))}
            
        </div>
    </>
  )
}

export default SubredditList