const fs = require('fs');
const xml2js = require('xml2js');

const svgFilePath = './src/assets/fonts/smartos-v3.svg';
const outputFilePath = './src/assets/fonts/smartos-v3-glyphMap.json';

fs.readFile(svgFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading SVG file:', err);
    return;
  }

  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing SVG file:', err);
      return;
    }

    const glyphMap = {};
    const icons = result.svg.defs[0].font[0].glyph;

    icons.forEach((icon) => {
      const name = icon.$['glyph-name'];
      const unicode = icon.$.unicode.charCodeAt(0);
      glyphMap[name] = unicode;
    });

    fs.writeFile(outputFilePath, JSON.stringify(glyphMap, null, 2), (err) => {
      if (err) {
        console.error('Error writing glyphMap file:', err);
        return;
      }
      console.log('GlyphMap generated successfully:', outputFilePath);
    });
  });
});
