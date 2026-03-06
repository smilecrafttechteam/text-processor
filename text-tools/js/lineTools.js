const splitLines = (text) => text.replace(/\r\n/g, '\n').split('\n');

export const sortLinesAZ = (text) => splitLines(text).sort((a, b) => a.localeCompare(b)).join('\n');

export const sortLinesZA = (text) => splitLines(text).sort((a, b) => b.localeCompare(a)).join('\n');

export const reverseLines = (text) => splitLines(text).reverse().join('\n');

export const removeDuplicateLines = (text) => {
  const seen = new Set();
  return splitLines(text)
    .filter((line) => {
      if (seen.has(line)) return false;
      seen.add(line);
      return true;
    })
    .join('\n');
};

export const numberLines = (text) =>
  splitLines(text)
    .map((line, index) => `${index + 1}. ${line}`)
    .join('\n');
