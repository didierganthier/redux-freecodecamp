import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

test('renders learn react link', () => {
  const view = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(view).toMatchSnapshot();
});
