const sharp = require('sharp')

sharp('./imagen-js.png')
  .resize(60)
  .grayscale()
  .toFile('resized.png');