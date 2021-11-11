import { Formularios } from './formularios.js';
import { LimpiarLocalStorage } from './funcionesFormularios.js';
import { peticionError } from './logs.js';

try {
  LimpiarLocalStorage();
  Formularios();
} catch (error) {
  peticionError(`El programa fallo: ${e}`);
}
