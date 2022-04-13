import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./Component/MovieComponent";
import MovieInfoComponent from "./Component/MovieInfoComponent";
import LogoImg from "./assest/popcorn.png";
import SearchImg from "./assest/magnifying.png";
import UserIcon from "./assest/user-image.png";
import Menu from "./assest/menu.png";

export const API_KEY = "2bed85c5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color:#000000;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  flex-wrap: wrap;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 25px;
  margin-left: 20px;
  width: 35%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  width:100%;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
  padding:50px 250px;
`;
const Placeholder = styled.div`
  color:white;
`;

const SignIn = styled.button`
  background-color: transparent; 
  color: white; 
  border: 2px solid #4CAF50;  
  font-size: 16px;
  border-radius: 6px;
  padding: 15px 15px;

  &:hover{
    background-color: #4CAF50;
    color: white;
  }
`;

const UserId = styled.img`
background-color: white;
width: 50px;
border-radius:50%;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
        <MovieImage src={Menu} />
          React Movie App
        </AppName>
        
        <SearchBox>
          <SearchIcon src={SearchImg} />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
        <SignIn className="SignInt">
          Sign In
        </SignIn>
        <UserId src={UserIcon} />
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder>
          </Placeholder>
        )}
      </MovieListContainer>
    </Container>
  );
}

export default App;