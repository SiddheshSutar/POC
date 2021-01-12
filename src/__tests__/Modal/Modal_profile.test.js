import React from 'react';
import Profile from "../../components/Modal/Profile";
import { render, screen } from '@testing-library/react'

describe('Profile test cases', () => {

    it('render Atom', () => {

        render(<Profile
            username='Ben'
            age={43}
        />);
        expect(screen.getByText('My name is Ben, I am 43 years old')).toBeInTheDocument();

    })
})