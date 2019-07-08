const fs = require('fs');

const hash = new Date().getTime();

fs.renameSync('./public/bundle.js', './public/bundle-' + hash + '.js');
fs.renameSync('./public/bundle.css', '../public/bundle-' + hash + '.css');
fs.renameSync('./public/bundle.js.map', '../public/bundle-' + hash + '.js.map');
fs.renameSync('./public/bundle.css.map', '../public/bundle-' + hash + '.css.map');

fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace('bundle.js', 'bundle-' + hash + '.js');
    result = data.replace('bundle.css', 'bundle-' + hash + '.css');

    fs.writeFile('./public/index.html', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});
