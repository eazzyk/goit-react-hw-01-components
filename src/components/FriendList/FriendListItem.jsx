import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.friend_item}>
      <span className={isOnline ? css.isonline : css.isoffline} />
      <img src={avatar} alt={name} className={css.friend_avatar} />
      <p className={css.friend_name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
