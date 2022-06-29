import {
  useEffect,
  useState
} from 'react';
import getHhMmSs from './getHhMmSs';
import PropTypes from 'prop-types';

function ClockItem(props) {
  const { item, onDelete } = props;
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(getHhMmSs(item.offset));
    const idInterval = setInterval(() => {
      setTime(getHhMmSs(item.offset));
      }, 1000);

    return () => {
      clearInterval(idInterval);
    }
  }, []);

  return (
    <li className="clock-item">
      <div className="item-row">
        <div className="clock-title">{item.title}</div>
        <div className="clock-close">
          <span className="material-icons"  onClick={(e) => onDelete(item)}>cancel</span>
        </div>
      </div>
      <div className="clock-time">{time}</div>
    </li>
  );
}

export default ClockItem;

ClockItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape(
      {
        title: PropTypes.string,
        offset: PropTypes.string,
      }
    ),
};
