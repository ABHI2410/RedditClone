import React from 'react'

const Profile = async () => {
    const res = await fetch(
        "http://localhost:8000/users",
        { next: { revalidate: 600}}
    )
    const profile = await res.json();
    const user = await profile[0].user;
  return (
    <>
        <div className="flex-grow ml-64 px=4 mt-20">
            <div className="container mx-auto p-4">
                <div className=" border-b-2 p-2 flex flex-col md:flex-row items-center md:items-start ">
                    <div className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:ml-8 flex-1">
                        <h2 className="text-2xl font-bold">{user.username}</h2>
                        <p className="text-gray-600">Name: {user.first_name} {user.last_name}</p>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <p className="text-gray-600">Bio: {profile[0].bio}</p>
                        
                    </div>
                </div>

                <div className="mt-8 ">
                    <div className="mb-8 border-b-2 p-4 mb-4">
                        <h3 className="text-xl font-semibold text-center mb-4">Subscribed Subreddits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="p-4 border rounded-lg">Subreddit 1</div>
                            <div className="p-4 border rounded-lg">Subreddit 2</div>
                            <div className="p-4 border rounded-lg">Subreddit 3</div>
                            <div className="p-4 border rounded-lg">Subreddit 4</div>
                        </div>
                    </div>

                    <div className="border-b-2 p-4 mb-4">
                        <h3 className="text-xl font-semibold mb-4 text-center">Votes Received</h3>
                        <div className='flex items-start justify-center space-x-4'>
                            <div className="p-4 border rounded-lg flex items-center">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                </svg>
                                <span className="text-lg font-medium">1234 Upvotes</span>
                            </div>

                            <div className="p-4 border rounded-lg flex items-center">
                                <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                                <span className="text-lg font-medium">567 Downvotes</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-b-2 p-4 mb-4 items-center text-center">
                        <button className='bg-red-700 text-white p-2 border-2 rounded-l-2xl rounded-r-2xl'>Delete Account</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile