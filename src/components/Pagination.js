import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';
import UpdateCapsule from './UpdateCapsule';

const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const Pagination = ({ isUpdate }) => {
  const [page, setPage] = useState(15);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['events', page],
    () => fetchUsers(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {!isUpdate &&
        data.events
          .filter(
            (article) =>
              !article.announcement_body.tags[0].includes('patchnotes')
          )
          .map((article, index) => {
            return <BlogCapsule key={index} blog={article} />;
          })}

      {isUpdate &&
        data.events
          .filter((update) =>
            update.announcement_body.tags[0].includes('patchnotes')
          )
          .map((update, index) => {
            return (
              <UpdateCapsule
                key={index}
                headline={update.announcement_body.headline}
                timestamp={update.announcement_body.posttime}
                body={update.announcement_body.body}
              />
            );
          })}
      <div>{isFetching ? 'Fetching...' : null}</div>

      <button
        onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
        disabled={page === 1}
      >
        Prev Page
      </button>

      <button onClick={() => setPage((prevState) => prevState + 15)}>
        Next Page
      </button>
    </>
  );
};

export default Pagination;
