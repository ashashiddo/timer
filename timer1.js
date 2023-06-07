const args = process.argv.slice(2);//create command line for argument

for (const arg of args) { //loop through arugements
  const number = Number(arg);
  if (!isNaN(number) && number > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // this will make our machine perform a system sound beep
    }, number * 3000);

  }
}