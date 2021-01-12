import React from 'react';
import SampleComponent from "../../components/Modal/SampleComponent";
import { render, screen, fireEvent, act } from '@testing-library/react'

describe('SampleComponent test cases', () => {

    it('SampleComponent : 1', () => {

        render(<SampleComponent
            setisOpen={() => {}}
            setLoggedIn={() => {}}
            setData={() => {}}
            values={{ username: "Ben", age: "33" }}
            handleChange={() => {}}
        />);

        act(() => {
            fireEvent.click(screen.getByText(/Log In/i));
        }, () => {
            expect(screen.getByText('Ben')).toBeInTheDocument();
        });

        

    })

    it('SampleComponent : 2', () => {

        render(<SampleComponent
            setisOpen={() => {}}
            setLoggedIn={() => {}}
            setData={() => { return { username: "", age: "" }}}
            values={{ username: "", age: "" }}
            handleChange={() => {}}
        />);

        act(() => {
            fireEvent.click(screen.getByText(/Log In/i));
        });

        expect(screen.getByText('Please check: username')).toBeInTheDocument();
    })
})