
'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import Navigation from '@/app/components/navigation';

const SubredditPage = () => {
  const params = useParams();
  const id = params?.id;
  const [subredditData, setSubredditData] = useState(null);
  const [subredditPosts, setSubredditPosts] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (id) {
      const fetchSubredditData = async () => {
        try {
          const res = await fetch(`http://localhost:8000/subreddit/${id}/`);
          const data = await res.json();
          setSubredditData(data);
        } catch (error) {
          console.error('Failed to fetch subreddit data:', error);
        } finally {
          setLoading(false);
        }
      };

      const fetchSubredditPosts = async () => {
        try {
          const res = await fetch(`http://localhost:8000/subreddit/${id}/posts/`);
          const data = await res.json();
          setSubredditPosts(data);
        } catch (error) {
          console.error('Failed to fetch subreddit posts:', error);
        }
      };

      fetchSubredditData();
      fetchSubredditPosts();
    }
  }, [id]);

  console.log(subredditData)

  return (
    <>
      <Header/>
      <Navigation/>
      <div className="flex-grow ml-64 px=4 mt-20">
        <h1>Subreddit: </h1>
        <div>
          <h2>Description:</h2>
          <p></p>
        </div>
        {/* <div>
          <h2>Posts:</h2>
          {subredditPosts?.map(post => (
            <div key={post.id} className="border-b border-gray-700 py-4">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-15 h-15 rounded-full"
                    src={post.picture || "https://via.placeholder.com/100"}
                    alt="Profile"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {post.title}
                    </div>
                    <div className="text-xs text-gray-900">
                      {post.content}
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Upvote
                </button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );  
};

export default SubredditPage;
