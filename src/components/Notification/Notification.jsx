import propTypes from 'prop-types';
import { string } from 'prop-types';

const Notification = ({ message } = {}) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: string,
};

export default Notification;
