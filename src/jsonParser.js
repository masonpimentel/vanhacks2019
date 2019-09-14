import data from './mock_data_1.json'

const parseJsonAsyncFunc = jsonString => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(data));
      });
    });
  }
