import { Utils } from './utils';

describe('Utils', () => {
  it('should create an instance', () => {
    const inputText  = 'How to improve typing speed and accuracy.'
    const expectedOutput = 'How to impro<span class="error-highlight">v</span>e typing'
                         + ' s<span class="error-highlight">p</span>eed and accuracy.'
    const errorIndexes = [12, 23];
    const acutalResult = Utils.highlightText(inputText, errorIndexes);
    expect(acutalResult).toEqual(expectedOutput);
  });
});
