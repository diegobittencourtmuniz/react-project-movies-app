import React, { Component } from "react";
// Input liked: boolean;
// Output onClick
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += '-o';
  return (
    <i className={classes} area-hidden="true" onClick={props.onClick} style={{ cursor: 'pointer' }}></i>
  );
}
export default Like;