import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light container p-5 text-center">
  <h1 className="display-4">Example of Cards</h1>
  <p className="lead">In JavaScript, the term "card" doesn't refer to a specific built-in concept. Instead, it typically refers to a UI component — a visual content box often used in web development to display grouped information like a product, user profile, or blog post.</p>
  <hr className="my-4"/>
  <p>It's a design pattern, not a JavaScript feature. Cards are built using HTML + CSS, and JavaScript is used to make them interactive (e.g. clicks, animations, data updates).</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  );
};

export default Jumbotron;