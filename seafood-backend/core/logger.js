const Colors = {
  RED: "\x1b[31m",
  GREEN: "\x1b[32m", 
  BLUE: "\x1b[34m",
  YELLOW: "\x1b[33m"
}

module.exports = class Logger {
  static info = (color, message) => {
    console.log(`${Colors[color]}%s\x1b[0m`, message);
  }
  static error = (message) => {
    console.log(`${Colors[RED]}%s\x1b[0m`, message);
  }
}