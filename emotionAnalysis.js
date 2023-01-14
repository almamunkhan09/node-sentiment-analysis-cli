// import Packages
import axios from 'axios';
// import dotenv and initiate to use
import * as dotenv from 'dotenv';

dotenv.config(); // make env variables available to the code base

const getEmotion = async (inputText) => {
  const encodedParams = new URLSearchParams(); // requirements by the api
  encodedParams.append('text', inputText);

  const postOptions = {
    method: 'POST',
    url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/', // options defined in APi documentation
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': process.env.APIKEY,
      'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com',
    },
    data: encodedParams,
  };

  const { data } = await axios.request(postOptions);
  const success = await data.result_msg;
  if (success === 'Success') {
    const emotions = {
      overAllEmotion: data.emotions_detected,
      emotionsScores: data.emotion_scores,
    };

    return emotions;
    // Emotions in an object format like this
    // {
    //   overAllEmotion: [ 'anger', 'surprise', 'fear' ],
    //   emotionsScores: {
    //     anger: 0.08898796712708536,
    //     surprise: 0.07622520632943404,
    //     fear: 0.0647874225174748,
    //     disgust: 0,
    //     sadness: 0,
    //     joy: 0.04
    //   }
    // }
  }
};

export default getEmotion;
