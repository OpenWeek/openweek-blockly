//
//  Copyright (c)  2017 Olivier Martin
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.
//
//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

var Problem = {};
var size_rect = 50;
var padding = 2;
var margin = 22;
var problem_width = 6;
var problem_height = 4;
var txt_fix_x = 7;
var txt_fix_y = 34;
var font_size_coord = '26px';
var border2 = 362;

//clear the svg and redraw the base components
Problem.reset = function() {
    var svg = document.getElementById('blocklySvgZone');
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
	}
    Problem.draw()
}

Problem.place_orange = function(x, y, id) {
    Problem.draw_bloc_orange(x, 2+2*problem_height-y);
}

Problem.draw = function() {
    var svg = document.getElementById('blocklySvgZone');
    svg.setAttribute('viewBox', '0 0 380 850');
    svg.setAttribute('style', '');
	Problem.draw_borders(0,0);
   	Problem.draw_borders(0,border2);
    for (x = 0; x < problem_width; x++) {
        for (y = 0; y < problem_height; y++) {
            if (x==0 || x==problem_width-1 || y==0 || y==problem_height-1){
				Problem.draw_bloc_orange(x, y);
               Problem.draw_coord(x, y);
            }
        }
	} 
}

//Draw the background rect
Problem.draw_borders = function(x, y) {
    var svg = document.getElementById('blocklySvgZone');
	var square = document.createElementNS(Blockly.SVG_NS, 'rect');
    square.setAttribute('width', problem_width * (size_rect+padding) + 2*margin);
    square.setAttribute('height', problem_height * (size_rect+padding) + 2*margin);
    square.setAttribute('x', x);
    square.setAttribute('y', y);
    square.setAttribute('fill', '#FBE2E3');
    svg.appendChild(square);
}

//Draw the cood on each bloc
Problem.draw_coord = function(x,y) {
    var svg = document.getElementById('blocklySvgZone');
    var text = document.createElementNS(Blockly.SVG_NS, 'text');
	text.setAttribute('x', x*(size_rect+padding) + margin + txt_fix_x);
	text.setAttribute('y', y*(size_rect+padding) + margin + txt_fix_y);
	text.setAttribute('fill', '#000');
	text.setAttribute('font-size', font_size_coord);
	text.textContent = x + ',' + Math.abs(problem_height-1-y);
	svg.appendChild(text); 
}

Problem.draw_bloc_orange = function(x, y) {
    var svg = document.getElementById('blocklySvgZone');
	var square = document.createElementNS(Blockly.SVG_NS, 'rect');
    //square.setAttribute('id', 'r_' + x + '_' + y);
    square.setAttribute('width', size_rect);
    square.setAttribute('height', size_rect);
    square.setAttribute('x', x*(size_rect+padding) + margin);
    square.setAttribute('y', y*(size_rect+padding) + margin);
    square.setAttribute('fill', '#D05141');
    svg.appendChild(square);
}

Problem.init = function() {
    if (typeof Blockly.getMainWorkspace() === "undefined" || Blockly.getMainWorkspace() === null) {
        console.warn("Maze cannot be initialized because workspace is not loaded");
        return;
    }
    Problem.draw();
}

if (document.getElementById('blocklySvgZone') != null) {
    window.addEventListener('load', Problem.init);
} else {
    console.warn('Cannot find blocklySvgZone element.');
}

// TODO Change when reset is changed/fixed in INGInious
Maze = {}
Maze.reset = Problem.reset;