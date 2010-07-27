/*
    devtools.tk is a slick web development toolkit, available at devtools.tk

    Copyright (C) 2010 Mounier Florian aka paradoxxxzero

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
var convertTo = function(event) {
    if($("#convertArea").val() != '') {
	$("#base64").val($().crypt({ method:"b64enc", source: $("#convertArea").val() }));
	$("#xtea").val($().crypt({ method:"xteaenc", source: $("#convertArea").val() }));
	$("#uri").val(encodeURI($("#convertArea").val()));
	$("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
	toVoid();
    }
};
var convertFromBase64 = function(event) {
    if($("#base64").val() != '') {
	$("#convertArea").val($().crypt({ method:"b64dec", source: $("#base64").val() }));
	$("#xtea").val($().crypt({ method:"xteaenc", source: $("#convertArea").val() }));
	$("#uri").val(encodeURI($("#convertArea").val()));
	$("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
	toVoid();
    }
};
var convertFromXtea = function(event) {
    if($("#xtea").val() != '') {
	$("#convertArea").val($().crypt({ method:"xteadec", source: $("#xtea").val() }));
	$("#base64").val($().crypt({ method:"b64enc", source: $("#convertArea").val() }));
	$("#uri").val(encodeURI($("#convertArea").val()));
	$("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
	toVoid();
    }
};
var convertFromUri = function(event) {
    if($("#uri").val() != '') {
	$("#convertArea").val(decodeURI($("#uri").val()));
	$("#xtea").val($().crypt({ method:"xteaenc", source: $("#convertArea").val() }));
	$("#base64").val($().crypt({ method:"b64enc", source: $("#convertArea").val() }));
	$("#puny").val('xn--' + punycode.encode($("#convertArea").val(), true));
    } else {
	toVoid();
    }
};
var convertFromPuny = function(event) {
    if($("#puny").val() != '') {
	$("#convertArea").val(punycode.decode($("#puny").val().replace("xn--", ""), true));
	$("#xtea").val($().crypt({ method:"xteaenc", source: $("#convertArea").val() }));
	$("#base64").val($().crypt({ method:"b64enc", source: $("#convertArea").val() }));
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
    $("#xtea").keyup(convertFromXtea);
    $("#xtea").mouseup(convertFromXtea);
    $("#uri").keyup(convertFromUri);
    $("#uri").mouseup(convertFromUri);
    $("#puny").keyup(convertFromPuny);
    $("#puny").mouseup(convertFromPuny);
}
function toVoid() {
    $("#convertArea").val('');
    $("#base64").val('');
    $("#xtea").val('');
    $("#uri").val('');
    $("#puny").val('');
}
