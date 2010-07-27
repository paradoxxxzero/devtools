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
var hash = function(event) {
    if($("#hashArea").val() != '') {
	$("#md5").text($("#hashArea").crypt({ method:"md5" }));
	$("#sha1").text($("#hashArea").crypt({ method:"sha1" }));
	$("#sha256").text($.sha256($("#hashArea").val()));
    } else {
	$("#md5").text('');
	$("#sha1").text('');
	$("#sha256").text('');
    }
};
function initHashEvents() {
    $("#hashArea").keyup(hash);
    $("#hashArea").mouseup(hash);
}
