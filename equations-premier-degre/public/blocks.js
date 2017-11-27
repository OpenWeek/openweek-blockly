/**
 *  Copyright (c) 2017 Robin Descamps
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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