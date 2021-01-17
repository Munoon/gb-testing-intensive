import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Header from "../index";
import { mockStore } from "../../../store/mockStore";

describe("Header test", () => {
    it("snapshot", () => {
        const component = render(
            <Router history={createMemoryHistory()}>
                <Provider store={mockStore}>
                    <Header/>
                </Provider>
            </Router>
        );
        expect(component).toMatchSnapshot();
    });
});