/*
#  Copyright (c)  2017 Brandon Naitali
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU Affero General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU Affero General Public License for more details.
#
#  You should have received a copy of the GNU Affero General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

Blockly.Blocks['append'] = {
  init: function() {
    this.appendValueInput("LIST1")
        .setCheck("Array")
        .appendField("Liste 1");
    this.appendValueInput("LIST2")
        .setCheck("Array")
        .appendField("Liste 2");
    this.setOutput(true, "Array");
    this.setColour(260);
 this.setTooltip("Renvoie la concaténation des deux listes passées en argument ");
 this.setHelpUrl("");
  }
};

Blockly.Python['append'] = function(block) {
  var value_list1 = Blockly.Python.valueToCode(block, 'LIST1', Blockly.Python.ORDER_ATOMIC);
  var value_list2 = Blockly.Python.valueToCode(block, 'LIST2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return (value_list1 + value_list2)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['append'] = function(block) {
  var value_list1 = Blockly.JavaScript.valueToCode(block, 'LIST1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_list2 = Blockly.JavaScript.valueToCode(block, 'LIST2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'return value_list1.concat(value_list2);';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};