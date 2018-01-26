import { NgProvidersDemoPage } from './app.po';

describe('ng-providers-demo App', () => {
  let page: NgProvidersDemoPage;

  beforeEach(() => {
    page = new NgProvidersDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
