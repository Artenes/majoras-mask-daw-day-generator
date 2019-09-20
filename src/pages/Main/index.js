import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Main() {

  const [day, setDay] = useState('the final day');
  const [hours, setHours] = useState('24 hours remain');
  const [link, setLink] = useState('');
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    
    const title = encodeURI(day);
    const subtitle = encodeURI(hours);
    const target = encodeURI(link);

    const query = `?title=${title}&subtitle=${subtitle}&target=${target}`;
    setQuery(query);

    const base = `${process.env.PUBLIC_URL}/play`;
    setUrl(`${base}${query}`);

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
      <a id="share" href={url}>{url}</a>

      <Link id="play" to={{ pathname: '/play', search: query }}>Play</Link>

    </div>
  );
}
