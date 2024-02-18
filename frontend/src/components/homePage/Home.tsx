import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Article } from "types/Article";
import { StyledColContainer, StyledContainer } from "styles/homePage/StyledContainer";
import AllView from "./category/AllView";
import CategotyView from "./category/CategotyView";

const Home = () => {
  const navigate = useNavigate();
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const ApiGetArticleList = (pageNumber: number) => {
    axios
      .get(`/api/articles?page=${pageNumber}&size=6&sort=id,desc`)
      .then((res) => {
        console.log(res.data);
        setArticleList(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    ApiGetArticleList(pageNumber);
    console.log(pageNumber);
  }, [pageNumber]);

  return (
    <StyledContainer>
      <StyledColContainer>
        <AllView />
      </StyledColContainer>

      <StyledColContainer>
        <CategotyView name="Social" id="1" />
        <CategotyView name="Science" id="2" />
        <CategotyView name="Health" id="4" />
      </StyledColContainer>

      <StyledColContainer>
        <CategotyView name="Finance" id="3" />
        <CategotyView name="Resource" id="5" />
        <CategotyView name="Nature" id="7" />
      </StyledColContainer>
    </StyledContainer>
  );
};

export default Home;
