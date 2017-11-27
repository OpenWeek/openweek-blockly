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

//Blocs actions
Blockly.Blocks['aller_en_classe'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("aller en classe");
    this.setColour(260);
    this.setTooltip('Une fois qu\'on est allé en classe, on ne revient plus');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['aller_cour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("aller dans la cour");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('On doit sortir');
    this.setHelpUrl('');
  }
};

//Blocs Conditions
Blockly.Blocks['il_sonne'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il sonne");
    this.setOutput(true, "Boolean");
    this.setColour(260);
    this.setTooltip('La cloche sonne');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dans_classe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Damien est en classe");
    this.setOutput(true, "Boolean");
    this.setColour(260);
    this.setTooltip('Il se trouve en classe');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dans_cour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Damien est dans la cour");
    this.setOutput(true, "Boolean");
    this.setColour(260);
    this.setTooltip('Il se trouve dans la cour de récréation');
    this.setHelpUrl('');
  }
};

/*
  Actions des blocs
*/

Blockly.Python['aller_en_classe'] = function(block) {
  var code = 'classe()\n';
  return code;
};

Blockly.Python['aller_cour'] = function(block) {
  var code = 'cour()\n';
  return code;
};

Blockly.Python['il_sonne'] = function(block) {
  var code = 'sonnerie()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dans_classe'] = function(block) {
  var code = 'dans_classe()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dans_cour'] = function(block) {
  var code = 'dans_cour()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
