# log

`log-animate` is a lightweight, zero-dependency logging utility, thoughtfully crafted by **Naqvi**. This package enables developers to easily display dynamic animations, progress bars, timers, and styled messages in the console. Built entirely from scratch without the use of any external libraries, `log` offers a simple yet powerful way to enhance terminal output with customizable text and background colors.

## Key Features:
- **Zero dependencies**: Fully self-contained, with no reliance on external packages.
- **Customizable console output**: Effortlessly modify text and background colors to suit your needs.
- **Dynamic animations**: Includes built-in support for loading animations, progress bars, timers, and spinners.


## Installation

To install the package, run the following command:

```bash
npm install log-animate
```

## Usage

### Importing the log package

```javascript
import logAnimate from "log-animate";
```

### Example 1: Loading Animation

This example demonstrates how to show a loading animation in the console.

```javascript
const loader = [
  "loading .",
  "loading . .",
  "loading . . .",
  "loading . . . .",
  "loading . . . . .",
];
let index = 0;

setInterval(() => {
  const item = loader[index++ % loader.length];
  logAnimate(item);
}, 1000);
```

### Example 2: Progress Bar

This example simulates a progress bar, updating every second.

```javascript
const progress = ["🟩", "🟩🟩", "🟩🟩🟩", "🟩🟩🟩🟩", "🟩🟩🟩🟩🟩"];
let count = 0;

let intervalProgress = setInterval(() => {
  const item = progress[count++ % progress.length];
  logAnimate(`Progress : [${[item]}${"  ".repeat(progress.length - count)}] ${count * 20}%`);
  
  if (count === progress.length) {
    clearInterval(intervalProgress);
  }
}, 1000);
```

### Example 3: Timer Animation

Displays a timer that cycles through different clock emojis and times.

```javascript
const timerLoader = [
  "🕧", "🕐", "🕛", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", 
  "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤",
  "🕙", "🕥", "🕚", "🕦", "🕧"
];

const times = [
  "12:00", "12:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
  "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"
];

let index = 0;

let interval = setInterval(() => {
  const item = timerLoader[index % timerLoader.length];
  logAnimate(`Timer : ${[item]} ${times[index]}`);
  index++;

  if (index === timerLoader.length) {
    clearInterval(interval);
  }
}, 1000);
```

### Example 4: Spinner

Displays a simple spinning animation.

```javascript
const spinner = ["-", "\\", "|", "/"];
let step = 0;

setInterval(() => {
  const item = spinner[step++ % spinner.length];
  logAnimate(`Spinner: ${item}`);
}, 100);
```

### Logging with Custom Background and Text Color

You can pass optional arguments to specify background and text colors:

```javascript
logAnimate("Hello World!", "green", "black");
```

In this example:
- The text "Hello World!" will be displayed with a green background and black text.

The available colors are defined in the ANSI color map and can include options such as `red`, `green`, `yellow`, `blue`, etc.

### Example 5: Real-Time Clock

Logs the current UTC time every second with a green background.

```javascript
setInterval(() => {
  logAnimate(new Date().toUTCString(), "white","green");
}, 1000);
```


### Keywords:
- logging
- console
- terminal
- animations
- progress-bar
- spinner
- timer
- custom colors
- background color
- text color
- CLI
- console logging
- zero-dependency
- open-source

## License

MIT License
