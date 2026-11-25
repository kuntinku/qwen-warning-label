// Six original warning label candidates for human behavior

const candidates: string[] = [
  "Warning: Meeting could have been an email - agenda was just a PowerPoint reading",
  "Caution: Snooze button dependency, function on 3 hours sleep, regret 5 minutes later",
  "Attention: Group chat notifications - your phone is now a 3rd wheel",
  "Warning: Shopping cart - contents flee when checkout begins, dignity stays behind",
  "Notice: Reply 'on my way' - GPS estimates 15 minutes, you're still 3 minutes away",
  "Alert: Auto-play videos - watched 3 episodes, none of them were actually chosen"
];

// Score each candidate (out of 10): relatability + humor
// 1. Meeting email - 7/10: relatable but meta
// 2. Snooze button - 8/10: classic struggle, well-worn path
// 3. Group chat - 7/10: phone addiction humor
// 4. Shopping cart - 6/10: common but less personal
// 5. 'On my way' - 9/10: extremely relatable white lie, highest charm
// 6. Auto-play - 6/10: tech frustration, lower human behavior focus
// Best: candidate 5 - "Notice: Reply 'on my way' - GPS estimates 15 minutes, you're still 3 minutes away"

const best = candidates[4]; // "Notice: Reply 'on my way' - GPS estimates 15 minutes, you're still 3 minutes away"
const fs = require('fs');
const path = require('path');

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), best + '\n');
console.log('Written entry:', best);