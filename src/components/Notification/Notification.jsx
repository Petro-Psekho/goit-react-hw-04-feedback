import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled.jsx';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
