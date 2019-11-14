import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

 

  let myPostElements = props.myPostsDate.map(
     p => <Post message={p.message} likes={p.likes} />);


  return (
    <div className={s.post}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>        
      </div>
      {myPostElements}
    </div>
  )
}

export default MyPosts;