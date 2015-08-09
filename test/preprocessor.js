var ReactTools = require('react-tools'),
  babel = require('babel-core');
module.exports = {
  process: function (src, filename) {
    var stage = 2;
    // return ReactTools.transform(src);
    if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      return babel.transform(src, {filename: filename, stage: stage, retainLines: true}).code;
    }
    return src;
  }
}