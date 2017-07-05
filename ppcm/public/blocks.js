Blockly.Blocks['est_pgcd_par'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("chercheur_PGCD");
    this.appendValueInput("nb1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("numero1");
    this.appendValueInput("nb2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("numero2");
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('fonction de PGCD');
    this.setHelpUrl('');
  }
};

Blockly.Python['est_pgcd_par'] = function(block) {
  var value_nb1 = Blockly.Python.valueToCode(block, 'nb1', Blockly.Python.ORDER_ATOMIC);
  var value_nb2 = Blockly.Python.valueToCode(block, 'nb2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pgcd('+value_nb1+',' + value_nb2 +') \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
