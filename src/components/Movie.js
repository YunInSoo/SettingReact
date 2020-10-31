import React from "react";
import PropTypes from "prop-types";
import "../Movie.css";
function Movie({ image, title, genres }) {
  return (
    //className 과 App.js 에있는 App class 랑 충돌이 나기때문에 className이라고 붙여줍니다

    <div className="classTest">
      <div>{title}</div>
      <img src={image} />
      <ul>
        {genres.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
//유효성 검사
Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //배열에서 사용합니다
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default Movie;
