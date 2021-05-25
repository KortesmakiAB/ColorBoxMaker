import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BoxList from './BoxList';

test('if smoking', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test('can enter data, submit form, then see box. Click "X" button to remove box.', () => {
  const btnText = "X";
  render(<BoxList />);

  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  expect(screen.queryByRole('button', {name: 'X'})).not.toBeInTheDocument();

  userEvent.type(screen.getByLabelText("Width:"), '150');
  userEvent.type(screen.getByLabelText("Height:"), '75');
  userEvent.type(screen.getByLabelText("Background Color:"), 'blue');
  userEvent.click(screen.getByRole('button', {name: "Create New Box"}));

  const removeBtn = screen.getByRole('button', {name: btnText});
  const li = screen.getByRole('listitem');

  expect(li).toBeInTheDocument();
  expect(screen.getByTestId('150-75-blue')).toHaveStyle({ width: '150px', height: '75px', backgroundColor: 'blue'});
  expect(removeBtn).toBeInTheDocument();

  userEvent.click(removeBtn);

  expect(li).not.toBeInTheDocument();
  expect(removeBtn).not.toBeInTheDocument();
});