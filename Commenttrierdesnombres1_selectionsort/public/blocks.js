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


Blockly.Blocks['swap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("échanger la carte");
    this.appendValueInput("value1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("et la carte");
    this.appendValueInput("value2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('Echanger les deux cartes');
    this.setHelpUrl('');
  }
};
Blockly.Python['swap'] = function(block) {
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'temp=paquet['+value_value1+']\npaquet['+value_value1+']=paquet['+value_value2+']\npaquet[' +value_value2+']=temp\n';
  return code;
};


Blockly.Blocks['condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Si la carte");
    this.appendValueInput("first")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("est plus petite que la carte");
    this.appendValueInput("second")
        .setCheck(null);
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['condition'] = function(block) {
  var value_first = Blockly.Python.valueToCode(block, 'first', Blockly.Python.ORDER_ATOMIC);
  var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'statement');
  // TODO: Assemble Python into code variable.
  var code = 'if(paquet['+value_first+']<paquet['+value_second+']):\n'+statements_statement;
    return code;
};




Blockly.Blocks['foreach2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Á chaque carte y dans la suite du ");
    this.appendValueInput("list")
        .setCheck("List");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Prendre les carte une par une');
    this.setHelpUrl('');
  }
};

Blockly.Python['foreach2'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'for y in range(x,len('+value_list+')):\n' + statements_name + '\n';
  return code;
};



Blockly.Blocks['foreach'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Á chaque carte x");
    this.appendDummyInput()
        .appendField("dans le ");
    this.appendValueInput("list")
        .setCheck("List");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(90);
    this.setTooltip('Prendre les cartes une par une');
    this.setHelpUrl('');
  }
};

Blockly.Python['foreach'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
var code = 'for x in range(0,len('+value_list+')):\n' + statements_name + '\n';
    return code;
};

