import { fireEvent, render, screen } from '@testing-library/react'
import TimeTravel from './TimeTravel';

it('should update Date in proper order', () => {
    render(<TimeTravel />);
    const undo = screen.getByText('Undo');
    const redo = screen.getByText('Redo');
    const input = screen.getByLabelText('input');

    screen.getByText('Select a Date');

    fireEvent.change(input, { target: { value: '2022-01-01'}});
    screen.getByText('2022-01-01');
    
    fireEvent.change(input, { target: { value: '2022-02-22'}});
    screen.getByText('2022-02-22')

    fireEvent.change(input, { target: { value: '2022-03-15'}})
    screen.getByText('2022-03-15');

    fireEvent.click(undo);
    screen.getByText('2022-02-22');

    fireEvent.click(undo);
    screen.getByText('2022-01-01');

    fireEvent.click(redo);
    screen.getByText('2022-02-22');

    fireEvent.change(input, { target: { value: '2022-04-04'}});
    screen.getByText('2022-04-04');

    fireEvent.click(undo);
    screen.getByText('2022-02-22');

    fireEvent.click(undo);
    screen.getByText('2022-01-01');

    fireEvent.click(redo);
    screen.getByText('2022-02-22');

    fireEvent.click(redo);
    screen.getByText('2022-04-04');

    fireEvent.click(redo);
    screen.getByText('2022-03-15');
   

});
