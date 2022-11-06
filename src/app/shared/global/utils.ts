import { Key } from './key';

export class Utils {

  /**
   * Format input string into html text with characters of specified indexes highlighted.
   * 
   * @param text input string to be formatted with highlighting characters.
   * @param indexes indexes of characters to be highlighted.
   */
  public static highlightText(text: string, indexes: number[]): string {
    let outputString = '';
    for (let i = 0; i < text.length; i ++) {
      const char = text.charAt(i);
      if (char === Key.Enter) {
      outputString += '<br>'
      } else if (indexes.includes(i)) {
      outputString += `<span class="error-highlight">${char}</span>`;
      } else {
      outputString += char;
      }
    }
    return outputString;
  }
}
