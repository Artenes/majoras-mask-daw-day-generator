import React, { useState, useEffect } from 'react';
import './style.css';

export default function Play({ location, history }) {
  const params = new URLSearchParams(location.search);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isShowingHours, setIsShowingHours] = useState('');

  setTimeout(() => { setIsAnimating(true); }, 2000);

  useEffect(() => {
    if (isAnimating) {
      document.getElementById('sound').play();
      
      setTimeout(() => { setIsShowingHours('appear'); }, 2000);
      setTimeout(() => { 
        let target = params.get('target');
        if (target) {

          if (!target.startsWith('https://') && !target.startsWith('http://')) {
            target = `https://${target}`;
          }
          
          window.location = target;
        }
      }, 5000);
    }
  }, [history, isAnimating, params]);

  return (
    <div id="title-card">

      {isAnimating && (
      <>
        <h2>Dawn of</h2>
        <h1>{params.get('title')}</h1>
        <h3 className={isShowingHours}>-{params.get('subtitle')}-</h3>
      </>
      )}

    </div>
  );
}