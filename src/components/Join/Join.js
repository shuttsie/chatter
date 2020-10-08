import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import './Join.css';

const Join = () => {
  const { user } = useAuth0();
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <Link to={`/chat?name=${user.nickname}&room=Fiserv`}>
          <button className='button mt-20' type='submit'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
