var RandomNumber = require('./random-number');
var Cache = require('./cache');
var randomNum = new RandomNumber();
var cache = new Cache({ key: 'above-50' });

randomNum.on('data', function(chunk) {
    console.log(chunk.toString());
});

randomNum.pipe(cache);

cache.on('finish', function() {
    console.log('cache store:', Cache.store);
});
