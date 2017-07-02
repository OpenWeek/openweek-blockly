Blockly.Blocks['manger'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("Manger");
    this.setColour(230);
    this.setTooltip('Mange');
    this.setHelpUrl('e');
  }
};

Blockly.Blocks['dormir'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("Dormir");
    this.setColour(230);
    this.setTooltip('Dormir');
    this.setHelpUrl('url');
  }
};

Blockly.Blocks['fatigue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poupi est fatigué");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('Signifie que Poupi est fatigué');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['tantque'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("Tant que");
    this.appendStatementInput("statement")
        .setCheck(null)
        .appendField("");
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['tantque'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'statement');
  // TODO: Assemble Python into code variable.
  var code = 'while' + value_condition + ':\n' + statements_name + '\n';
  return code;
};
Blockly.Python['tantque'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements= Blockly.Python.statementToCode(block, 'statement');
  // TODO: Assemble Python into code variable.
  var code = 'for i in ' + value_condition + ':\n' + statements + '\n';
  return code;
};

Blockly.Python['manger'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'eat()\n';
  return code;
};

Blockly.Python['dormir'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sleep()\n';
  return code;
};

Blockly.Python['fatigue'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'tired()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
