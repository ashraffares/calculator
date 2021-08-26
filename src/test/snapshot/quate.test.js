import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quate from '../../component/quate';

describe('Quate componenet', () => {
  it('matches the snapshot', () => {
    const quate = renderer.create(<BrowserRouter><Quate /></BrowserRouter>).toJSON();
    expect(quate).toMatchSnapshot();
  });
});
