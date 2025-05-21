import React from 'react';

const Card = (props) => {
  return (
    <div className="card m-3" style={{ width: '100%', maxWidth: '18rem' }}>
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
        style={{ height: '12rem', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          See more
        </a>
      </div>
    </div>
  );
};

export default Card;