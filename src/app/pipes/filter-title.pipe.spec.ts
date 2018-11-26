import { SearchTitlePipe } from './filter-title.pipe';

describe('FilterTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new SearchTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
