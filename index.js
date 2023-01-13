// import other packages
import axios from 'axios';
// import dotenv and initiate to use
import * as dotenv from 'dotenv';

dotenv.config(); // make env variables available to the code base

// console.log('hello');

// const options = {
//   method: 'GET',
//   url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
//   params: {
//     text: 'After living abroad for such a long time, seeing my family was the best present I could have ever wished for.',
//   },
//   headers: {
//     'X-RapidAPI-Key': `${process.env.API_KEY}`,
//     'X-RapidAPI-Host': `${process.env.API_HOST}`,
//   },
// };

const getEmotion = async () => {
  try {
    console.log('Api called');
    const options = {
      method: 'GET',
      url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
      params: {
        text: 'After living abroad for such a long time, seeing my family was the best present I could have ever wished for.',
      },
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': `${process.env.API_HOST}`,
      },
    };
    const { data } = await axios.request(options);

    const success = await data.result_msg;

    if (success === 'Success') {
      const emotions = {
        overAllEmotion: data.emotions_detected,
        emotionsScores: data.emotion_scores,
      };

      return emotions;
    }
  } catch (error) {
    console.log(`Error happened while fetching Api `);
  }
};

await getEmotion();

const text =
  'After living abroad for such a long time, seeing my family was the best present I could have ever wished for.';

const getEmotionsByPost = async (inputText) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('text', inputText);
  const postOptions = {
    method: 'POST',
    url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'ef11930cefmshddcf26234424d0fp162254jsn6eb749205c86',
      'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com',
    },
    data: encodedParams,

    const {}


  };
};

// const data = await axios
//   .request(options)
//   .then((response) => {
//     return response.data;
//   })
//   .catch((err) => err);

// console.log(typeof data.result_msg);

// const success = data.result_msg;
// if (success === 'Success') {
//   const emotions = {
//     overAllEmotion: data.emotions_detected,
//     emotionsScores: data.emotion_scores,
//   };

//   console.log(emotions);
// }

// axios
//   .request(options)
//   .then((response) => {
//     console(response.data);
//     if (response.data.result_code === '200') {
//       const emotions = {
//         emotion: response.data.emotion_detected[0],
//         enotionScores: response.data.emotion_scores, // gives the categories of emotion
//       };
//       console.log(emotions); // return emotions get from the API call
//     }
//   })
//   .catch((err) => err);
