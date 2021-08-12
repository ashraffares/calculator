import propTypes from 'prop-types';

const Display = ({ result }) => <h1>{result}</h1>;

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;