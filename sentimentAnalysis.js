// import Packages
import axios from 'axios';
// import dotenv and initiate to use
import * as dotenv from 'dotenv';

dotenv.config(); // make env variables available to the code base

const getSentiment = async (inputText) => {
  const encodedParams = new URLSearchParams(); // requirements by the api
  encodedParams.append('text', inputText);

  const postOptions = {
    method: 'POST',
    url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/', // options defined in APi documentation
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': process.env.APIKEY,
      'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com',
    },
    data: encodedParams,
  };

  const { data } = await axios.request(postOptions);

  const success = await data.result_msg;
  if (success === 'Success') {
    const sentiment = {
      sentimentType: data.type,
      sentimentScore: data.score,
    };

    return sentiment;
    // Sentiment is  an object format like this
    // {
    //   sentimentType: data.type,
    //   sentimentScore: data.score,
    //   }
    // }
  }
};

export default getSentiment;
