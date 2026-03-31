const fs = require('fs');
eval(fs.readFileSync('./isTuesday.js', 'utf8'));

const results = [];

function test(description, fn) {
  try {
    fn();
    results.push({ ok: true, description });
  } catch (e) {
    results.push({ ok: false, description, error: e.message });
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'assertion failed');
}

test('returns true for a known Tuesday', () => {
  assert(isTuesday(new Date('2026-03-31')) === true, 'expected true for 2026-03-31 (Tuesday)');
});

test('returns false for a Wednesday', () => {
  assert(isTuesday(new Date('2026-04-01')) === false, 'expected false for 2026-04-01 (Wednesday)');
});

test('returns false for a Monday', () => {
  assert(isTuesday(new Date('2026-03-30')) === false, 'expected false for 2026-03-30 (Monday)');
});

test('returns true for another Tuesday', () => {
  assert(isTuesday(new Date('2024-01-02')) === true, 'expected true for 2024-01-02 (Tuesday)');
});

test('returns false for a Sunday', () => {
  assert(isTuesday(new Date('2026-03-29')) === false, 'expected false for 2026-03-29 (Sunday)');
});

test('returns true for a Thursday', () => {
  assert(isTuesday(new Date('2026-04-02')) === true, 'expected true for 2026-04-02 (Thursday)');
});

let passed = 0;
for (const r of results) {
  if (r.ok) {
    console.log(`✓ ${r.description}`);
    passed++;
  } else {
    console.error(`✗ ${r.description} — ${r.error}`);
  }
}

const total = results.length;
const failed = total - passed;
console.log(`\n${passed}/${total} passed${failed > 0 ? `, ${failed} failed` : ''}`);
if (failed > 0) process.exit(1);
