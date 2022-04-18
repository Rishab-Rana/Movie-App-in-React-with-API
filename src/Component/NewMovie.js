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

const FeatureMovies = styled.div`
display: flex;
flex-direction: row;
width:1100px;
overflow-y:hidden;
overflow-x:scroll;
-webkit-overflow-scrolling: touch;
::-webkit-scrollbar {
    display: none;
}

`;

const FeaturesMoviesContainer = styled.div`
display: flex;
flex-direction: column;
padding:5px 10px;

`;
const MovieContainer = styled.div`
display: flex;
flex-direction: column;
width: 170px;
height: 250px;
background-color: white;
overflow: hidden;
position: relative;
transition: all 1s;
background: rgba( 191, 188, 188, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 18px );
-webkit-backdrop-filter: blur( 18px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
&:hover{
    width: 300px;
}
`;

const MovieCoverImanger = styled.img`
width: 100%;
height: 80%;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
transition: all 2s;
object-fit:cover;
&:hover{
    width: 300px;
    opacity: 0.4;
    background-color: white;
}

`;

const PopularMovie = styled.div`
color: white;
font-size:15px;
`;

const MovieName = styled.h1`
font-size: 16px;
font-weight: 600;
color: white;
overflow: hidden;
text-overflow: ellipsis;
padding:10px;
`;

function NewMovieList() {
    
    return (
        <NewMovieListContainer>
            <HeadingText>Watch New Movie & TV Trailers
            </HeadingText>
            <MovieCategory>
                <MovieCategoryList>TRADING TRAILER</MovieCategoryList>
                <MovieCategoryList>MOST ANTICIPATED</MovieCategoryList>
                <MovieCategoryList>MOST POPULAR</MovieCategoryList>
                <MovieCategoryList>RECENTLY ADDED</MovieCategoryList>
            </MovieCategory>
            <PopularMovie>
                    <h1>Popular Movies</h1>
                </PopularMovie>
            <FeatureMovies>
                <FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/>
                    <MovieName>Guardians of the Galaxy Vol. 2</MovieName>   
                    </MovieContainer>
                    
                </FeaturesMoviesContainer>
                <FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer>
                <FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer>
            </FeatureMovies>

            <PopularMovie>
                    <h1>Top Pick For You</h1>
                </PopularMovie>
            <FeatureMovies>
                <FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/>
                    </MovieContainer>
                </FeaturesMoviesContainer>
                <FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer>
                <FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer><FeaturesMoviesContainer>
                    <MovieContainer>
                    <MovieCoverImanger src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
                    </MovieContainer>
                </FeaturesMoviesContainer>
            </FeatureMovies>
            
        </NewMovieListContainer>
    );
}

export default NewMovieList;