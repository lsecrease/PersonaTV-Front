import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Store from '../../src/js/store';
import Greeting from '../../src/js/components/Greeting';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('Greeting Component Tests', () => {
    let renderer, rendered;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(
            <Greeting />
        );
        rendered = renderer.getRenderOutput();
    });

    describe('Content Area', () => {
        it('should display a DIV with content "Hello, Welcome to PersonaTV!"', () => {
            expect(rendered).toIncludeJSX(<div>Hello, Welcome to PersonaTV!</div>);
        });
    });
});