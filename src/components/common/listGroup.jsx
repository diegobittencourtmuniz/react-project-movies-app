import React, { Component } from 'react';

const ListGroup = (props) => {
  const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li key={genre[valueProperty]} className={selectedItem === genre ? 'list-group-item active' : 'list-group-item'} onClick = {() => {onItemSelect(genre)}}>
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty :'name',
  valueProperty :'_id'
};

export default ListGroup;
