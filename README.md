# ikpu-mxik

API wrapper for [tasnif.soliq.uz](https://tasnif.soliq.uz/)  (in TypeScript ⚡). This package is fork of [mxik-js](https://github.com/azabroflovski/mxik-js) by azabroflovski.
Note: default language of server responses is uz (Uzbek), if you want to use other language use <code>lang</code> option.

## Install
Via package manager
```sh
# NPM
$ npm install ikpu-mxik

# yarn
$ yarn add ikpu-mxik
```

## Usage

```js
import { MXIKSearch } from 'ikpu-mxik'

// works if u have top-level await
const response = await MXIKSearch('search query', { limit: 10 })

// or 
async function doSomething() {
    const response = await MXIKSearch('search query', { limit: 10 })
}
```

### via cdn
Copy the following URL and paste it into your HTML code via script tag
```
https://unpkg.com/mxik@0.0.1/ikpu-mxik.umd.cjs
```

Example
```html
<body>
    <head>
        <titl>Website title</titl>
        ...
    </head>

    <script src="https://unpkg.com/mxik@0.0.1/ikpu-mxik.umd.js"></script>
    <script>
        async function doSomething() {
            const response = await MXIKSearch('search query', { limit: 10 })
        }
        
        async function doAnother() {
            const response = await MXIKSearchByCode('06109001001000000', { limit: 10 })
        }
    </script>
</body>
```

## Examples

### Search items

```js
async function doSomething() {
    const response = await MXIKSearch('search query', { limit: 10 })
}
```


### Search items by mxik code  

```js
async function doSomething() {
    const response = await MXIKSearchByCode('06109001001000000', { limit: 10 })
}
```

### Get mxik code details

```js
async function doSomething() {
    const response = await MXIKDetails('06109001001000000')
}
```

## API

#### `MXIKSearch(keyword: string, options: object)`
| Param                  | Default value | Description                            |
|:-----------------------|:--------------|:---------------------------------------|
| keyword `string`       | -             | Find items by name                     |
| options `object`       | { ... }       | Search options                         |
| options.limit `object` | 20            | Items count per page                   |
| options.lang `string`  | uz            | Language for tasnif.soliq.uz responses |

----

#### `MXIKSearchByCode(keyword: string, options: object)`
| Param                  | Default value | Description                            |
|:-----------------------|:--------------|:---------------------------------------|
| keyword `string`       | -             | Pass a mxik code                       |
| options `object`       | { ... }       | Search options                         |
| options.limit `object` | 20            | Items count per page                   |
| options.lang `string`  | uz            | Language for tasnif.soliq.uz responses |

----

#### `MXIKDetails(code: string | number)`
| Param                 | Default value | Description                              |
|:--------------------- |:--------------|:-----------------------------------------|
| code `string/number`  | -             | Pass a mxik code                         |
| options.lang `string` | uz            | Language for tasnif.soliq.uz responses   |


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, aslbekkucharov
