"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(ruedas, combustible) {
        this.ruedas = ruedas;
        this.combustible = combustible;
    }
    Vehiculo.prototype.getCombustible = function () {
        return this.combustible;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
