var PnBaseElement = require('../pn-base-element.js');
var PnUtils = require('../pn-utils.js');

var proto = Object.create(HTMLInputElement.prototype);
proto = Object.assign(proto, PnBaseElement);

proto.setValue = function (value) {
    this.value = value;
}

PnUtils.register('input', {
    extends: 'input',
    prototype: proto
});