"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sets = [
    { to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]' },
    { to: 'c', from: '[ÇĆĈČ]' },
    { to: 'd', from: '[ÐĎĐÞ]' },
    { to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]' },
    { to: 'g', from: '[ĜĞĢǴ]' },
    { to: 'h', from: '[ĤḦ]' },
    { to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]' },
    { to: 'j', from: '[Ĵ]' },
    { to: 'ij', from: '[Ĳ]' },
    { to: 'k', from: '[Ķ]' },
    { to: 'l', from: '[ĹĻĽŁ]' },
    { to: 'm', from: '[Ḿ]' },
    { to: 'n', from: '[ÑŃŅŇ]' },
    { to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]' },
    { to: 'oe', from: '[Œ]' },
    { to: 'p', from: '[ṕ]' },
    { to: 'r', from: '[ŔŖŘ]' },
    { to: 's', from: '[ßŚŜŞŠ]' },
    { to: 't', from: '[ŢŤ]' },
    { to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯμ]' },
    { to: 'w', from: '[ẂŴẀẄ]' },
    { to: 'x', from: '[ẍ]' },
    { to: 'y', from: '[ÝŶŸỲỴỶỸ]' },
    { to: 'z', from: '[ŹŻŽ]' },
    { to: '-', from: "[·/_,:;']" }
];
var whiteSpaces = /\s+/g;
var ampersand = /&/g;
var nonWordsAndNumbers = /[^a-zA-Z0-9 ]/g;
var replaceMultipleHyphen = /\--+/g;
function slugify(text) {
    if (text === null || text === undefined) {
        return '';
    }
    // Replace all characters from our set
    sets.forEach(function (set) {
        text = text.replace(new RegExp(set.from, 'gi'), set.to);
    });
    return text
        .toString()
        .toLowerCase()
        .replace(whiteSpaces, '_')
        .replace(ampersand, '-and-')
        .replace(nonWordsAndNumbers, '')
        .replace(replaceMultipleHyphen, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
exports.slugify = slugify;
