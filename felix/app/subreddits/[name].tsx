import { useRouter } from 'next/router';

const SubredditPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Subreddit: {name}</h1>
      {/* Add your subreddit content here */}
    </div>
  );
};

export default SubredditPage;