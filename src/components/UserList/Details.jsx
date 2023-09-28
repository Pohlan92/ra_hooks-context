import { useEffect, useState } from 'react';

export const Details = ({ info }) => {
  const [avatar, setAvatar] = useState('');
  const [details, setDetails] = useState({
    city: '',
    company: '',
    position: '',
  });
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USER_DATA_URL}/${info.id}.json`)
      .then((response) => response.json())
      .then(({ avatar, details }) => {
        setAvatar(avatar);
        setDetails(details);
      });
  }, [info]);

  return (
    <div className="details">
      <div className="img_wrapper">
        <img src={avatar} alt="User's avatar" className="img_avatar" />
      </div>
      <h3 className="details_name">{info.name}</h3>
      <ul className="user-info_list">
        <li className="user-info_item">City: {details.city}</li>
        <li className="user-info_item">Company: {details.company}</li>
        <li className="user-info_item">Position: {details.position}</li>
      </ul>
    </div>
  );
};
