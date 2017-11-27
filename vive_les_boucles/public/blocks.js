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

Blockly.Blocks['id1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Imprimer");
    this.appendValueInput("n")
        .setCheck("Number")
        .appendField("nombre");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['id1'] = function(block) {
  var value_n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'papier = papier + str(' + value_n + ')\n';
  return code;
};

Blockly.Blocks['id2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Imprimer un espace");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['id2'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "papier = papier + ' '\n";
  return code;
};