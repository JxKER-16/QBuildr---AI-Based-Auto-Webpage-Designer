import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--qbuildr-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--qbuildr-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--qbuildr-elements-terminal-textColor'),
    background: cssVar('--qbuildr-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--qbuildr-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--qbuildr-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--qbuildr-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--qbuildr-elements-terminal-color-black'),
    red: cssVar('--qbuildr-elements-terminal-color-red'),
    green: cssVar('--qbuildr-elements-terminal-color-green'),
    yellow: cssVar('--qbuildr-elements-terminal-color-yellow'),
    blue: cssVar('--qbuildr-elements-terminal-color-blue'),
    magenta: cssVar('--qbuildr-elements-terminal-color-magenta'),
    cyan: cssVar('--qbuildr-elements-terminal-color-cyan'),
    white: cssVar('--qbuildr-elements-terminal-color-white'),
    brightBlack: cssVar('--qbuildr-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--qbuildr-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--qbuildr-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--qbuildr-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--qbuildr-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--qbuildr-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--qbuildr-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--qbuildr-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
