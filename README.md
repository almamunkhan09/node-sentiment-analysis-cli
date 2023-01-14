# Node Sentiment Analysis CLI

This node js cli analyze your sentiment and emotion. Sounds interesting? Lets try

## Authors

- [@al mamun khan](https://github.com/almamunkhan09)

## Features

- Takes user input or the file name
- Analyze the sentiment and emotions inherits in the text or file

## Documentation

[Documentation](https://linktodocumentation)

Just provide the text or file name you will get the sentiment and emotions. This cli does not support getting files from your device. It now supporting only files exists in codebase. There is a file inside the codebase named hello.txt

The file includes the text "Buy the shoes. It’s okay, screw the budget, that’s not this year’s resolution. You deserve this. When the saleswoman asks you if you’ve done much running, laugh and gesture to your mid-section. The woman will blink, force out a half-baked hah. It’s a reaction of discomfort, not cruelty; you made it weird. You don’t know why you feel the need to shame your own body in front of a stranger, but you blame it on her lululemon leggings and air-hostess smile. She makes you nervous. Most people do.
"

```bash
    $ node index.js < input text or file name >

```

For example

```bash
    $ node index hello.txt
```

results

```
Your text has the following sentiment :

- Negative (confidence lebel 86.9%)


The emotions found in the text are:

- Anger (9.681817443228226 %)
- Surprise (1.2040201318957 %)
- Joy (3.8525916833578617 %)
- Fear (8.066560021475297 %)
- Disgust (0 %)

```

```bash

    $ node index 'This fotbool match was great'

```

results

```
Your text has the following sentiment :

- Positive (confidence lebel 99.2%)


The emotions found in the text are:

- Anger (0 %)
- Surprise (0 %)
- Joy (15.62723204660992 %)
- Fear (0 %)
- Disgust (0 %)

```
