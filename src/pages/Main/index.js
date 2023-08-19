import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Main() {

  const [day, setDay] = useState('the final day');
  const [hours, setHours] = useState('24 hours remain');
  const [link, setLink] = useState('');
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');
  const [colr, setColr] = useState('');
  



  useEffect(() => {
    
    const title = encodeURI(day);
    const subtitle = encodeURI(hours);
    const target = encodeURI(link);    
    const col = encodeURI(colr);

    document.getElementById("dropdown").addEventListener("change", function() {
      var selectedColor = this.value;
      if (selectedColor === "black") {
        document.getElementById("title-card-edit").style.color = "white";
        document.getElementById("title-card-edit").style.background = "black";
        document.getElementById("hours").style.background = "black";
        document.getElementById("hours").style.color = "white";
        document.getElementById("day").style.background = "black";
        document.getElementById("day").style.color = "white";
        document.getElementById("play").style.background = "black";
        document.getElementById("play").style.color = "white";
        document.getElementById("play").style.borderColor = "white";
        document.getElementById("share").style.color = "white";
        var labelsBlack = document.querySelectorAll("label");

        for (var j = 0; j < labelsBlack.length; j++) {
          labelsBlack[j].style.color = "#ccc"
        }
        
      } else if (selectedColor === "white") {
        document.getElementById("title-card-edit").style.color = "black";
        document.getElementById("title-card-edit").style.background = "white";
        document.getElementById("hours").style.background = "white";
        document.getElementById("hours").style.color = "black";
        document.getElementById("day").style.background = "white";
        document.getElementById("day").style.color = "black";
        document.getElementById("play").style.background = "white";
        document.getElementById("play").style.color = "black";
        document.getElementById("play").style.borderColor = "black";
        document.getElementById("share").style.color = "black";
        var labelsWhite = document.querySelectorAll("label");

        for (var i = 0; i < labelsWhite.length; i++) {
          labelsWhite[i].style.color = "#555"
        }
      } 
    });
    
    const query = `?title=${title}&subtitle=${subtitle}&target=${target}&color=${col}`;
    setQuery(query);

    const base = `${process.env.PUBLIC_URL}/play`;
    setUrl(`${base}${query}`);

  }, [day, hours, link, colr]);

  return (
    <div id="title-card-edit">

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
      <div id = "New Day Select">
      <select id="dropdown" onChange = {e => setColr(e.target.value)}>
      <option value="black" >Black Background, white text</option>
      <option value="white">White Background, black text</option>

      </select>
    </div>
    </div>
    
  );
}
