import * as dotenv from 'dotenv';
import MonkeyLearn from 'monkeylearn';

dotenv.config();

// Use the API key from your account

const ml = new MonkeyLearn(process.env.MAPIKEY); // MAPIKEY refers the api key for monkeylearn

// Classify some texts
const modelId = 'cl_pi3C7JiL';
// the full options are described in the docs: https://monkeylearn.com/api/v3/#classify

export default async function sentimentByMonkey(data) {
  const classifiedDataObj = await ml.classifiers
    .classify(modelId, data)
    .then((response) => response['body'][0])
    .then((responseObj) => responseObj['classifications'])
    .then((classificationArray) => classificationArray[0])
    .catch((err) => console.log('Error to Fetch the API', err));

  return await classifiedDataObj;
}
