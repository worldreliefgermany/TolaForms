import { TolaFormsPage } from './app.po';

describe('tola-forms App', () => {
  let page: TolaFormsPage;

  beforeEach(() => {
    page = new TolaFormsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
