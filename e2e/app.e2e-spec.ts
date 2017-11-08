import { AcCloudAppPage } from './app.po';

describe('ac-cloud-app App', () => {
  let page: AcCloudAppPage;

  beforeEach(() => {
    page = new AcCloudAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
