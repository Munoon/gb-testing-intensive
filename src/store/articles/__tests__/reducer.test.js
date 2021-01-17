import reducer from "../reducer";
import { getArticlesFailure, getArticlesRequest, getArticlesSuccess, toggleFavourite } from "../actions";

describe('articles reducer tests', () => {
  it("matches snapshot after getArticlesRequest", () => {
    const result = reducer(undefined, getArticlesRequest());

    expect(result).toMatchSnapshot();
  });

  it('matches snapshot after getArticlesSuccess', () => {
    const articles = [{ title: 'test' }, { title: 'test2' }];
    const action = getArticlesSuccess(articles);
    const result = reducer(undefined, action);

    expect(result).toMatchSnapshot();
  });

  it('matches snapshot after getArticlesFailure', () => {
    const action = getArticlesFailure(new Error('failed to request articles'));
    const result = reducer(undefined, action);

    expect(result).toMatchSnapshot();
  });

  it('matches snapshot after toggle favourites', () => {
    const action = toggleFavourite('TEST_ID');
    const state = { articles: [{ title: 'test', id: 'TEST_ID' }] };
    const result = reducer(state, action);

    expect(result).toMatchSnapshot();
  });

  it('matches snapshot after toggle favourites, that not exist', () => {
    const action = toggleFavourite('TEST_ID');
    const result = reducer(undefined, action);

    expect(result).toMatchSnapshot();
  });
});
