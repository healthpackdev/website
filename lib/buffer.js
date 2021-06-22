export const encodeBase64File = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const base64StartsWith = /^data:image\/(png|jpeg);base64,/;
export const decodeBase64File = (base64File) => Buffer.from(base64File.replace(base64StartsWith, ''), 'base64');

export const encodeBase64 = (text) => Buffer.from(text.replace(base64StartsWith, '')).toString('base64');
export const decodeBase64 = (base64) => Buffer.from(base64, 'base64').toString();
