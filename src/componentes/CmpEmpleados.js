import React, { Component } from "react";
import CmpEmpleado from "./CmpEmpleado"; // Importamos el componente individual

class CmpEmpleados extends Component {
  render() {
    const { empleados, cambiarEstado } = this.props; // Extraemos empleados y función desde props

    // Validamos si no hay empleados
    if (!empleados || empleados.length === 0) {
      return <p>No hay empleados disponibles.</p>;
    }

    return (
      <div className="empleados-lista">
	  <h2>Lista de Empleados</h2>
        {/* Iteramos sobre los empleados para mostrar cada uno */}
        {empleados.map((empleado) => (
          <CmpEmpleado
            key={empleado.id}
            empleado={empleado}
            cambiarEstado={cambiarEstado}
          />
        ))}
      </div>
    );
  }
}

export default CmpEmpleados;
