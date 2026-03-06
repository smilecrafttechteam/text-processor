const splitWords = (text) =>
  text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

const capitalizeWord = (word = '') =>
  word ? `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}` : '';

export const toLowercase = (text) => text.toLowerCase();

export const toUppercase = (text) => text.toUpperCase();

export const toSentenceCase = (text) => {
  const lower = text.toLowerCase();
  return lower.replace(/(^\s*[a-z]|[.!?]\s+[a-z])/g, (match) => match.toUpperCase());
};

export const toTitleCase = (text) =>
  text
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());

export const toCapitalizedCase = (text) =>
  text
    .split(/(\s+)/)
    .map((chunk) => (chunk.trim() ? capitalizeWord(chunk) : chunk))
    .join('');

export const toToggleCase = (text) =>
  Array.from(text)
    .map((char) => {
      const upper = char.toUpperCase();
      const lower = char.toLowerCase();
      if (char === upper && char !== lower) return lower;
      if (char === lower && char !== upper) return upper;
      return char;
    })
    .join('');

export const toCamelCase = (text) => {
  const words = splitWords(text).map((word) => word.toLowerCase());
  if (!words.length) return '';

  return words
    .map((word, index) => (index === 0 ? word : capitalizeWord(word)))
    .join('');
};

export const toPascalCase = (text) => splitWords(text).map(capitalizeWord).join('');

export const toSnakeCase = (text) => splitWords(text).map((word) => word.toLowerCase()).join('_');

export const toKebabCase = (text) => splitWords(text).map((word) => word.toLowerCase()).join('-');

export const toConstantCase = (text) => splitWords(text).map((word) => word.toUpperCase()).join('_');

export const toSlug = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
