import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('if smoking', () => {
  render(<NewBoxForm />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('has labels & 1 button', () => {
  render(<NewBoxForm />);
  expect(screen.getByLabelText("Width:")).toBeVisible();
  expect(screen.getByLabelText("Height:")).toBeVisible();
  expect(screen.getByLabelText("Background Color:")).toBeVisible();
  expect(screen.getByRole("button", {name: "Create New Box"})).toBeVisible();
});

it('has input fields', () => {
  render(<NewBoxForm />);
  expect(screen.getByRole("input", {name: "width"})).toBeVisible();
  expect(screen.getByRole("input", {name: "height"})).toBeVisible();
  expect(screen.getByRole("input", {name: "bgColor"})).toBeVisible();
});