import React from 'react';
import { render, screen } from 'test-utils';
import HomePage from '../../pages/index';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

describe('HomePage', () => {
    render(
        <Provider store={store}>
            <HomePage />
        </Provider>
    );

    it('should render the heading', () => {
        const textToFind = 'Next.js!';

        expect(screen.getByText(textToFind)).toBeVisible();
    });
});
