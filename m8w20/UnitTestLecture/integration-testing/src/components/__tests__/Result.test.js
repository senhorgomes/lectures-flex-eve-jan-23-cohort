import {render,waitFor, getByTestId, fireEvent, prettyDOM} from '@testing-library/react';
import Result from '../Result';

describe('Testin Result component', ()=>{
    test('shows appropriate message when the status is "Waiting"', ()=> {
        const fakeState = {
            compSelection: null,
            playerSelection: null,
            status: 'Waiting',
            cheating: false
          }
        const {container} = render(<Result status={fakeState.status}/>)
        expect(getByTestId(container, "result_footer")).toHaveTextContent("Waiting for your choice!")
    })

    test('can display results from an API', async()=> {

        const { findByText, getByTestId, container} = render(<Result status="Waiting"/>);

        const highScoreButton = getByTestId("high-scores");

        await waitFor(()=>{
            fireEvent.click(highScoreButton);
        });
        //we want to check the data that is being returned.
        
        return findByText("Bob", {exact: false})
    })
})