import React from "react";
import styled from "styled-components";

const HeadingText = styled.div`
color:yellow;
font-size:40px;
`;

const NewMovieListContainer = styled.div`

`;

const MovieCategory = styled.div`
color:white;
padding: 15px 0px;
list-style: none;
`;

const MovieCategoryList = styled.li`
display: inline;
margin:0 30px;
letter-spacing: 0.15em;
text-decoration: none;
position:relative;

&:hover{
    color: white;
}

&:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom:-10px;
    background-color: yellow;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover:before {
    transform: scaleX(1);
  }
`;

function NewMovieList(){
    return(
        <NewMovieListContainer>
        <HeadingText>Watch New Movie & TV Trailers</HeadingText>
        <MovieCategory>
            <MovieCategoryList>TRADING TRAILER</MovieCategoryList>
            <MovieCategoryList>MOST ANTICIPATED</MovieCategoryList>
            <MovieCategoryList>MOST POPULAR</MovieCategoryList>
            <MovieCategoryList>RECENTLY ADDED</MovieCategoryList>
        </MovieCategory>
        
        </NewMovieListContainer>
    );
}

export default NewMovieList;