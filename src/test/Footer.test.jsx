import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer/Footer.tsx';

describe('testing the footer', () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<Footer />).toJSON();

        expect(tree).toMatchSnapshot();
    })
});