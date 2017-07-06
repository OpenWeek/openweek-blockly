/*
    This file is part of INGInious.
    Copyright (C) 2017, Duchêne François et Raquet Damien
*/
/*
  Définitions des blocs
*/
Blockly.Blocks['confisquation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maman confisque le téléphone");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['glace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maman offre une glace");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['content'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Maman est contente");
    this.setPreviousStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['points'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("points");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('Les points que Michel reçoit');
    this.setHelpUrl('');
  }
};

/*
  Actions des blocs
*/

Blockly.Python['confisquation'] = function(block) {
  var code = 'confisquer()\n';
  return code;
};

Blockly.Python['glace'] = function(block) {
  var code = 'donner_glace()\n';
  return code;
};

Blockly.Python['content'] = function(block) {
  var code = 'maman_contente()\n';
  return code;
}

Blockly.Python['points'] = function(block) {
  var code = 'point()';
  return [code, Blockly.Python.ORDER_NONE];
}
