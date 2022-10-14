import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

//also can write instead of props below as ({ title })
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />}
    </header>
  );
};

//if we write title in App file inside Header Component as title = "Hello", it'll override default props from below.
Header.defaultProps = {
  title: 'Task Tracker',
};

//define the type of props like string, number or boolean for making robust code
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//adding CSS is JS via Variable
// const headingStyle = {
//   color: 'yellow',
//   backgroundColor: 'lightgrey',
// }

export default Header;
