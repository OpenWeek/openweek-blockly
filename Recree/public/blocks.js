Blockly.Blocks['aller_en_classe'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("aller en classe");
    this.setColour(260);
    this.setTooltip('Une fois qu\'on est allé en classe, on ne revient plus');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['aller_cour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("aller dans la cour");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('On doit sortir');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['il_sonne'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il sonne");
    this.setOutput(true, "Boolean");
    this.setColour(260);
    this.setTooltip('La cloche sonne');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dans_classe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Damien est en classe");
    this.setOutput(true, "Boolean");
    this.setColour(260);
    this.setTooltip('Il se trouve en classe');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['dans_cour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Damien est dans la cour");
    this.setOutput(true, "Boolean");
    this.setColour(260);
    this.setTooltip('Il se trouve dans la cour de récréation');
    this.setHelpUrl('');
  }
};

Blockly.Python['aller_en_classe'] = function(block) {
  var code = 'classe()\n';
  return code;
};

Blockly.Python['aller_cour'] = function(block) {
  var code = 'cour()\n';
  return code;
};

Blockly.Python['il_sonne'] = function(block) {
  var code = 'sonnerie()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dans_classe'] = function(block) {
  var code = 'dans_classe()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dans_cour'] = function(block) {
  var code = 'dans_cour()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
