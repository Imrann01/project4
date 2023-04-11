import React from 'react';

function CategoryContent(props) {
  const { category } = props;

  return (
    <div>
      <h1>{category}</h1>
      <p>Content for {category} goes here...</p>
    </div>
  );
}

export default CategoryContent;