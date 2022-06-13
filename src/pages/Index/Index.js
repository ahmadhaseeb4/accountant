import React from 'react';
// import { datadogRum } from '@datadog/browser-rum';

function Index() {
  const link = 'https://i6vylz6l49.execute-api.us-east-1.amazonaws.com/scc/dcc';
  const getData = async () => {
    try {
      fetch(link).then((res) => {
        res.json().then((data) => {
          if (data.errorType === 'Error') throw new Error(`Exceptonn: ${data.errorMessage}`);
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
