# <img height="100" alt="react-file-load" src="https://raw.githubusercontent.com/undernotic/react-file-load/master/example/src/logo.png">

React component for loading data from files. [deaddesk.top/react-file-load](https://deaddesk.top/react-file-load)

# Installing

Package is available in npm

```bash
npm install react-file-load --save
```

Using yarn

```bash
yarn add react-file-load --save
```

## Size
7,5Kb Gzipped 2.9Kb

# Api
```javascript
<ReactLoadComponent 
    text = "Button text"
    fromColor = "yellow"
    toColor = "black"
    finishedColor = "green"
    accept = ".csv"
    onChange = {inputOnChangeEvent => console.log("file changed")}
    onProgress = {progressNumber => console.log("progress between 0 and 100")}
    onDataChunk = {(dataChunk, error) => console.log("invoked with data chunk")}
    onFinished = {() => console.log("finished reading")}
    readeryConfig = { splitBy: /\r?\n/, encoding: "UTF-8" }
    chunkSize = {1024}
/>
```

All parameters are optional except text.

# Example usage
See [deaddesk.top/react-file-load](https://deaddesk.top/react-file-load) 

# Compatibility
* browser with FileReader compatibility IE11 => 11, for details see https://caniuse.com/#search=FileReader
* react "^15.3.0 || ^16.0.0" and prop-type "^15.0.0" as peer dependencies

# Licensing
The code in this project is licensed under MIT license.