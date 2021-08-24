import propTypes from 'prop-types';
import './button.css';

const Button = ({
  name, handleClick, color, wide,
}) => {
  const clickHandler = () => handleClick(name);
  return (
    <button type="button" className={`btn ${color} ${wide}`} onClick={clickHandler}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  color: propTypes.string,
  wide: propTypes.string,
};

Button.defaultProps = {
  wide: 'NormalSize',
  color: 'orange',
};

export default Button;
