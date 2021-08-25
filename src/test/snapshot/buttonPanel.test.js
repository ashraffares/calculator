import renderer from 'react-test-renderer';
import ButtonPanel from '../../component/buttonPanel';

describe('ButtonPanel component', () => {
  it('matches the snapshot', () => {
    const handleClick = () => 'just for testing';
    const panel = renderer.create(<ButtonPanel clickHandler={handleClick} />).toJSON();
    expect(panel).toMatchSnapshot();
  });
});
