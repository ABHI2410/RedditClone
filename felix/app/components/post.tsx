import React from 'react'
import Voter from './voter'

const Post = () => {
  return (
    <>
        <div className="flex-grow ml-64 px=4 mt-20">
            <div className="flex items-center justify-center p-4 border-b border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="9ca3af">
                    <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
                <span className='text-gray-600'>Add new Post</span>
            </div>
            <div className="border-b border-gray-700 py-4">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <img
                        className="w-10 h-10 rounded-full"
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        />

                        <div>
                            <div className="text-sm font-semibold text-gray-900">
                                subreddit name
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                Posted on July 28, 2024
                            </div>
                        </div>
                    </div>

                    <button
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Follow
                    </button>
                </div>

                <div className="my-4 ">
                    <div className="items-center space-x-4 px-8">
                        This is the post Title
                        <div className="flex justify-center pt-2">
                            <img
                                className="h-96 w-96 mx-2"
                                src="https://via.placeholder.com/80"
                                alt="Commenter Profile"
                            />
                            {/* <img
                                className="h-96 w-96 mx-2"
                                src="https://via.placeholder.com/80"
                                alt="Commenter Profile"
                        /> */}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-4 mt-2 px-8">
                    <div className="flex items-center space-x-4">
                        <Voter />
                        <div className="flex items-center space-x-2 border-2 rounded-l-2xl rounded-r-2xl border-gray-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="6b7280">
                                <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-700">{100}</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer border-2 rounded-l-2xl rounded-r-2xl border-gray-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="6b7280">
                            <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900">Share</span>
                        </div>
                    </div>
                    <p className="px-4 py-2 text-sm font-medium text-grey-900">
                        Posted by: Author
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Post