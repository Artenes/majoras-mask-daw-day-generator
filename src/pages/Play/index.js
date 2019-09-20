import React from 'react';
import './style.css';

export default function Play({ location }) {
  const params = new URLSearchParams(location.search);
  
  return (
    <div id="title-card">

      <h2>Dawn of</h2>
      <h1>{params.get('title')}</h1>
      <h3>-{params.get('subtitle')}-</h3>

    </div>
  );
}