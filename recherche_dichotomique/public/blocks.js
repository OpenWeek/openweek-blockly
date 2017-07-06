Blockly.Blocks['prendremoitie2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tout recommencer avec 2ème moitié");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['prendremoitie2'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return recherche_binaire([dictionnaire[index] for index in range(milieu,len(dictionnaire))],mot)\n';
  return code;
};


Blockly.Blocks['prendremoitie1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tout recommencer avec 1ère moitié");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['prendremoitie1'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return recherche_binaire([dictionnaire[index] for index in range(0,milieu)],mot)\n';
  return code;
};

Blockly.Blocks['conditionapres'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Si le mot se trouve après celui du milieu,");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['conditionapres'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'if(mot>dictionnaire[milieu]):\n '+ statements_name;
  return code;
};

Blockly.Blocks['conditionavant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Si le mot se trouve avant celui du milieu,");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['conditionavant'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'if(mot<dictionnaire[milieu]):\n '+ statements_name;
  return code;
};


Blockly.Blocks['conditiontrouve'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Si le milieu est le bon mot, alors trouvé!");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['conditiontrouve'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'if(mot==dictionnaire[milieu]):\n return True\n';
  return code;
};



Blockly.Blocks['milieu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Prendre le mot au milieu du dictionnaire");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }};

Blockly.Python['milieu'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'milieu= int(len(dictionnaire)/2)\n';
  return code;
};



Blockly.Blocks['else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sinon");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['else'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'else:\n'+statements_name;
  return code;
};

Blockly.Blocks['casfinal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S'il ne reste que le mot recherché, alors trouvé!");
    this.setInputsInline(true);
    this.setColour(180);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['casfinal'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'if(len(dictionnaire)==1 and mot==dictionnaire[0]):\n return True\n';
  return code;
};

Blockly.Blocks['casfinal2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Si plus de mot et pas trouvé, alors absent!");
    this.setInputsInline(true);
    this.setColour(180);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Python['casfinal2'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'if(len(dictionnaire)==1 and mot!=dictionnaire[0]):\n return False\n';
  return code;
};




