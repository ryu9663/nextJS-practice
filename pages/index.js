import React from "react";
import axios from "axios";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <>
      <Seo title="Home" />
      <div className="container">
        {results.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h4>{movie.original_title}</h4>
            </div>
          );
        })}
        <style jsx>
          {`
            .container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              padding: 20px;
              gap: 20px;
            }
            .movie {
              cursor: pointer;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie img:hover {
              transform: scale(1.05);
            }
            .movie h4 {
              font-size: 18px;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
}
// 함수 이름 바꾸면 안됨
// 여기에 어떤 코드를 쓰던간에 그 코드는 sever에서 돌아간다. client가 아닌 server에서만 작동
// getServerSideProps 함수는 object를 리턴한다.
export async function getServerSideProps() {
  //여기에 작성되는것은 client에서 보이지 않는다.
  console.log("hi");
  const response = await axios.get(`http://localhost:3000/api/movies`);
  const results = await response.data.results;
  return {
    props: {
      results,
    },
  };
}
