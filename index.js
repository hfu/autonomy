const config = require('config')

const urls = config.get('urls')

const downstream = process.stdout

for (const url of urls) {
  console.log(url)
}

