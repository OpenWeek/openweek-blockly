Blockly.Blocks['tant_que'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tant que");
    this.appendValueInput("condition")
        .setCheck(null);
    this.appendStatementInput("statement")
        .setCheck("Boolean")
        .appendField("faire");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(330);
    this.setTooltip('boucle');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['le_minimum'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("le minimum vaut");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('la valeur minimum');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['compare_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("l element de la liste est plus petit que le minimum actuel");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('comparaison de deux valeurs');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['liste'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il y a des elements dans la liste");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('variable liste');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actual_liste'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("l element plus petit que le minimum actuel");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip('variable liste');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['init_minimum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("initialisation du minimum");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('fixe la variable minimum');
    this.setHelpUrl('');
  }
};


Blockly.Python['tant_que'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'statement');
  // TODO: Assemble Python into code variable.
  var code = 'for i in '+ value_condition + ':\n' + statements_statement + '\n';
  return code;
};

Blockly.Python['le_minimum'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'minim = '+ value_name;
  return code;
};

Blockly.Python['compare_to'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'minim > i';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['liste'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'liste';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['actual_liste'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'i';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['init_minimum'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'minim = liste[1]\n';
  return code;
};
