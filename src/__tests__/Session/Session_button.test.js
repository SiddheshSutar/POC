import React from 'react';
import Button from "../../components/Session/Button";
import { render, screen } from '@testing-library/react'

describe('Loader test cases', () => {

    it('render Loader', () => {

        render(<Button
            onClick = {() => {}}
            btnValue = {'Log In'}
            className = {'log-in-container'}
        />);
        expect(screen.getByText('Log In')).toBeInTheDocument();
    })
})