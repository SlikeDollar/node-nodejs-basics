const parseArgs = () => {
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i += 2) {
    const arg = args[i].slice(2);
    console.log(`${arg} is ${args[i + 1]}`);
  }
};

parseArgs();
