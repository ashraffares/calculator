import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../../component/App/App';

describe('App component', () => {
  it('matches the snapshot', () => {
    const app = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(app).toMatchSnapshot();
  });
});
