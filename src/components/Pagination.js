import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';
import Button from './Button';
import UpdateCapsule from './UpdateCapsule';
import styled from 'styled-components';
import FetchingLoading from './FetchingLoading';

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
    return <FetchingLoading></FetchingLoading>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const setPageUp = () => {
    setPage((prevState) => prevState + 15);
  };
  const setPageDown = () => {
    setPage((prevState) =>
      prevState === 15
        ? Math.max(prevState - 0, 0)
        : Math.max(prevState - 15, 0)
    );
  };

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
      <FetchingLoader>
        {isFetching ? <FetchingLoading></FetchingLoading> : null}
      </FetchingLoader>
      <ButtonStyles className='buttons_container'>
        <Button isRipple action={setPageDown}>
          PREV
        </Button>

        <Button isRipple action={setPageUp}>
          NEXT
        </Button>
      </ButtonStyles>
    </>
  );
};

const ButtonStyles = styled.div`
  width: 100%;
  padding: 5vh 0;
`;

const FetchingLoader = styled.div`
  width: 100%;
  color: #fff;
`;

export default Pagination;
