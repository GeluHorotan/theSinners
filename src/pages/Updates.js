import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import InfiniteScroll from "../components/InfiniteScroll";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import { obsH2 } from "../Utility/Colors";
import ViewMode from "../components/ViewMode";
import LargeEntry from "../components/LargeEntry";

import { useQuery } from "react-query";
const fetchUsers = async (countParam) => {
  const res = await fetch(`/.netlify/functions/news/?count=${countParam}`);
  return res.json();
};

const Updates = () => {
  const [view, setView] = useState("pagination");
  const [page, setPage] = useState(15);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["events", page],
    () => fetchUsers(page),
    { keepPreviousData: true }
  );
  const setViewPageHandler = () => {
    setView("pagination");
  };
  const setViewScrollHandler = () => {
    setView("infiniteScroll");
  };
  return (
    <Wrapper>
      <LargeEntry
        content={
          data &&
          data.events.filter(
            (data) =>
              data.announcement_body &&
              !data.announcement_body.tags[0].includes("patchnotes")
          )[0]
        }
      ></LargeEntry>
      <TabGroupStyles>
        <div className="tabs_group">
          <Link to="/news">NEWS</Link>
          <Link to="/news/updates" className="tab_active">
            UPDATES
          </Link>
        </div>
      </TabGroupStyles>
      <BottomSectionStyles>
        <ViewMode
          pageFunction={setViewPageHandler}
          scrollFunction={setViewScrollHandler}
          viewMode={view}
        />
        <div className="sub_entries">
          {view === "pagination" ? (
            <Pagination isUpdate />
          ) : (
            <InfiniteScroll isUpdate />
          )}
        </div>
      </BottomSectionStyles>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 2220px;
  margin: 0px auto;
  text-align: center;
  min-height: 50vw;
`;

const LargeEntryStyles = styled.section`
  width: 100%;
  height: 600px;
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
  transition: 250ms all ease-in-out;
  overflow: hidden;
  .heading_image {
    background-image: url("https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/ff274a64dd35731d2fc678f8e2884aa8bd0035ef.jpg");
    width: 100%;
    height: 600px;
    position: absolute;
    z-index: 1;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition-duration: 0.5s;
    opacity: 0.8;
  }
  &:hover {
    .heading_image {
      transform: scale(1.05);
      opacity: 1;
    }
    .featured_content {
      transform: translateY(-10px);
    }
  }
  .fade_container {
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    position: absolute;

    pointer-events: none;
    .fade_overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0.733) 85%,
        rgb(0, 0, 0) 95%
      );
    }
  }
  .bottom_fade {
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0px;
    z-index: 3;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(60%, rgba(0, 0, 0, 0)),
      color-stop(80%, rgba(0, 0, 0, 0.7)),
      color-stop(100%, black)
    );
  }

  .featured_content {
    z-index: 5;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0px 14vw;
    transition: 250ms all ease-in-out;

    .post_tag {
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: 2px;
      background: #ffffff50;
      color: #fff;
      padding: 5px 10px;
      text-transform: uppercase;
      float: right;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .post_date {
      font-size: 18px;
      color: #ffffff90;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .post_title {
      font-size: 60px;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 0px 0px 10px #000;
      letter-spacing: 1px;
      line-height: 110%;
      color: #e5ded9;
      text-align: left;
    }
    .post_link {
      position: relative;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
      text-shadow: 0px 0px 4px #000;
      z-index: 200;
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

const TabGroupStyles = styled.section`
  width: 100%;
  height: 100px;
  padding: 0px 14vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
  background: black;
  border-bottom: 3px solid #313131;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  .tabs_group {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      background: none;
      border: none;
    }
    a {
      width: 48%;
      height: 100%;
      padding-top: 20px;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: bold;
      font-size: 17px;
      color: #828282;
      background-color: #222;
      text-decoration: none;
    }
    .tab_active {
      color: #fff;
      background-color: #313131;
      border-top: 2px solid #646566;
    }
  }
`;

const BottomSectionStyles = styled.section`
  background: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg");
  width: 100%;

  .sub_entries {
    width: 100%;
    padding: 0px 14vw;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
  }
`;

export default Updates;
