import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (        
      <div className={s.item}>
        <img src='https://yt3.ggpht.com/a/AGF-l7_klzTWOW_zsC2n0uZRVtYkrfThPkhJD-HUcQ=s900-c-k-c0xffffffff-no-rj-mo' />
        { props.message }
        <div>
          <span>Like</span>  {props.likes}
        </div>
      </div>         
    )
}

export default Post;