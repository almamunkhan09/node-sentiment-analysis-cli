// Import functions from the functions file
import getEmotion from './emotionAnalysis.js';
import getText from './getText.js';
import sentimentByMonkey from './sentimentByMonkeylearn.js';

// Extract userinput or the content from the file
const userInput = process.argv[2];
const text = await getText(userInput);

// Get emotions data from Amotions Api
const { emotionsScores } = await getEmotion(text);

// get sentiment data from the API
const { tag_name: sentiment, confidence } = await sentimentByMonkey([text]);

const outputFormat = `Your text has the following sentiment :

- ${sentiment} (confidence lebel ${confidence * 100}%) \n

The emotions found in the text are:

- Anger (${emotionsScores['anger'] * 100} %)
- Surprise (${emotionsScores['surprise'] * 100} %)
- Joy (${emotionsScores['joy'] * 100} %)
- Fear (${emotionsScores['fear'] * 100} %)
- Disgust (${emotionsScores['disgust'] * 100} %) `;
// - Sadness (${
//   emotionsScores['Sadness'] ? emotionsScores['Sadness'] * 100 : 0
// }%) `;

console.log(outputFormat);
