import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../components/Gallery/Gallery.tsx';

describe('testing the gallery', () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<Gallery />).toJSON();

        expect(tree).toMatchSnapshot();
    })
});