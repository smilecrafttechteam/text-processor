import {
  toCamelCase,
  toCapitalizedCase,
  toConstantCase,
  toKebabCase,
  toLowercase,
  toPascalCase,
  toSentenceCase,
  toSlug,
  toSnakeCase,
  toTitleCase,
  toToggleCase,
  toUppercase,
} from './js/caseConverters.js';
import {
  addPrefix,
  addSuffix,
  getStats,
  normalizeWhitespace,
  removeEmptyLines,
  removeExtraSpaces,
  trimLines,
  wrapLinesInQuotes,
} from './js/textUtils.js';
import {
  numberLines,
  removeDuplicateLines,
  reverseLines,
  sortLinesAZ,
  sortLinesZA,
} from './js/lineTools.js';
import { base64Decode, base64Encode, urlDecode, urlEncode } from './js/encoders.js';

const THEME_KEY = 'text-tools-theme';

const inputText = document.querySelector('#inputText');
const outputText = document.querySelector('#outputText');
const prefixInput = document.querySelector('#prefixInput');
const suffixInput = document.querySelector('#suffixInput');
const toast = document.querySelector('#toast');
const themeToggleBtn = document.querySelector('#themeToggleBtn');

const statsElements = {
  charCount: document.querySelector('#charCount'),
  wordCount: document.querySelector('#wordCount'),
  lineCount: document.querySelector('#lineCount'),
  readTime: document.querySelector('#readTime'),
};

const actions = {
  lowercase: toLowercase,
  uppercase: toUppercase,
  sentenceCase: toSentenceCase,
  titleCase: toTitleCase,
  capitalizedCase: toCapitalizedCase,
  toggleCase: toToggleCase,
  camelCase: toCamelCase,
  pascalCase: toPascalCase,
  snakeCase: toSnakeCase,
  kebabCase: toKebabCase,
  constantCase: toConstantCase,
  removeExtraSpaces,
  trimLines,
  removeEmptyLines,
  normalizeWhitespace,
  sortAZ: sortLinesAZ,
  sortZA: sortLinesZA,
  reverseLines,
  removeDuplicateLines,
  numberLines,
  addPrefix: (text) => addPrefix(text, prefixInput.value),
  addSuffix: (text) => addSuffix(text, suffixInput.value),
  wrapQuotes: wrapLinesInQuotes,
  base64Encode,
  base64Decode,
  urlEncode,
  urlDecode,
  slugify: toSlug,
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1500);
};

const getSystemPreferredTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getSavedTheme = () => localStorage.getItem(THEME_KEY);

const getActiveTheme = () => getSavedTheme() || getSystemPreferredTheme();

const syncThemeToggleLabel = () => {
  const isDarkMode = document.documentElement.dataset.theme === 'dark';
  themeToggleBtn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
  themeToggleBtn.setAttribute('aria-pressed', String(isDarkMode));
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  syncThemeToggleLabel();
};

const toggleTheme = () => {
  const nextTheme = getActiveTheme() === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
  showToast(`${nextTheme === 'dark' ? 'Dark' : 'Light'} mode enabled`);
};

const updateStats = () => {
  const source = outputText.value || inputText.value;
  const { characterCount, words, lines, readingMinutes } = getStats(source);

  statsElements.charCount.textContent = `Characters: ${characterCount}`;
  statsElements.wordCount.textContent = `Words: ${words}`;
  statsElements.lineCount.textContent = `Lines: ${lines}`;
  statsElements.readTime.textContent = `Reading Time: ${readingMinutes} min`;
};

const runAction = (actionName) => {
  const action = actions[actionName];
  if (!action) return;

  const sourceText = inputText.value;
  outputText.value = action(sourceText);
  updateStats();
};

const readClipboard = async () => {
  if (!navigator.clipboard) {
    showToast('Clipboard access unavailable');
    return;
  }

  try {
    const text = await navigator.clipboard.readText();
    inputText.value = text;
    updateStats();
    showToast('Pasted from clipboard');
  } catch {
    showToast('Unable to paste clipboard');
  }
};

const copyOutput = async () => {
  if (!navigator.clipboard) {
    showToast('Clipboard access unavailable');
    return;
  }

  try {
    await navigator.clipboard.writeText(outputText.value);
    showToast('Output copied');
  } catch {
    showToast('Unable to copy output');
  }
};

const clearText = () => {
  inputText.value = '';
  outputText.value = '';
  updateStats();
  showToast('Text cleared');
};

const downloadOutput = () => {
  const blob = new Blob([outputText.value], { type: 'text/plain;charset=utf-8' });
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = 'text-tools-output.txt';
  anchor.click();
  URL.revokeObjectURL(anchor.href);
};

document.querySelector('.tools-grid').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  runAction(button.dataset.action);
});

document.querySelector('#pasteInputBtn').addEventListener('click', readClipboard);
document.querySelector('#copyOutputBtn').addEventListener('click', copyOutput);
document.querySelector('#clearBtn').addEventListener('click', clearText);
document.querySelector('#downloadBtn').addEventListener('click', downloadOutput);
themeToggleBtn.addEventListener('click', toggleTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!getSavedTheme()) {
    applyTheme(getSystemPreferredTheme());
  }
});

inputText.addEventListener('input', updateStats);
outputText.addEventListener('input', updateStats);

applyTheme(getActiveTheme());
updateStats();
