import React from 'react';
import renderer from 'react-test-renderer';
import Poster from '../components/Poster/Poster.tsx';

describe('testing the poster', () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<Poster />).toJSON();

        expect(tree).toMatchSnapshot();
    })
});