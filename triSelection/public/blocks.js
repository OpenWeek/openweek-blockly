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
  var code = 'temp=tab[int('+value_pos1+ '-1)] \ntab[int('+value_pos1+'-1)]=tab[int('+value_pos2+'-1)] \ntab[int('+value_pos2+'-1)] = temp \n';
  return code;
};
