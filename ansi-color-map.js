const ansiColorMap = {
  red: {
    foreground: "\x1b[31m",
    background: "\x1b[41m",
  },
  green: {
    foreground: "\x1b[32m",
    background: "\x1b[42m",
  },
  yellow: {
    foreground: "\x1b[33m",
    background: "\x1b[43m",
  },
  blue: {
    foreground: "\x1b[34m",
    background: "\x1b[44m",
  },
  magenta: {
    foreground: "\x1b[35m",
    background: "\x1b[45m",
  },
  cyan: {
    foreground: "\x1b[36m",
    background: "\x1b[46m",
  },
  white: {
    foreground: "\x1b[37m",
    background: "\x1b[47m",
  },
  black: {
    foreground: "\x1b[30m",
    background: "\x1b[40m",
  },
  default: {
    foreground: "\x1b[39m",
    background: "\x1b[49m",
  },
};

export default ansiColorMap;
