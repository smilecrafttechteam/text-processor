const encodeUtf8ToBase64 = (text) => btoa(unescape(encodeURIComponent(text)));
const decodeBase64ToUtf8 = (text) => decodeURIComponent(escape(atob(text)));

export const base64Encode = (text) => {
  try {
    return encodeUtf8ToBase64(text);
  } catch {
    return text;
  }
};

export const base64Decode = (text) => {
  try {
    return decodeBase64ToUtf8(text);
  } catch {
    return text;
  }
};

export const urlEncode = (text) => encodeURIComponent(text);

export const urlDecode = (text) => {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
};
