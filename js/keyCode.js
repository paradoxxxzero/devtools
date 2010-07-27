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
function initKeyEvents() {
    $(document).keypress(function(event) {
	var keypressed = "<div id='kp" + ++keyCount + "' class='keypressed'>";
	keypressed += "<div id='kpc" + keyCount + "' class='keycode'>";
	keypressed += "Key [" + String.fromCharCode(event.keyCode) + "] code: " + event.keyCode + " press";
	keypressed += "</div>";
	if(event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
	    keypressed += "<div id='modifier" + keyCount + "' class='modifier'>";
	    keypressed += event.ctrlKey ? "[Ctrl] " : "";
	    keypressed += event.altKey ? "[Alt] " : "";
	    keypressed += event.shiftKey ? "[Shift] " : "";
	    keypressed += event.metaKey ? "[Meta] " : "";
	    keypressed += "</div>";
	}
	keypressed += "</div>";
	$("#keyspressed").prepend(keypressed);

	$("#kp" + keyCount).hide(); 
	$("#kp" + keyCount).show("slow"); 
    });
    $(document).keydown(function(event) {
	var keypressed = "<div id='kd" + ++keyCount + "' class='keypressed'>";
	keypressed += "<div id='kdc" + keyCount + "' class='keycode'>";
	keypressed += "Key [" + String.fromCharCode(event.keyCode) + "] code: " + event.keyCode + " down";
	keypressed += "</div>";
	if(event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
	    keypressed += "<div id='modifier" + keyCount + "' class='modifier'>";
	    keypressed += event.ctrlKey ? "[Ctrl] " : "";
	    keypressed += event.altKey ? "[Alt] " : "";
	    keypressed += event.shiftKey ? "[Shift] " : "";
	    keypressed += event.metaKey ? "[Meta] " : "";
	    keypressed += "</div>";
	}
	keypressed += "</div>";
	$("#keyspressed").prepend(keypressed);

	$("#kd" + keyCount).hide(); 
	$("#kd" + keyCount).show("slow"); 
    });
    $(document).keyup(function(event) {
	var keypressed = "<div id='ku" + ++keyCount + "' class='keypressed'>";
	keypressed += "<div id='kuc" + keyCount + "' class='keycode'>";
	keypressed += "Key [" + String.fromCharCode(event.keyCode) + "] code: " + event.keyCode + " up";
	keypressed += "</div>";
	if(event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
	    keypressed += "<div id='modifier" + keyCount + "' class='modifier'>";
	    keypressed += event.ctrlKey ? "[Ctrl] " : "";
	    keypressed += event.altKey ? "[Alt] " : "";
	    keypressed += event.shiftKey ? "[Shift] " : "";
	    keypressed += event.metaKey ? "[Meta] " : "";
	    keypressed += "</div>";
	}
	keypressed += "</div>";
	$("#keyspressed").prepend(keypressed);

	$("#ku" + keyCount).hide(); 
	$("#ku" + keyCount).show("slow"); 
    });
}
