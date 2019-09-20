import React, { useState, useEffect } from 'react';
import './style.css';

export default function Main() {

  const [day, setDay] = useState('the final day');
  const [hours, setHours] = useState('24 hours remain');
  const [link, setLink] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    
    const title = encodeURI(day);
    const subtitle = encodeURI(hours);
    const target = encodeURI(link);
    const base = `http://localhost:3333/play?title=${title}&subtitle=${subtitle}&target=${target}`;
    setUrl(base);

  }, [day, hours, link]);

  return (
    <div>

      <p>The Final Day card title generator</p>
      <p>Edit the <strong>day</strong> and <strong>hours</strong> remaining</p>

      <h2>Dawn of</h2>
      <input id="day" type="text" value={day} onChange={e => setDay(e.target.value)}/>
      <input id="hours" type="text" value={hours} onChange={e => setHours(e.target.value)}/>

      <hr/>

      <label htmlFor="url">Set an url to redirect after animation ends</label>
      <input id="url" type="text" placeholder="https://example.com" onChange={e => setLink(e.target.value)}/><br/>

      <label htmlFor="share">Link to share with your friends</label>
      <p id="share">{url}</p>

      <button type="button">Play</button>

    </div>
  );
}
