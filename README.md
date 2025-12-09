# Automatización E2E -- Demoblaze (Cypress)

Este proyecto contiene pruebas automatizadas end-to-end (E2E) utilizando
**Cypress** en el sitio Demoblaze.

------------------------------------------------------------------------

## Requisitos

Para poder ejecutar este proyecto necesitas:

-   **Node.js v16 o superior**
-   **npm** (viene incluido con Node)
-   **Visual Studio Code**
-   **Cypress** instalado como dependencia de desarrollo

------------------------------------------------------------------------

## Instalación del proyecto

1.  Abre la carpeta del proyecto en **Visual Studio Code**\
2.  En la terminal integrada ejecuta:

``` bash
npm install
```

Esto instalará todas las dependencias necesarias del archivo
`package.json`.

------------------------------------------------------------------------

## Ejecutar Cypress

### Abrir Cypress en modo interfaz:

``` bash
npx cypress open
```

### Ejecutar en modo headless:

``` bash
npx cypress run
```

------------------------------------------------------------------------

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

------------------------------------------------------------------------

## Caso de prueba automatizado

El caso de prueba verifica:

-   Que la página principal de **Demoblaze** cargue correctamente\
-   Que se pueda navegar por los productos\
-   Que se pueda abrir detalles de un producto

El archivo principal está en:

    cypress/e2e/demoblaze.cy.js

------------------------------------------------------------------------

## Notas

-   Asegúrate de ejecutar `npm init` antes de instalar Cypress si tu
    proyecto es nuevo.
-   Puedes agregar más pruebas dentro de la carpeta `cypress/e2e/`.
-   Usa **Visual Studio Code** para editar y ejecutar el proyecto con
    comodidad.
