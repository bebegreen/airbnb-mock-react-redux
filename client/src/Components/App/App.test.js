import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-css-modules', () => Component => Component);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
