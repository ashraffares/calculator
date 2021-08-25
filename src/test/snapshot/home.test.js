import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../component/Home';

describe('Home component', () => {
  it('it matches the snapshot', () => {
    const home = renderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
    expect(home).toMatchSnapshot();
  });
});
