const fs = require('fs');

const lines = fs.readFileSync('test.in').toString().split("\n");
const [ testCaseCount, ...testCases ] = lines;

const processSequence = (sequence, startingIndex) => {
  let sum = 0;
  for (let i = startingIndex; i < sequence.length; i++) {
    sum += sequence[i];
    if (sum === 0) {
      console.log('yes');
      return;
    }
  }
  if (startingIndex >= sequence.length) {
    console.log('no');
    return;
  }
  processSequence(sequence, startingIndex + 1);
}

const processTestCase = (input) => {
  const inputArray = input.split(' ').map(value => parseInt(value, 10));

  // The happy case
  if (inputArray.includes(0)) {
    console.log('yes');
    return;
  }
  processSequence(inputArray, 0);
}

for (let i = 0; i < testCaseCount; i += 1) {
  processTestCase(testCases[i*2 + 1]);
}
