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
var inError = false;
var originalColor = '#d9d9d9';
var updateRegex = function () {
    try {
	var regex = new RegExp('(' + $("#regex").val() + ')', $("#modifier").val());
	var test = $("#test4regex").val();
	if(test.match(regex)) {
	    $("#unknown-matching").hide();
	    $("#not-matching").hide();
	    $("#matching").fadeIn('slow');  
	} else {
	    $("#unknown-matching").hide();
	    $("#not-matching").fadeIn('slow');
	    $("#matching").hide();   
	} 
	test = test.replace(regex, '<span class="match">' + ($("#replacement").val() == '' ? '$1' : $("#replacement").val()) + '</span>');
	test = test.replace(/\n/g, "<br />");
	$("#regexResults").html(test);
	if(inError) {
	    $("#regex").animate({ color: originalColor });
	    inError = false;
	}
    } catch (err) {
	console.log(err);
	if(!inError) {
	    $("#regex").animate({ color: '#f00' });
	    $("#not-matching").hide();
	    $("#matching").hide();
	    $("#unknown-matching").fadeIn('slow');  
	    inError = true;
	}
	$("#regexResults").html(""+err);
    }
}
function initRegexEvents() {
    $("#not-matching").hide()
    $("#matching").hide();

    $("#regex").change(updateRegex);
    $("#regex").keyup(updateRegex);
    $("#test4regex").change(updateRegex);
    $("#test4regex").keyup(updateRegex);
    $("#replacement").change(updateRegex);
    $("#replacement").keyup(updateRegex);
    $("#modifier").change(updateRegex);
    $("#modifier").keyup(updateRegex);
}
