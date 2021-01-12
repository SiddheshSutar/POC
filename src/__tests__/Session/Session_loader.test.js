import React from 'react';
import Loader from "../../components/Session/Loader";
import { render } from '@testing-library/react'

describe('Loader test cases', () => {

    it('render Loader', () => {

        render(<Loader/>);
    })
})