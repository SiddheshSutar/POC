import React from 'react';
import Session from "../../components/Session/Session";
import { shallow, mount } from "enzyme";
import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Session test cases', () => {

    test('expect profile after 2 sec of click', () => {
        jest.useFakeTimers();

        render(<Session/>)

        act(() => {
            /* fire events that update state */
            fireEvent.click(screen.getByText('Log In'))
        });
        

        // assume login button happens after 2 sec
        jest.advanceTimersByTime(2000);
        jest.useRealTimers();
        
        // expect(screen.getByText('My Name is Ben').exists()).toEqual(true)

        // logout after 2 sec
        act(() => {
            fireEvent.click(screen.getByText(/Log Out/i));
        }, () => {
            jest.advanceTimersByTime(2000);
        });
        
    })

    test('logout click', () => {
        jest.useFakeTimers();

        render(<Session/>)

        userEvent.click(screen.getByText('Log In'))
        jest.advanceTimersByTime(2000);
        jest.useRealTimers();
        
        userEvent.click(screen.getByText('Log Out'))
        jest.advanceTimersByTime(2000);

        expect(screen.getByText('Log In').exists()).toEqual(true)
    })
})