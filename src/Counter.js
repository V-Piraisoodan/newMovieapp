import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const incrementLike = () => setlike(like + 1);
  const incrementDislike = () => setdislike(dislike + 1);

  useEffect(()=>{
    console.log("The updated like value is ",like)
  },[like])

  return (
    <div className="counter-container">
      {/* <button className="likes-dislikes" onClick={() => setlike(like + 1)}>👍 {like}</button> */}
      {/* <button className="likes-dislikes" onClick={incrementLike}>👍 {like}</button> */}
      <IconButton 
        aria-label="like"
        className="likes-dislikes"
        onClick={incrementLike}
        color='primary'>
          <Badge badgeContent={like} color="primary">
          👍
          </Badge>
        {/* 👍 {like} */}
      </IconButton>
       
      {/* <button className="likes-dislikes" onClick={() => setdislike(dislike + 1)}>👎 {dislike}</button> */}
      {/* <button className="likes-dislikes" onClick={incrementDislike}>👎 {dislike}</button> */}
      <IconButton 
        aria-label="dislike"
        className="likes-dislikes"
        onClick={incrementDislike}
        color='error'>
          <Badge badgeContent={dislike} color="error">
          👎
          </Badge>
        {/* 👎 {dislike} */}
      </IconButton>
    </div>
  );
}
