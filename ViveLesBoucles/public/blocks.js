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
    this.setTooltip('bla');
    this.setHelpUrl('');
  }
};

Blockly.Python['id2'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "papier = papier + ' '\n";
  return code;
};