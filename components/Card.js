import React from 'react';
import Image from 'next/image';
import cardStyles from '../styles/Dashboard.module.css';

function Card({ userData }) {
  return (
    <div className={cardStyles.card}>
      {userData.avatar_url ? (
        <div>
          <Image
            src={userData.avatar_url}
            alt='avatar'
            width={100}
            height={100}
          />
        </div>
      ) : (
        <div></div>
      )}
      {userData.login ? (
        <div>
          Login:
          {userData.login}
        </div>
      ) : (
        <div></div>
      )}
      {userData.name ? <div>Name : {userData.name}</div> : <div></div>}
      {userData.blog ? <div>Blog: {userData.blog}</div> : <div></div>}
      {userData.following ? (
        <div>Following: {userData.following}</div>
      ) : (
        <div></div>
      )}
      {userData.followers ? (
        <div>Followers: {userData.followers}</div>
      ) : (
        <div></div>
      )}
      {userData.public_repos ? (
        <div>Repos: {userData.public_repos}</div>
      ) : (
        <div></div>
      )}
      {userData.bio ? <div>Bio: {userData.bio}</div> : <div></div>}
    </div>
  );
}

export default Card;
