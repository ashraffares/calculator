import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../component/navbar';

describe('Navbar componenet', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
