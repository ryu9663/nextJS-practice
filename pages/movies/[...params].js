import React from "react";
import Seo from "../../components/Seo";

export default function Detail(props) {
  const { query, params } = props;
  const [title, id] = params.params || [];

  return (
    <>
      <Seo title={title} />
      <div className="container">
        <div className="movie">
          <h4>{title}</h4>
          <img src={`https://image.tmdb.org/t/p/w500${query.img}`} />
          <h4>평점 : {query.voteAverage}</h4>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 240px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export function getServerSideProps(router) {
  return {
    props: { query: router.query, params: router.params },
  };
}
