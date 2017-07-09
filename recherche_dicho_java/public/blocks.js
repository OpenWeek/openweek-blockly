Blockly.Python['mot'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mot';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['mot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("String mot");
    
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Python['dico'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'dictionnaire';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['dico'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("List < String > dictionnaire");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['rec2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return binary_search(dictionnaire.subList(milieu+1,dictionnaire.size()),mot);");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['rec2'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return recherche_binaire([dictionnaire[index] for index in range(milieu,len(dictionnaire))],mot)\n';
  return code;
};

Blockly.Blocks['rec1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return binary_search(dictionnaire.subList(0,milieu),mot);");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['rec1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return recherche_binaire([dictionnaire[index] for index in range(0,milieu)],mot)\n';
  return code;
};








Blockly.Blocks['true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return true;");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['true'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return True\n';
  return code;
};



Blockly.Blocks['apres'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dictionnaire.get(milieu).compareTo(mot)<0");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['apres'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mot>dictionnaire[milieu]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['avant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dictionnaire.get(milieu).compareTo(mot)>0");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['avant'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mot<dictionnaire[milieu]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['egal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dictionnaire.get(milieu).compareTo(mot)==0");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['egal'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mot==dictionnaire[milieu]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Blocks['milieu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("int milieu=(int) Math.ceil(dictionnaire.size()/2);");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['milieu'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'milieu= int(len(dictionnaire)/2)\n';
  return code;
};

Blockly.Blocks['vide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dictionnaire.isEmpty()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['vide'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'len(dictionnaire)==1 and mot!=dictionnaire[0]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
    
    
Blockly.Blocks['else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("else{");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['else'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'else:\n'+statements_name+'\n';
  return code;
};

Blockly.Blocks['false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return false;");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['false'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return False\n';
  return code;
};



Blockly.Blocks['casvide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if(");
    this.appendValueInput("condition")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("){");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['casvide'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'if('+value_condition+'):\n'+statements_name+'\n';
  return code;
};


Blockly.Blocks['signature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("public static boolean binary_search(");
    this.appendValueInput("dict")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("mot")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("){");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['signature'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict', Blockly.Python.ORDER_ATOMIC);
  var value_mot = Blockly.Python.valueToCode(block, 'mot', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'statement');
  // TODO: Assemble Python into code variable.
  var code = 'def recherche_binaire\('+value_dict+','+value_mot+'\):\n'+statements_statement;
  return code;
};





