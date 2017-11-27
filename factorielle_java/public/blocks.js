
Blockly.Blocks['fonction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("public int fact(int a){");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendValueInput("retour")
        .setCheck(null)
        .appendField("return");
    this.appendDummyInput()
	.appendField("}")
    this.setColour(285);
    this.setInputsInline(false);
    this.setTooltip('public int fact(int a)');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField("if(");
    this.appendDummyInput()
	.appendField(")");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do {");
    this.appendDummyInput()
	.appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setColour(210);
    this.setTooltip('conditionnel');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['comparaison'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendValueInput("NAME2")
        .setCheck(null)
        .appendField(">");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('compare');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['parametre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("a");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip('a');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ziro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('0');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return -1;");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(285);
    this.setTooltip('return -1');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for(int i =");
    this.appendValueInput("compare")
        .setCheck(null);
    this.appendValueInput("cond")
        .setCheck(null)
        .appendField("; i<=");
    this.appendDummyInput()
        .appendField("; i++) {");
    this.appendStatementInput("name")
	.setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true,null);
    this.setColour(120);
    this.setTooltip('boucle for');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['result'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("resultat");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip('variable resulat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('1');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['equal'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("=");
    this.appendDummyInput()
	.appendField(";")
    this.setInputsInline(true);
    this.setPreviousStatement(true,null)
    this.setNextStatement(true,null)
    this.setColour(195);
    this.setTooltip('egalité');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mult'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck(null);
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("*");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('fois');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['inc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("i");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip('variable i');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['initi'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("int resultat =");
    this.appendDummyInput()
	.appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('initialisation de la variable resultat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fact (");
    this.appendValueInput("param")
	.setCheck(null);
    this.appendDummyInput()
	.appendField(")");
    this.setInputsInline(true);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Python['fonction'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  var value_retour = Blockly.Python.valueToCode(block, 'retour', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'public static int fact(int a) { \n'+ statements_name + ' return '+ value_retour + '; \n }';
	console.log("fonction", statements_name);
  return code;
};


Blockly.JavaScript['fonction'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var value_retour = Blockly.JavaScript.valueToCode(block, 'retour', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'function fact(a) { \n'+ statements_name + ' return '+ value_retour + '; \n }';
  return code;
};

Blockly.Python['if'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = 'if' + value_name + statements_do;
  return code;
};


Blockly.JavaScript['if'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = 'if' + value_name + statements_do;
  return code;
};

Blockly.Python['comparaison'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = '('+ value_name + ' >' + value_name2 + ') { \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['comparaison'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = '('+ value_name + ' >' + value_name2 + ') { \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['parametre'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'a';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['parametre'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'a';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['ziro'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['ziro'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['return'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return -1 ; \n }\n';
  return code;
};

Blockly.JavaScript['return'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return -1 ; \n }\n';
  return code;
};

Blockly.Python['for'] = function(block) {
  var value_compare = Blockly.Python.valueToCode(block, 'compare', Blockly.Python.ORDER_NONE);
  var value_cond = Blockly.Python.valueToCode(block, 'cond', Blockly.Python.ORDER_NONE);
  var statement = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'for(int i ='+ value_compare + ';i<='+ value_cond +';i++) {\n '+ statement +'} \n';
  return code;
};

Blockly.JavaScript['for'] = function(block) {
  var value_compare = Blockly.JavaScript.valueToCode(block, 'compare', Blockly.JavaScript.ORDER_NONE);
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_NONE);
  var statement = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'for(var i ='+ value_compare + ';i<='+ value_cond +';i++) {\n '+ statement +'} \n';
  return code;
};

Blockly.Python['result'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'resultat';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['result'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'resultat';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['_1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['_1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['equal'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_NONE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable
  var code = value_name1 + '='+ value_name +' \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['equal'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME1', Blockly.JavaScript.ORDER_NONE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble Python into code variable
  var code = value_name1 + '='+ value_name +' \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['mult'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'NAME1', Blockly.Python.ORDER_NONE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = value_name1 +'*'+ value_name + ';';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['mult'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME1', Blockly.JavaScript.ORDER_NONE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = value_name1 +'*'+ value_name + ';';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['inc'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'i';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['inc'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'i';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['initi'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'int resultat =' + value_name + ';\n';
  return code;
};

Blockly.JavaScript['initi'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'var resultat =' + value_name + ';\n';
  return code;
};

Blockly.JavaScript['test'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'param', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert(fact('+ value_name +'));\n';
  return code;
};
