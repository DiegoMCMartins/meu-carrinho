/**
 * Function to get the first letter of any text
 */
export const getFirstLetter = (text: string) => {
  if (typeof text !== 'string') {
    return '';
  }

  return text[0];
};
