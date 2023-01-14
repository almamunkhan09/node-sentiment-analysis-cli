// Import functions from the functions file

import getEmotion from './emotionAnalysis.js';
import getText from './getText.js';

const userInput = process.argv[2];

const text = await getText(userInput);
console.log(await getEmotion(text));
