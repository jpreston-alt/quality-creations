import React from "react";

function HomeBodyPhotosCard(props) {
  return (
    <div class="gallery-cell animate__animated  animate__fadeInUp">
      <img class="main-photo" src={props.image} />
    </div>
  );
}
export default HomeBodyPhotosCard;
