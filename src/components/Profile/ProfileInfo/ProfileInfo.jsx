import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
      <img alt='' src='https://pooleprojects.net/pooleparklife/wp-content/uploads/2016/02/1200-x-400px-12671827_10153392521581868_7284533241603406355_o.jpg' />
    </div>
    <div className={s.description}>
      Ava + description
    </div>
    </div>    
    )
}

export default ProfileInfo;