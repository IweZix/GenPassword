# GenPassword

> GenPassword is a simple package to generate password.

## Install

```bash
npm install @iwezix/genpassword --save
```

## Usage

```js
import { genPassword } from '@iwezix/genpassword';

const password = genPassword(true, true, 10, false);

// [ 'Anb3(4,c)C', '3l)9j-3hz7' ]
console.log(password);
```

## Available options

| Name            | Description                                  |
|-----------------|----------------------------------------------|
| number          | Boolean, put numbers in password.            |
| special         | Boolean, put symbols in password.            |
| length          | Number, length of password.                  |
| capitalLetter   | Boolean, put capitals letters in password    |
