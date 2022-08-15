import { useInfiniteQuery, useQuery } from 'react-query';
import BlogCapsule from './BlogCapsule';
import { useInView } from 'react-intersection-observer';
import { React, useEffect, useState } from 'react';
import UpdateCapsule from './UpdateCapsule';
import Button from './Button';
import styled from 'styled-components';
import { PropagateLoader } from 'react-spinners';
import FetchErrorMessage from '../FetchErrorMessage';
import FetchingLoading from './FetchingLoading';

const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const InfiniteScroll = ({ isUpdate }) => {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(15);

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
    return <FetchingLoading></FetchingLoading>;
  }

  if (isError) {
    return <FetchErrorMessage></FetchErrorMessage>;
  }

  if (isLoading) {
    return (
      <div className='middle_align'>
        <PropagateLoader color='#fff' />
      </div>
    );
  }

  if (isError) {
    return <FetchErrorMessage></FetchErrorMessage>;
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
      <ButtonStyles ref={ref} className='btn-container'>
        <Button>LOAD MORE</Button>
      </ButtonStyles>
    </>
  );
};

const ButtonStyles = styled.div`
  width: 100%;
  padding: 5vh 0;
`;

export default InfiniteScroll;
