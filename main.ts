// Three warning label candidates for humans

const candidates: string[] = [
  "Warning: May auto-join Zoom with mute off - coworker voice notes never forget",
  "Caution: Snooze button dependency, function on 3 hours sleep, regret 5 minutes later",
  "Attention: Online shopping cart - contents flee when checkout begins"
];

// Pick the best and write it
const best = candidates[0]; // "Warning: May auto-join Zoom with mute off - coworker voice notes never forget"
const fs = require('fs');
const path = require('path');

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), best + '\n');
console.log('Written entry:', best);