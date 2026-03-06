export const removeExtraSpaces = (text) => text.replace(/[ \t]{2,}/g, ' ');

export const trimLines = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .join('\n');

export const removeEmptyLines = (text) =>
  text
    .split('\n')
    .filter((line) => line.trim() !== '')
    .join('\n');

export const normalizeWhitespace = (text) =>
  text
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .join('\n')
    .trim();

export const addPrefix = (text, prefix = '') =>
  text
    .split('\n')
    .map((line) => `${prefix}${line}`)
    .join('\n');

export const addSuffix = (text, suffix = '') =>
  text
    .split('\n')
    .map((line) => `${line}${suffix}`)
    .join('\n');

export const wrapLinesInQuotes = (text) =>
  text
    .split('\n')
    .map((line) => `"${line}"`)
    .join('\n');

export const getStats = (text) => {
  const normalized = text.replace(/\r\n/g, '\n');
  const characterCount = normalized.length;
  const words = normalized.trim() ? normalized.trim().split(/\s+/).length : 0;
  const lines = normalized === '' ? 0 : normalized.split('\n').length;
  const readingMinutes = words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));

  return {
    characterCount,
    words,
    lines,
    readingMinutes,
  };
};
