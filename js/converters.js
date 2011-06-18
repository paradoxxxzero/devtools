/*
    devtools is a slick web development toolkit, available at devtools

    Copyright (C) 2011 Mounier Florian aka paradoxxxzero

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function b64enc( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64dec( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

var convertTo = function(event) {
    if($("#convertArea").val() != '') {
    $("#base64").val(b64enc($("#convertArea").val()));
    $("#binary").val(toBinary($("#convertArea").val()));
    $("#uri").val(encodeURI($("#convertArea").val()));
    $("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
    toVoid();
    }
};
var convertFromBase64 = function(event) {
    if($("#base64").val() != '') {
    $("#convertArea").val(b64dec($("#base64").val()));
    $("#binary").val(toBinary($("#convertArea").val()));
    $("#uri").val(encodeURI($("#convertArea").val()));
    $("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
    toVoid();
    }
};
var convertFromBinary = function(event) {
    if($("#binary").val() != '') {
    $("#convertArea").val(toStr($("#binary").val()));
    $("#base64").val(b64enc($("#convertArea").val()));
    $("#uri").val(encodeURI($("#convertArea").val()));
    $("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
    toVoid();
    }
};
var convertFromUri = function(event) {
    if($("#uri").val() != '') {
    $("#convertArea").val(decodeURI($("#uri").val()));
    $("#binary").val(toBinary($("#convertArea").val()));
    $("#base64").val(b64enc($("#convertArea").val()));
    $("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
    toVoid();
    }
};
var convertFromPuny = function(event) {
    if($("#puny").val() != '') {
    $("#convertArea").val(punycode.decode($("#puny").val().replace("xn--", ""), true));
    $("#binary").val(toBinary($("#convertArea").val()));
    $("#base64").val(b64enc($("#convertArea").val()));
    $("#uri").val(encodeURI($("#convertArea").val()));
    } else {
    toVoid();
    }
};
function initConverterEvents() {
    $("#convertArea").keyup(convertTo);
    $("#convertArea").mouseup(convertTo);
    $("#base64").keyup(convertFromBase64);
    $("#base64").mouseup(convertFromBase64);
    $("#binary").keyup(convertFromBinary);
    $("#binary").mouseup(convertFromBinary);
    $("#uri").keyup(convertFromUri);
    $("#uri").mouseup(convertFromUri);
    $("#puny").keyup(convertFromPuny);
    $("#puny").mouseup(convertFromPuny);
}
function toVoid() {
    $("#convertArea").val('');
    $("#base64").val('');
    $("#binary").val('');
    $("#uri").val('');
    $("#puny").val('');
}
