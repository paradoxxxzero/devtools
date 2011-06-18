var chars = [];

for (var i = 0 ; i < 256 ; i++) {
    chars[String.fromCharCode(i)] = i;
}


function toBinary(s) {
    var bs = "";
    for (var ci in s) {
        var c = s[ci];
        bs += " " + Number(chars[c]).toString(2);
    }
    return bs.trim();
}

function toStr(s) {
    var bs = "";
    var bins = s.trim().split(" ");
    for (var i = 0; i < bins.length; i++) {
        bs += String.fromCharCode(parseInt(bins[i], 2));
    }
    return bs;
}
