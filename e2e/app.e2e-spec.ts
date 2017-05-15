import { NgBookMusicSearchPage } from './app.po';

describe('ng-book-music-search App', function() {
  let page: NgBookMusicSearchPage;

  beforeEach(() => {
    page = new NgBookMusicSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
