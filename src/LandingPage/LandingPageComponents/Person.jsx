import { useState } from "react";
import "../LandingPageStyles/person.css";

function Person({ name, uri, desc }) {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <div
        className='person-div'
        onClick={() => {
          setModelOpen(true);
        }}
      >
        <img
          src={"daddydonald.jpg"}
          className='profile-img'
        />
        <span className='name-text'>{name}</span>
      </div>
      {modelOpen && (
        <div className='person-modal'>
          <div className='person-modal-content'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
              className='person-modal-icon'
              onClick={() => {
                setModelOpen(false);
              }}
            >
              {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
            </svg>
            <div className='person-modal-text'>
              <span className='person-modal-name'>{name}</span>
              <span className='person-modal-desc'>{desc}</span>
            </div>
            <img
              src={"daddydonald.jpg"}
              className='person-modal-img'
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Person;
