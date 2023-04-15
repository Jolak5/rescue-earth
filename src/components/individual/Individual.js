/* eslint-disable react/prop-types */
import React from 'react';

export default function Individual(props) {
  const { name, id, bid } = props;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{bid}</h2>
    </div>
  );
}
