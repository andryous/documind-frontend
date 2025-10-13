// Importamos 'useState' desde la LIBRERÍA de React.
import React, { useState } from "react";

// Definimos la "forma" de las propiedades que nuestro componente puede recibir.
// Esto es 100% TYPESCRIPT. React no sabe qué es una "interface".
interface CounterProps {
  initialValue: number;
}

// Creamos nuestro componente. La sintaxis de funciones y el ": React.FC<CounterProps>"
// que dice "este componente acepta propiedades con la forma de CounterProps"
// es la colaboración entre JS/TS y React.

export function Counter({ initialValue }: CounterProps) {
  // Aquí está la magia de REACT: 'useState'. Le pedimos a React que "recuerde" un número.
  // Le damos un valor inicial. React nos devuelve el valor actual ('count') y una
  // función para cambiarlo ('setCount').
  const [count, setCount] = useState(initialValue);

  // Esto es 100% TYPESCRIPT. Estamos declarando una constante de tipo 'string'.
  const message: string = "El contador es:";

  // Esta sintaxis que parece HTML dentro de JavaScript se llama JSX.
  // Es una extensión creada por REACT para describir cómo debe verse la UI.
  return (
    <div>
      {/* Mostramos el mensaje (TS) y el valor del estado (React) */}
      <h2>
        {message} {count}
      </h2>

      {/* Cuando se hace clic, llamamos a la función de REACT para actualizar el estado */}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}


EJEMPLO CON IF

// Variable para simular si el usuario ha iniciado sesión
const isLoggedIn = true;
// Variable para simular si los datos están cargando
const isLoading = true;

// 1. PRIMERA BARRERA (lo primero que puede fallar)
if (!isLoggedIn) {
  return "Acceso Denegado"; // La función termina aquí.
}

// 2. SEGUNDA BARRERA (si pasamos la primera)
if (isLoading) {
  return "Cargando..."; // La función termina aquí.
}

// 3. EL PREMIO (si pasamos todas las barreras)
return "Aquí está tu panel de control";
