import cn from 'classnames';

export const UserList = ({ children }) => {
  return <div className="users_container">{children}</div>;
};

export const List = ({ users, onUserClick, selectedId }) => {
  return (
    <ul className="user_list">
      {users.map(({ id, name }) => (
        <UserItem
          id={id}
          name={name}
          onUserClick={onUserClick}
          key={id}
          isSelected={selectedId === id}
        />
      ))}
    </ul>
  );
};

const UserItem = ({ id, name, onUserClick, isSelected }) => {
  const onClick = () => {
    onUserClick({ id, name });
  };

  return (
    <li
      className={cn('user_item', { user_selected: isSelected })}
      id={id}
      onClick={onClick}
    >
      {name}
    </li>
  );
};
