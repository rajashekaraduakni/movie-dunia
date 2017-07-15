import { MovieDuniaPage } from './app.po';

describe('movie-dunia App', () => {
  let page: MovieDuniaPage;

  beforeEach(() => {
    page = new MovieDuniaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
