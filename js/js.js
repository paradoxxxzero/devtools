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
var keyCount = 0;

$(document).ready(function(){
    $("#accordion").accordion({
	collapsible: true,
	animated: 'bounceslide',
	autoHeight: false,
	navigation: true,
	
	active: false
    });
    $('.accordion-title').click(function(event){
	window.location.hash=this.hash;
    });
    $("#email").html("<a href='mai" + "" + "lto: paradoxxx.zero+dt" + "" + "@gm" + "ail.co" + "m'> paradoxxx.zero" + "@g" + "ma" + "i" + "" +"l.c" + "om</a>");
    initKeyEvents();
    initRegexEvents();
    initConverterEvents();
    initHashEvents();
});
