String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.pad = function(options) {
  var dir     = options.dir || 'right';
  var padChar = options.padChar || ' ';
  var len     = options.len || options;
  var newStr  = this;

  while (newStr.length < len) {
    if (dir == 'right') { newStr += padChar; }
    else { newStr = padChar + newStr; }
  }

  return newStr;
}