import './index.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

export const notify = msg => {
  myEmitter.setMaxListeners(0);
  myEmitter.emit('notification', msg);
};

const Container = styled.div`
  background-color: #444;
  position: absolute;
  color: white;
  padding: 16px;
  top: ${props => props.top}px;
  left: 40%;
  z-index: #999;
  transition: top 0.5s ease;

  i > {
    margin-left: 10px;
  }
`;

const Notifications = () => {
  const [top, setTop] = useState(-100);
  const [msg, setMsg] = useState('');

  let timeout = null;

  const showNotification = message => {
    setTop(16);
    setMsg(message);
    timeout = setTimeout(() => {
      setTop(-100);
    }, 3000);
  };

  const onShow = msg => {
    if (timeout) {
      clearTimeout(timeout);
      setTop(-100);
      timeout = setTimeout(() => {
        showNotification(msg);
      }, 500);
    } else {
      showNotification(msg);
    }
  };

  myEmitter.on('notification', msg => {
    onShow(msg);
  });

  return (
    <Container top={top}>
      {msg}
      <FontAwesomeIcon className="ml-2" icon={faBell} />
    </Container>
  );
};

export default Notifications;
