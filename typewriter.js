const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 100 * (i + 1));
}

setTimeout(() => {
  console.log();
}, sentence.length * 100 + 100);
