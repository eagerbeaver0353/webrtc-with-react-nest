import React, { useRef } from 'react';
import { OrganismsHeader, OrganismsMain } from '../components/organisms';
import logo from '../images/logo.svg';
import styles from '../App.css';
import { Button } from '../components/atoms';
import { useHistory } from 'react-router-dom';

export const Main = () => {
  let history = useHistory();
  const inputRef = useRef();

  return (
    <div className={styles.container}>
      <OrganismsHeader title="Learn Something" picture={logo} />
      <OrganismsMain full>
        <div style={{ color: 'white', display: 'flex' }}>
          <div
            style={{
              background: '#37526d',
              padding: '2px',
              marginRight: '10px',
              borderRadius: '5px',
            }}
          >
            <label
              style={{
                padding: '5px 5px',
                fontSize: '16px',
                borderRight: '1px solid black',
              }}
              htmlFor="room"
            >
              Room
            </label>
            <input
              ref={inputRef}
              style={{
                padding: '10px',
                background: '#37526d',
                border: '0px',
                fontSize: '16px',
                color: 'white',
              }}
              id="room"
              type="text"
            />
          </div>
          <Button onClick={() => history.push(`/${inputRef.current.value}`)}>Login</Button>
        </div>
      </OrganismsMain>
    </div>
  );
};
