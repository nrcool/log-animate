/* log package created by Naqvi */
import ansiColorMap from "./ansi-color-map.js";

export default function logAnimate(
  input,
  bgcolor = "default",
  textColor = "default"
) {
  process.stdout.write("\x1b[?25l"); /* hide cursor */
  process.stdout.write("\x1b[2K"); /* reset/clear entire line */
  process.stdout.write(
    `\r${ansiColorMap[bgcolor].background}${ansiColorMap[textColor].foreground}${input}\x1b[0m`
  );
}

export function logEnd() {
  process.stdout.write("\n");
}
