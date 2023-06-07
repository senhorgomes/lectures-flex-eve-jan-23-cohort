import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('Changing cheat state when clicked on', ()=>{
    test('will be turned on if clicked once', ()=>{
        const {getByTestId, container} = render(<Game/>);
        const robotIcon = getByTestId('robot-icon');
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass("cheating");
    })
    test('will be turned off if clicked twice', ()=>{
        const {getByTestId, container} = render(<Game/>);
        const robotIcon = getByTestId('robot-icon');
        fireEvent.click(robotIcon);
        fireEvent.click(robotIcon);
        // Allows us to output the components HTML in the terminal for debugging
        console.log(prettyDOM(container))
        expect(robotIcon).not.toHaveClass("cheating");
    })
})