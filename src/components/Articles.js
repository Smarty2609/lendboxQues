import React from 'react';

const Articles = (props) => {
    const {data} = props ?? {};
    const {title, heading , paragraph} = data ?? {};
  return (
    <div className='article'>
        <h1>{title}</h1>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
    </div>
  )
}

export default Articles;