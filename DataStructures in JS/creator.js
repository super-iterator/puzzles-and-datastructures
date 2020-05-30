var fs = require('fs');

/**
 * Splits whole path into segments and checks each segment for existence and recreates directory tree from the bottom.
 * If since some segment tree doesn't exist it will be created in series.
 * -->  Existing directories will be skipped.
 * Ref: https://gist.github.com/bpedro/742162
 * @param {String} directory
 */

function mkdirSync(directory) {
    var path = directory.replace(/\/$/, '').split('/');

    for (var i = 1; i <= path.length; i++) {
        var segment = path.slice(0, i).join('/');
        !fs.existsSync(segment) ? fs.mkdirSync(segment) : null
    }
}

// mkdirSync('hi/there/no/way/thanks.txt')
//
// > path.basename('hi/there/thank/you/me.csv')
// 'me.csv'
// > path.basename('hi/there/thank/you/me')
// 'me'
// > path.dirname('hi/there/thank/you/me')
// 'hi/there/thank/you'
