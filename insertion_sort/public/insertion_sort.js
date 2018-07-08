/*
*  Copyright (c)  2018 Ilias Boutchichi
*  This program is free software: you can redistribute it and/or modify
*  it under the terms of the GNU Affero General Public License as published by
*  the Free Software Foundation, either version 3 of the License, or
*  (at your option) any later version.
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU Affero General Public License for more details.
*
*  You should have received a copy of the GNU Affero General Public License
*  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
* @author Ilias Boutchichi
*/

'use strict'; //more secure

var TEXT = 0, RECT = 1, INDEX = 2, VALUE = 3, RECT_HEIGHT = 70;

var Insertion = {};
Insertion.animations = [];

Insertion.getCaseList = function() {
  return Insertion.list;
}

Insertion.init = function() {
  if (typeof Blockly === "undefined" || typeof Blockly.getMainWorkspace() === "undefined" || Blockly.getMainWorkspace() === null) {
    console.warn("Insertion.init() called but Blockly or workspace was not loaded.");
    window.setTimeout(Insertion.init, 20);
    return;
  }
  var svg = document.getElementById('blocklySvgZone');
  svg.setAttribute('style', '');
  svg.setAttribute('viewBox', '0, 0, 400, 700');
  svg.setAttribute('xmlns:xhtml', 'http://www.w3.org/1999/xhtml');

  Insertion.case = [];
  Insertion.list = Lst.liste;//Insertion.get_list();

  var svg = SVG('blocklySvgZone').size('100%', '100%');
  Insertion.list.forEach(function(item, index, array) {
    var text = svg.text('' + item).font({ fill: 'black', family: 'Inconsolata', size:50}).move(0, index*RECT_HEIGHT);
    var rect = svg.rect(120,RECT_HEIGHT).fill('none').stroke({width:4,color:'black'}).move(0,RECT_HEIGHT*index);
    Insertion.case.push([text,rect,index,item]);
  });
  Insertion.reset();
};

Insertion.reset = function() {
  for(var x=0; x < Insertion.animations.length; x++){
    Insertion.animations[x][TEXT].stop();
    Insertion.animations[x][RECT].stop();
    clearTimeout(Insertion.animations[x]);
  }
  Insertion.case.forEach(function(item, index, array) {
    item[TEXT].stroke('black').move(0,index*RECT_HEIGHT);
    item[RECT].stroke('black').move(0,index*RECT_HEIGHT);
  });
  //Insertion.display();
  //Insertion.animate();
  //Insertion.insertion_sort();
};

Insertion.animate = function() {
  var animid = 0;
  while(Insertion.animations.length){
    setTimeout(Insertion.animations.shift(), ++animid*500);
  }
};

Insertion.changeColor = function(color, rect) {
  return function() {
    rect.animate(500, '<>').stroke(color);
  };
};

Insertion.dmove = function(x,y,elem) {
  return function() {
    elem[TEXT].animate(500, '<>').dmove(x,y);
    elem[RECT].animate(500, '<>').dmove(x,y);
  };
};

Insertion.insertion_sort = function() {
  var A = Insertion.case;
  var n = A.length;
  for(var i = 1; i < n; i++){
    var tmp = A[i];
    var dy = 0
    Insertion.animations.push(Insertion.changeColor('red', tmp[RECT]));
    Insertion.animations.push(Insertion.dmove(250, 0, tmp));
    var j = i-1;
    for (; j>=0 && A[j][VALUE] > tmp[VALUE]; j--) {
      Insertion.animations.push(Insertion.dmove(0, RECT_HEIGHT, A[j]));
      dy += RECT_HEIGHT;
      A[j+1] = A[j];
      A[j+1][INDEX] = j+1;
    }
    Insertion.animations.push(Insertion.dmove(0, -dy, tmp));
    Insertion.animations.push(Insertion.dmove(-250, 0, tmp));
    Insertion.animations.push(Insertion.changeColor('black', tmp[RECT]));
    A[j+1] = tmp;
    A[j+1][INDEX] = j+1;
  }
  Insertion.animate();
};

if (document.getElementById('blocklySvgZone') != null) {
  window.addEventListener('load', Insertion.init);
} else {
  console.warn('Cannot find blocklySvgZone element.');
}
