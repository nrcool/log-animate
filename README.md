# log-animate

[![VERSION](https://img.shields.io/badge/version-1.0.1-brightgreen)](https://www.npmjs.com/package/log-animate)

[![LICENSE](https://img.shields.io/badge/LICENSE-MIT-orange)](https://www.npmjs.com/package/log-animate)

[![AUTHOR](https://img.shields.io/badge/AUTHOR-NAQVI-yellow)](https://www.npmjs.com/package/log-animate)

# log-animate

`log-animate` is a lightweight, zero-dependency logging utility, thoughtfully crafted by **Naqvi**. This package enables developers to easily display dynamic animations, progress bars, timers, and styled messages in the console. Built entirely from scratch without the use of any external libraries, `log-animate` offers a simple yet powerful way to enhance terminal output with customizable text and background colors.

## Key Features:
- **Zero dependencies**: Fully self-contained, with no reliance on external packages.
- **Customizable console output**: Effortlessly modify text and background colors to suit your needs.
- **Dynamic animations**: Includes built-in support for loading animations, progress bars, timers, and spinners.


## Installation 🏭

To install the package, run the following command:

```bash
npm install log-animate
```

## Usage 😃

### Importing the log package

```javascript
import logAnimate, {logEnd} from "log-animate";
```

### Example 1: Loading Animation ⌛

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

### Example 2: Progress Bar 🟩🟩🟩🟩🟩

This example simulates a progress bar, updating every second.

```javascript
const progress = ["🟩", "🟩🟩", "🟩🟩🟩", "🟩🟩🟩🟩", "🟩🟩🟩🟩🟩"];
let count = 0;

let intervalProgress = setInterval(() => {
  const item = progress[count++ % progress.length];
  logAnimate(`Progress : [${[item]}${"  ".repeat(progress.length - count)}] ${count * 20}%`);
  
  if (count === progress.length) {
    clearInterval(intervalProgress);
    logEnd()
  }
}, 1000);
```

### Example 3: Timer Animation ⏰

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
    logEnd()
  }
}, 1000);
```

### Example 4: Spinner 🌀

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

### Example 5: Real-Time Clock 1⩇:2⩇

Logs the current UTC time every second with a green background.

```javascript
setInterval(() => {
  logAnimate(new Date().toUTCString(), "white","green");
}, 1000);
``` 

### Example 6: Displaying Logs on Separate Lines with Custom Colors

If you want to print each log on a separate line, you can use the `logEnd()` function after each `logAnimate` call. This ensures that every log message is followed by a line break.

```javascript
import logAnimate,{logEnd } from "log-animate";

// Log the first message with a red background and white text
logAnimate("First Log Message", "red", "white");
logEnd(); // Ends the first log and moves to a new line

// Log the second message with a blue background and white text
logAnimate("Second Log Message", "blue", "white");
logEnd(); // Ends the second log and moves to a new line
```

This example will display the first log message, move to the next line, and then display the second log message on a new line.

### Result:

- The first log (`"First Log Message"`) is printed with a red background and white text, followed by a line break.
- The second log (`"Second Log Message"`) is printed on the next line with a blue background and white text.

By using `logEnd()`, you ensure that each log message ends and moves to the next line, as expected.


## Author ✍️
[**Naqvi 🇩🇪  **](https://github.com/nrcool)

## Contribute 🤝

You can fork this repo and send me a PR.



