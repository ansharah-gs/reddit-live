import React from 'react';
let MediaCard=(props)=>{
  return(
  <div>
    <h1>Title: {props.title}</h1>
    <p>Subscriber: {props.subscriber}</p>
    <strong>Author: {props.author}</strong>
    <br/>
    <a href={props.url}>Read more..</a>
    <hr/>
  </div>
  );
}  
export default MediaCard;