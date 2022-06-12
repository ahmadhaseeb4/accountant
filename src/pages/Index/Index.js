import React from 'react';
// import { datadogRum } from '@datadog/browser-rum';

function Index() {
  const link = 'https://ltwhtik5va.execute-api.us-east-1.amazonaws.com/accountant/accountant';
  const getData = async () => {
    try {
      fetch(link).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    } catch (err) {
      console.log('Error: ', err);
    }
  };
  return (
    <button type="button" onClick={getData}>Get Data</button>
  );
}

export default Index;
