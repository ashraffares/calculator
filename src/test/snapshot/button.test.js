import renderer from 'react-test-renderer';
import Button from '../../component/button';

describe('Button component', () => {
  it('matches the snapshot', () => {
    const handleClick = () => 'just for testing';
    const button = renderer.create(<Button handleClick={handleClick} name="1" />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
