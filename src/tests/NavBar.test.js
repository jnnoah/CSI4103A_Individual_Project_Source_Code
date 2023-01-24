import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../components';

describe('NavBar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });

//   it('should have a button', () => {
//     const wrapper = shallow(<MyComponent />);
//     expect(wrapper.find('button').length).toEqual(1);
//   });

//   it('should call a function on button click', () => {
//     const mockFn = jest.fn();
//     const wrapper = shallow(<MyComponent onButtonClick={mockFn} />);
//     wrapper.find('button').simulate('click');
//     expect(mockFn).toHaveBeenCalled();
//   });
});
