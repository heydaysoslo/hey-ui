# hey-ui

[![NPM](https://img.shields.io/npm/v/heydays-ui.svg?style=flat&logo=npm)](https://www.npmjs.com/package/heydays-ui)
[![Bundle size](https://img.shields.io/bundlephobia/min/heydays-ui?style=flat&logo=bundlephobia)](https://github.com/heydaysoslo/hey-ui)
[![Checks](https://img.shields.io/github/checks-status/heydaysoslo/hey-ui/master?style=flat&logo=Jest)](https://github.com/heydaysoslo/hey-ui)
[![Popular language](https://img.shields.io/github/languages/top/heydaysoslo/hey-ui?style=flat&logo=github)](https://github.com/heydaysoslo/hey-ui)

Component library built with React and Styled components mainly for use for [Heydays](https://heydays.no).

## Install

```bash
yarn add heydays-ui
```

or with npm

```bash
npm i heydays-ui
```

## Development

You need to start the bundler for the package, and start the example app.

```bash
yarn start
cd example && yarn start
```

## Usage

```tsx
import React from 'react'

import { Button } from 'hey-ui'

const MyComp = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

## License

MIT © [mittnavnermike](https://github.com/mittnavnermike)
