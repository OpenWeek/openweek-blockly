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

Blockly.Blocks['foreach3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Á chaque carte z");
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
  
  Blockly.Python['foreach3'] = function(block) {
    var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
  var code = 'for z in range(0,len('+value_list+')):\n' + statements_name + '\n';
      return code;
  };
  Blockly.Blocks['inserer'] = {
    init: function() {
      this.appendValueInput("X_IN")
          .setCheck("Number")
          .appendField("insérer la carte ");
      this.appendValueInput("Y_IN")
          .setCheck("Number")
          .appendField("avant la carte");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Python['inserer'] = function(block) {
    var value_x_in = Blockly.Python.valueToCode(block, 'X_IN', Blockly.Python.ORDER_ATOMIC);
    var value_y_in = Blockly.Python.valueToCode(block, 'Y_IN', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = 'temp = paquet['+value_x_in+']\n'+
               'del paquet['+value_x_in+']\n'+
               'paquet.insert('+value_y_in+', temp)\n'
               
    return code;
  };

