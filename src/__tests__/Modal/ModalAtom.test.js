import React from 'react';
import ModalAtom from "../../components/Modal/ModalAtom";
import { render, screen } from '@testing-library/react'

describe('Modal test cases', () => {

    it('render Atom', () => {

        render(<ModalAtom
            title='Modal'
            open={true}
            handleClose={() => { }}
        >
            <div>Sample Content</div>
        </ModalAtom>);
        expect(screen.getByText('Modal')).toBeInTheDocument();
    })
})