import React from 'react';
import renderer from 'react-test-renderer';
import fetchData from '../components/Poster/fetchData.tsx';

describe('testing the fetchData..', () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<fetchData />).toJSON();

        expect(tree).toMatchSnapshot();
    })
});