import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import ProfileStatusWithHoocs from '../../ProfileInfo/ProfileStatusWithHoocs';

describe('ProfileStatus component', () => {
  test('status from props shout be in the state', () => {
    const component = create(<ProfileStatusWithHoocs status='testStatusForTest' />);
    const instance = component.getInstance();
    expect(instance.state.localStatus).toBe('testStatusForTest');
  });
});
