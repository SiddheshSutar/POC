import React from 'react';
import Profile from "../../components/Session/Profile";
import { render, screen } from '@testing-library/react'

describe('Profile test cases', () => {

    it('render user Profile', () => {

        render(<Profile
            isLoggedIn = {false}
        />);
        expect(screen.getByText('hi, Please Log In')).toBeInTheDocument();
    })

    it('render logged in Profile', () => {

        render(<Profile
            isLoggedIn = {true}
        />);
        expect(screen.getByText('My Name is Ben')).toBeInTheDocument();
    })
})