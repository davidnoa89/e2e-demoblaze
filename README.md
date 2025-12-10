# Automatización E2E -- Demoblaze (Cypress)

Este proyecto contiene pruebas automatizadas end-to-end (E2E) utilizando
**Cypress** en el sitio Demoblaze.

## Requisitos

Para poder ejecutar este proyecto necesitas:

-   **Node.js v16 o superior**
-   **npm** (viene incluido con Node)
-   **Visual Studio Code**
-   **Cypress** instalado como dependencia de desarrollo

## Instalación del proyecto

1.  Abre la carpeta del proyecto en **Visual Studio Code**\
2.  En la terminal integrada ejecuta:

``` bash
npm install
```

Esto instalará todas las dependencias necesarias del archivo
`package.json`.

## Ejecutar Cypress

### Abrir Cypress en modo interfaz:

``` bash
npx cypress open
```

### Ejecutar en modo headless:

``` bash
npx cypress run
```
## Estructura del proyecto

    tu-proyecto/
    │
    ├── cypress/
    │   ├── e2e/
    │   │   └── demoblaze.cy.js
    │   ├── fixtures/
    │   ├── support/
    │
    ├── node_modules/
    ├── cypress.config.js
    ├── package.json
    └── README.md

## Caso de prueba automatizado

El caso de prueba verifica:

-   Que la página principal de **Demoblaze** cargue correctamente\
-   Que se pueda navegar por los productos\
-   Que se pueda abrir detalles de un producto

El flujo incluye:
1. Ingresar al sitio demoblaze.com
2. Agregar dos productos al carrito
3. Verificar que aparezcan en el carrito
4. Completar el formulario de compra
5. Finalizar la compra

El archivo principal está en:

    cypress/e2e/demoblaze.cy.js

## Notas

-   Asegúrate de ejecutar `npm init` antes de instalar Cypress si tu
    proyecto es nuevo.
-   Puedes agregar más pruebas dentro de la carpeta `cypress/e2e/`.
-   Usa **Visual Studio Code** para editar y ejecutar el proyecto con
    comodidad.

-----------------------------------------------------------

## API Demoblaze – Tests con Cypress

Este proyecto contiene pruebas automatizadas para la API de Demoblaze
 utilizando Cypress. Se realizan pruebas de signup, login, y manejo de usuarios con credenciales correctas e incorrectas.

## Requisitos

Node.js
 v16 o superior

Cypress
 v12 o superior

Conexión a internet (para acceder a la API de Demoblaze)

## Instalación

1. Clonar el repositorio:

git clone https://github.com/davidnoa89/e2e-demoblaze.git
cd e2e-demoblaze

2. Instalar dependencias:

npm install

3. Abrir Cypress:

npx cypress open

## Estructura del proyecto
cypress/
  ├─ e2e/
  │   └─ api-demoblaze.cy.js       # Tests de API de Demoblaze
  ├─ support/
  └─ fixtures/
package.json
README.md

## Tests incluidos

1. Crear un nuevo usuario (signup)
    Valida que se pueda registrar un usuario nuevo en la API.

2. Login con usuario válido
    Verifica que el usuario recién creado pueda iniciar sesión correctamente y recibir un token de autenticación.

3. Intentar crear un usuario ya existente
    Evalúa la respuesta de la API cuando se intenta registrar un usuario duplicado.

4. Login con usuario o contraseña incorrecta
    Comprueba que la API devuelve un error cuando las credenciales no son correctas.

## Ejecución de los tests

Para ejecutar todos los tests desde la terminal:

npx cypress run

Para ejecutar y abrir la interfaz gráfica de Cypress:

npx cypress open

Selecciona el archivo api-demoblaze.cy.js para ejecutar los tests individualmente.

Notas importantes

La API de Demoblaze puede devolver respuestas inconsistentes: a veces un string plano, otras veces un objeto JSON. Los tests están preparados para manejar ambas situaciones.

Se generan usuarios aleatorios para evitar conflictos con usuarios existentes.

## Autor
David Basantes