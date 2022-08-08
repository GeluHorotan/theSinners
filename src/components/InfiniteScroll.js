import { useInfiniteQuery, useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';
import { useInView } from 'react-intersection-observer';
import { React, useEffect, useState } from 'react';

const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const InfiniteScroll = ({ isUpdate }) => {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(15);
  console.log(count);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['users', count],
    () => fetchUsers(count),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (inView) {
      setCount((prevState) => prevState + 15);
    }
  }, [inView]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Infinite Scroll View</h2>
      <div className='card'>
        {data?.events?.map((article) => {
          return <BlogCapsule blog={article} />;
        })}
      </div>
      <div className='btn-container'>
        <button ref={ref}>Load More</button>
      </div>
    </>
  );
};

export default InfiniteScroll;
