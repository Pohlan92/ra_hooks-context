import { useEffect, useState } from 'react';

import { List, UserList } from './components/UserList/UserList';
import { Details } from './components/UserList/Details';
import { FetcherList } from './components/FetcherList/FetcherList';
import { fetchUrls } from './constants/urls';

import './styles/app.css';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState(null);

  const onUserClick = ({ id, name }) => {
    if (id !== info?.id) {
      setInfo({ id, name });
    }
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <UserList>
        <List users={users} onUserClick={onUserClick} selectedId={info?.id} />
        {info && <Details info={info} />}
      </UserList>
      <FetcherList urls={fetchUrls} />
    </>
  );
};
