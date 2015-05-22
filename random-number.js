var stream = require('stream');

function RandomNumber(options) {
    stream.Readable.call(this, options);
    this._start = '0';
    this._end = '100';
    this._curr = this._start;
};
RandomNumber.prototype = Object.create(stream.Readable.prototype);
RandomNumber.prototype.constructor = stream.Readable;

RandomNumber.prototype._read = function() {
    var random = String(this._curr);
    var buf = new Buffer(random, 'ascii');
    this.push(buf);
    this._curr++;
    if (random === this._end) {
        this.push(null);
    }
};

module.exports = RandomNumber;
