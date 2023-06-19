const parseEnv = () => {
  const envVariables = process.env;
  const envArr = [];

  for (const key in envVariables) {
    if (key.startsWith('RSS_')) {
      envArr.push(`${key}=${envVariables[key]}`);
    }
  }

  console.log(...envArr);
};

parseEnv();
