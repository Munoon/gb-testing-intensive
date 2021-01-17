import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "../index";

describe("article test", () => {
    it('snapshot', () => {
        const article = {
            publishedAt: new Date(''),
            title: 'Test Article',
            imageUrl: 'http://localhost/img',
            url: 'http://localhost/article',
            summary: 'Text about this article',
            newsSite: 'CCB'
        };
        const component = render(<Article article={article} />);
        expect(component).toMatchSnapshot();
    });

    it('should render placeholder', () => {
        render(<Article />);
        const element = screen.findByTestId('article-placeholder')
        expect(element).toBeDefined()
    });
});