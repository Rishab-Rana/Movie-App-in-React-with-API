import React from "react";
import styled from "styled-components";

const Component = styled.div`
display: flex;
flex-direction: column;
`;

const Head = styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
justify-content: space-between;
align-items: center;
padding:10px;
font-size:25px;
font-weight:bold;
box-shadow: 0 3px 6px #555;
`;

const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const MovieImage = styled.img`
width: 48px;
height:48px;
margin: 15px;
`;

const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding:10px 10px;
background-color: white;
border-radius:6px;
margin-left: 20px;
width: 30%;
align-items: center;
`;

const SearchIcon = styled.img`
width: 32px;
height:32px;
`;

const SearchInput = styled.input`
color:black;
font-size: 16px;
font-weight: bold;
width:100%;
border: none;
outline:none;
margin-left: 15px;
`;

function Header(){
    return <Component>
        <Head>
            <AppName>
                <MovieImage src="/popcorn.png" />
                React Movie App
                </AppName>
                <SearchBox>
                    <SearchIcon src="/magnifying.png" />
                    <SearchInput placeholder="Search Movie" />
                </SearchBox>
            </Head>
        
        </Component>
    
}

export default Header;