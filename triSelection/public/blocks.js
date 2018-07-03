'use strict';

Blockly.Blocks['custom_swap'] = {
  init: function() {
    this.jsonInit({
		  "type": "custom_swap",
		  "message0": "echanger les cases %1 %2 et %3 %4 du tableau %5 %6",
		  "args0": [
		    {
		      "type": "input_dummy"
		    },
		    {
		      "type": "input_value",
		      "name": "pos1",
		      "check": "Number"
		    },
		    {
		      "type": "input_dummy"
		    },
		    {
		      "type": "input_value",
		      "name": "pos2",
		      "check": "Number"
		    },
		    {
		      "type": "input_dummy"
		    },
		    {
		      "type": "input_value",
		      "name": "tab",
		      "check": "Array"
		    }
		  ],
		  "inputsInline": true,
		  "previousStatement": null,
		  "nextStatement": null,
		  "colour": 330,
		  "tooltip": "Echanger deux cases du tableau",
		  "helpUrl": ""
    });
  }
};

Blockly.Python['custom_swap'] = function(block) {
  var value_pos1 = Blockly.Python.valueToCode(block, 'pos1', Blockly.Python.ORDER_ATOMIC);
  var value_pos2 = Blockly.Python.valueToCode(block, 'pos2', Blockly.Python.ORDER_ATOMIC);
  var value_tab = Blockly.Python.valueToCode(block, 'tab', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'temp=tab[int('+value_pos1+ '-1)] \ntab[int('+value_pos1+'-1)]=tab[int('+value_pos2+'-1)] \ntab[int('+value_pos2+'-1)] = temp \n';
  return code;
};

Blockly.Blocks['custom_for'] = {
  init: function() {
    this.jsonInit({
		  "type": "custom_for",
		  "message0": "pour %1 %2 allant de %3 a %4 %5",
		  "args0": [
		    {
		      "type": "field_variable",
		      "name": "VAR",
		      "variable": "i"
		    },
		    {
		      "type": "input_dummy"
		    },
		    {
		      "type": "input_value",
		      "name": "MIN",
		      "check": "Number"
		    },
		    {
		      "type": "input_value",
		      "name": "MAX",
		      "check": "Number"
		    },
		    {
		      "type": "input_statement",
		      "name": "STAT"
		    }
		  ],
		  "inputsInline": true,
		  "previousStatement": null,
		  "nextStatement": null,
		  "colour": 230,
		  "tooltip": "",
		  "helpUrl": "Boucle sur la variable de x à y (compris) "
		});
	}
};

Blockly.Python['custom_for'] = function(block) {
  var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_min = Blockly.Python.valueToCode(block, 'MIN', Blockly.Python.ORDER_ATOMIC);
  var value_max = Blockly.Python.valueToCode(block, 'MAX', Blockly.Python.ORDER_ATOMIC);
  var statements_stat = Blockly.Python.statementToCode(block, 'STAT');
  var code = 'for '+variable_var+' in range('+value_min+', '+value_max+'):\n'+statements_stat;
  return code;
};