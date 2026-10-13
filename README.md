# Mi Portafolio Personal - Evaluación Formativa 2

Este proyecto es un portafolio personal desarrollado con React y Bootstrap, cumpliendo con los requerimientos de la Evaluación Formativa N° 2.

## Características Principales
* **Desarrollo Frontend:** Construido con React.js.
* **Estilos:** Diseño responsivo utilizando Bootstrap.
* **Componentes:** Secciones de Introducción, Proyectos y Noticias.
* **Datos Dinámicos:** La sección de Noticias consume datos desde un archivo local `noticias.json`.
* **Pruebas Unitarias:** Implementación de pruebas y generación de informe de cobertura.

## Instrucciones de Instalación y Ejecución

Para correr este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio o descarga los archivos.
2. Abre la terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias ejecutando:
   `npm install`
4. Inicia el servidor de desarrollo ejecutando:
   `npm start`
5. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

## Instrucciones para Pruebas y Cobertura

Para ejecutar las pruebas unitarias y generar el informe de cobertura, ejecuta el siguiente comando en la terminal:
`npm test -- --coverage --watchAll=false`

Esto generará una carpeta `coverage`. Puedes abrir el archivo `coverage/lcov-report/index.html` en tu navegador para ver el reporte visual de cobertura.