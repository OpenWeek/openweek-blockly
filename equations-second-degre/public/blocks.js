var task_directory_path = "/course/" + course + "/" + taskid + "/";
Blockly.Blocks['reels'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://wikimedia.org/api/rest_v1/media/math/render/svg/786849c765da7a84dbc3cce43e96aad58a5868dc", 15, 19, "Ensemble des réels"))
        .appendField("Ensemble des réels");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('Ensemble des réels');
    this.setHelpUrl('https://fr.wikipedia.org/wiki/Nombre_r%C3%A9el');
  }
};

Blockly.Blocks['ensemble_vide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://wikimedia.org/api/rest_v1/media/math/render/svg/00595c5e33692e724937fdcc8870496acce1ac74", 15, 19, "Ensemble vide"))
        .appendField("Ensemble vide");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('Ensemble vide');
    this.setHelpUrl('https://fr.wikipedia.org/wiki/Ensemble_vide');
  }
};

var delta_image = task_directory_path + 'formules/delta.png';
Blockly.Blocks['delta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(delta_image, 100, 20, "b^2 - 4ac"));
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('delta');
    this.setHelpUrl('');
  }
};

var delta0_image = task_directory_path + 'formules/delta0.png';
Blockly.Blocks['delta0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(delta0_image, 30, 50, "b/2a"));
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('delta0');
    this.setHelpUrl('');
  }
};

var x1_image = task_directory_path + 'formules/x1.png';
Blockly.Blocks['x1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(x1_image, 100, 50, "(-b-sqrt(delta))/2a"));
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('x1');
    this.setHelpUrl('');
  }
};

var x2_image = task_directory_path + 'formules/x2.png';
Blockly.Blocks['x2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(x2_image, 100, 50, "(-b+sqrt(delta))/2a"));
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('x2');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['solutions'] = {
  init: function() {
    this.appendValueInput("solution")
        .setCheck(null)
        .appendField("fixer")
        .appendField(new Blockly.FieldVariable("solution"), "solution")
        .appendField("à");
    this.appendValueInput("solution_2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("et fixer")
        .appendField(new Blockly.FieldVariable("solution_2"), "solution_2")
        .appendField("à");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('Ensemble des réels');
    this.setHelpUrl('https://fr.wikipedia.org/wiki/Nombre_r%C3%A9el');
  }
};

Blockly.Python['reels'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\'ensemble des réels\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ensemble_vide'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '\'ensemble vide\'';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['delta'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'b ** 2 - 4 * (a * c)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['delta0'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '-b / (2*a)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['x1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(-b - math.sqrt(delta)) / (2 * a)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['x2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(-b + math.sqrt(delta)) / (2 * a)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['solutions'] = function(block) {
  //var variable_solution = Blockly.Python.variableDB_.getName(block.getFieldValue('solution'), Blockly.Variables.NAME_TYPE);
  var value_solution = Blockly.Python.valueToCode(block, 'solution', Blockly.Python.ORDER_NONE);
  //var variable_solution_2 = Blockly.Python.variableDB_.getName(block.getFieldValue('solution_2'), Blockly.Variables.NAME_TYPE);
  var value_solution_2 = Blockly.Python.valueToCode(block, 'solution_2', Blockly.Python.ORDER_NONE);
  // TODO: Assemble Python into code variable.
  var code = 'solution = '+value_solution+'\nsolution_2 ='+value_solution_2+'\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};