import React from "react";
import "./styles.css";

function HomeBodyPhotosContainer() {
  return (
    <div>
      <div
        class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      ></div>
    </div>
  );
}

export default HomeBodyPhotosContainer;
