import { render } from '@testing-library/react';
import Box from './Box';

test('if smoking', () => {
  render(<Box />);
});

// No Snapshot test because box size depends on having user input. 
// it('matches snapshot', () => {
//   const { asFragment } = render(<Box />);
//   expect(asFragment()).toMatchSnapshot();
// });
