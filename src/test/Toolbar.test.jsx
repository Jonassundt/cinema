import React from 'react';
import renderer from 'react-test-renderer';
import Toolbar from '../components/Toolbar/Toolbar.tsx';

describe('testing the toolbar', () => {
    it("matches the snapshot", () => {
        const tree = renderer.create(<Toolbar />).toJSON();

        expect(tree).toMatchSnapshot();
    })
});