import renderer from 'react-test-renderer';
import Display from '../../component/Display';

describe('Display component', () => {
  it('matches the snapshot', () => {
    const display = renderer.create(<Display />).toJSON();
    expect(display).toMatchSnapshot();
  });
});
