import React, { useState } from "react";
import "./styles.css";
import IconBtn from "../IconBtn";

function FAQcard(props) {

  const [expand, setExpand] = useState(false);
  const handleExpandClick = () => setExpand(true);
  const handleCloseClick = () => setExpand(false);

  return (
    <div class="uk-card uk-card-default faq-card">
      <div uk-grid="true">
        <div class="uk-width-expand">
          <p className="faq-question uk-text-middle">{props.question}</p>
        </div>
        <div class="uk-width-auto">
          <IconBtn
            ratio="1"
            icon="plus"
            onClick={handleExpandClick}
          />
        </div>
      </div>
      {
        expand === true ? (
          <div>
            <hr className="faq-hr" />
            <div uk-grid="true" className="answer-row">
              <div class="uk-width-expand">
                <p className="faq-answer uk-text-middle">{props.answer}</p>
              </div>
              <div class="uk-width-auto">
                <IconBtn
                  ratio="1"
                  icon="close"
                  onClick={handleCloseClick}
                />
              </div>
            </div>
          </div>
        ) : ""
      }
    </div>
  );
}

export default FAQcard;
