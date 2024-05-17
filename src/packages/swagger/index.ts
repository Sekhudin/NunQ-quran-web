import Docs from './docs.class';

export function noEnter(...texts: string[]) {
  const text = texts.join('').replace(/\n/g, ' ');
  return text;
}

export function code(...texts: string[]) {
  const text = texts
    .map((v) => `<code>${v}</code>, `)
    .join('')
    .trim()
    .concat(' ');
  return text;
}

export default Docs;
