import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
// import './Chat.css';

const ENDPOINT = 'wss://fiserv-chat-server.herokuapp.com/';

let socket;

const Chat = () => {
  let { user } = useAuth0();
  console.log(user);
  let name = `${user.nickname}`;
  const bankName = `${user[`https://fiservseminars.com/bank_name`]}`;
  const room = 'Fiserv Seminar';
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  console.log(bankName);
  if (bankName === 'Fiserv') {
    name = `${user.nickname} - Fiserv`;
  } else {
    name = `${user.nickname}`;
  }
  useEffect(() => {
    socket = io("wss://fiserv-chat-server.herokuapp.com/", {
      transports: ['websocket'],
    });

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, ['https://fiserv-chat-server.herokuapp.com']);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  console.log(messages);
  return (
    <div className='outerContainer'>
      <div className='container'>
        {/* <InfoBar room={room} /> */}

        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;