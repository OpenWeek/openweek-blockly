/*
    Copyright (C) 2017, Duchêne François et Raquet Damien

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
/*
  Définitions des blocs
*/
Blockly.Blocks['confisquation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maman confisque le téléphone");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['glace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maman offre une glace");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['content'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maman est contente");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['points'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("points");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('Les points que Michel reçoit');
    this.setHelpUrl('');
  }
};

/*
  Actions des blocs
*/

Blockly.Python['confisquation'] = function(block) {
  var code = 'confisquer()\n';
  return code;
};

Blockly.Python['glace'] = function(block) {
  var code = 'donner_glace()\n';
  return code;
};

Blockly.Python['content'] = function(block) {
  var code = 'maman_contente()\n';
  return code;
}

Blockly.Python['points'] = function(block) {
  var code = 'point()';
  return [code, Blockly.Python.ORDER_NONE];
}
