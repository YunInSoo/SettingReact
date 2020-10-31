import React from "react";
function Movie({ image, title }) {
  return (
    //className 과 App.js 에있는 App class 랑 충돌이 나기때문에 className이라고 붙여줍니다

    <div className="classTest">
      <div>{title}</div>
      <img src={image} />
    </div>
  );
}
export default Movie;
