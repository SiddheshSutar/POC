import React from 'react';
import Modal from "../../components/Modal/Modal";
import { render, shallow } from "enzyme";
import ModalAtom from '../../components/Modal/ModalAtom';

describe('Modal test cases', () => {

    it('simulate onClick', () => {
        const rendered = shallow(<Modal
            open = {true}
            handleClose={() => {}}
        />);
        rendered.find('button').simulate('click');
        expect(rendered.find(ModalAtom).exists()).toEqual(true);
        rendered.unmount();
    })

    it('pass onClose prop', () => {
        const rendered = shallow(<Modal
            open = {true}
            handleClose={() => {}}
        />);
        rendered.find('button').simulate('click');
        rendered.find(ModalAtom).prop('handleClose')(()=>{});
    })
})