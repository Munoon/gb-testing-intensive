import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import Profile from "../index";
import { mockStore, modifiedMockStore } from "../../../store/mockStore";

describe('Profile test', () => {
    it('with authenticated user', () => {
        render(
            <Provider store={mockStore}>
                <Profile />
            </Provider>
        );

        let element = screen.findByText('Name');
        expect(element).toBeDefined();
    });

    it('with anonymous user', () => {
        const store = modifiedMockStore({ user: null })
        render(
            <Provider store={store}>
                <Profile />
            </Provider>
        );

        let element = screen.queryByText('Name');
        expect(element).toBeNull();
    });

    it('snapshot', () => {
        let component = render(
            <Provider store={mockStore}>
                <Profile />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});