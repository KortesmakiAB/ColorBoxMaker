// Every component needs a smoke + snapshot test.
// Critical Business Logic needs tests too. Use your judgement for this, but make sure you cover core functionality. Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.


import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('if smoking', () => {
  render(<BoxList />);
});
