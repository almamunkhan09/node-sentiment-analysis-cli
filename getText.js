import * as fs from 'node:fs/promises';

export default async function getText(input) {
  try {
    // First check the user provides an input file
    // if the user provide name of input file then read the text of the file
    const fileExists = await fs
      .access(input)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      const text = await fs.readFile(input, { encoding: 'utf8' }); // Read file if the file exists and return the inner text
      return text;
    }

    const text = process.argv[2];
    return text;
  } catch (error) {
    console.error('Error while reading file or text', error);
  }
}
