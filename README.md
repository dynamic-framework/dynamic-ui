# stencil widget factory poc

## puntos a evaluar

* [mono-repo vs multi-repo](#mono-repo-vs-multi-repo)
* [Manejador de paquetes (npm, yarn o pnpm)](#manejador-de-paquetes-npm-yarn-o-pnpm)
* [Creando componentes con stencil](#creando-componentes-con-stencil)
* [Uso de un componente stencil en react](#uso-de-un-componente-stencil-en-react)
* [Uso de un componente stencil en vue](#uso-de-un-componente-stencil-en-vue)
* [Uso de un componente stencil en angular](#uso-de-un-componente-stencil-en-angular)
* [Uso de variables css en stencil](#uso-de-variables-css-stencil)
* [Uso de bootstrap en stencil](#uso-de-bootstrap-en-stencil)
* [Pruebas de manejo de versiones y publicaciones](#pruebas-de-manejo-de-versiones-y-publicaciones)

## mono-repo vs multi-repo

### mono-repo

#### pros

* puesta a punto del entorno rápida
  * `rush update`
  * `rush build`
* cambios de dependencias sencillos
  * `rush add`
    o
  * cambio en él `package.json` y `rush update`
* compilación selectiva
  * `rush build --to-except name:vue-profile`
  * `rush build --from-except name:react-desgin-system`
* build cache
* manejo de versiones y publicación
  * `rush change`
  * `rush publish`
* estable usando `pnpm`

#### cons

* es necesario conocer los comandos de rush
* no siempre se agregan las dependencias cuando se usa `npm` o `yarn`
  * [https://github.com/microsoft/rushstack/issues/1836](https://github.com/microsoft/rushstack/issues/1836)
  * [https://github.com/dbartholomae/lambda-middleware/commit/2c54f9e1d624ed821f316e31db9f172ff49a6ffe#diff-7cf530b920932d4075d799c0aa86e3757def01fb357fcb27ebc090868ceb62dd](https://github.com/dbartholomae/lambda-middleware/commit/2c54f9e1d624ed821f316e31db9f172ff49a6ffe#diff-7cf530b920932d4075d799c0aa86e3757def01fb357fcb27ebc090868ceb62dd)
* es necesario hacer configuraciones adicionales para trabajar con angular.

### multi-repo

#### pros

* no hay nada nuevo que aprender. 😄

#### cons

* el proceso de desarrollo relacionado con fábricas de paquetes puede volverse una pesadilla
* al agregar dependencias pueden deslinkearse los paquetes y es necesario re-checkearlos.
* se puede perder el contexto de que paquetes es necesario recompilar nuevamente.
* la publicación es totalmente manual y depende de los paquetes relacionados.

> Para traer cambios nuevos a un `widget` hechos en los componentes del `design-system`, tendrás que compilar él `design-system`, después tendrás que compilar el paquete específico para el framework `^(react|angular|vue)-design-system$` y ahí tendrás el cambio.
>
> A la hora de publicar ocurre lo mismo, tendrás que compilar y publicar el `design-system` actualizar la versión en todos los paquetes específicos para el framework, compilar y publicar cada paquete para que después puedan ser usando en los widgets.
>
> Recuerda que si cambiaste un componente lo ideal es que este cambio esté para todos los frameworks, además, `design-system` al compilarse te dejará el cambio escrito para todos los frameworks

## Manejador de paquetes (npm, yarn o pnpm)

Si se usará `rush` es mejor usar `pnpm`, rush trabaja estable con `pnpm` (su opción por defecto), además `pnpm` resuelve dos problemas conocidos en `yarn` y npm

* [phantom dependencies](https://rushjs.io/pages/advanced/phantom_deps/#phantom-dependencies)
  * dependencias que no existen en el package.json, pero al ser parte de otro y existir en el node_modules igual las podemos importar, dejando los paquetes publicados con dependencias faltantes.
  * dependencias que no existen en el package.json, pero al ser parte de las dependencias del root de un mono-repo las podemos importar, dejando los paquetes publicados con dependencias faltantes.
* [NPM doppelgangers](https://rushjs.io/pages/advanced/npm_doppelgangers/)

`yarn` y `npm` tienen problemas con rush, sin embargo, si decidimos no usar rush podemos usar igual mono-repos usando el soporte de workspaces que tienen, `npm` soporta workspaces desde la versión 7, también `pnpm` soporta workspaces, nos tocará implementar el manejo de versiones y publicación, algo que `pnpm` también tiene por su cuenta.

> Es importante mencionar que el manejador de paquete que usemos es una elección interna, será usado solo por el equipo de modyo, la idea de usar `mono-repos` o `workspaces` no es necesaria para los clientes porque no estarán fabricando herramientas en común entre sus widgets, los clientes pueden mantener su flujo de trabajo normal con `npm` o `yarn`

Otros que han tenido

## Creando componentes con stencil

A pesar de usar jsx crear componentes con stencil es como aprender un framework nuevo, sencillo para cosas sencillas,
pero mientras más complejo sea el componente tendremos que aprender más.

Sin embargo, las bases estás documentadas [https://stenciljs.com/docs/api](https://stenciljs.com/docs/api) y no somos las únicas personas creando componentes con stencil, menciono solo los que exportan stencil para otros framework

* El core de [ionic framework](https://github.com/ionic-team/ionic-framework/tree/main/core/src/components)
* El [system design](https://github.com/baloise/design-system) de [baloise](https://design.baloise.dev/?path=/story/welcome--page)
* El [system design](https://github.com/BlazeSoftware/atoms) de [blazeui](https://www.blazeui.com/) (aunque no exportan a otros frameworks, dejan ese trabajo al developer 😕)
* EL [system design bulmi](https://github.com/Gomah/bulmil) para [Bulma](https://bulma.io/)

Además de otras librerías para su ecosistema que te permiten usar hooks a lo react o redux por ejemplo.

El resultado de la compilación de stencil son `web-components`, para poder usarlos de manera natural en [react](https://github.com/ionic-team/stencil-ds-output-targets/blob/main/packages/react-output-target/README.md), [vue](https://github.com/ionic-team/stencil-ds-output-targets/blob/main/packages/vue-output-target/README.md) o [angular](https://github.com/ionic-team/stencil-ds-output-targets/blob/main/packages/angular-output-target/README.md) stencil provee un [output target](https://github.com/ionic-team/stencil-ds-output-targets) para cada uno configurable, este output target genera un paquete independiente por framework, con componentes tipo wrapper para los `web-components`.

A tener en cuenta [https://custom-elements-everywhere.com/](https://custom-elements-everywhere.com/)

> Queda pendiente explorar el usar dependencias externas dentro de los componentes.

## Uso de un componente stencil en react

Hacerlo funcionar en `react` no tuvo mayor complejidad.

> Funciona en modyo

## Uso de un componente stencil en vue

Hacer funcionar a `vue` no fue sencillo, problemas encontrados:

* `vue3` maneja eventos en `kebab-case` y `stencil` los genera en `camelCase`.
  * [https://github.com/ionic-team/stencil/issues/2804](https://github.com/ionic-team/stencil/issues/2804) este workaround funciona con `includeDefineCustomElements` en `true`, sin embargo, al usar widgets construidos con distintos frameworks en un `page` solo funcionan los eventos del primer widget en el `page` y los del mismo framework de este.
  * revisando el código de ionic framework consigo un workaround mejor usando un plugin de vue en el que pasaron de usar `defineCustomElements` a `setPlatformHelpers`
    * [https://github.com/ionic-team/ionic-framework/commit/dc48a9f1a2dff8a2d644112bbe1df8b0b6811848#diff-8cee275a9cf24f29120acc6b18432e1b43901e53e260a64bd80c5601a6b97210](https://github.com/ionic-team/ionic-framework/commit/dc48a9f1a2dff8a2d644112bbe1df8b0b6811848#diff-8cee275a9cf24f29120acc6b18432e1b43901e53e260a64bd80c5601a6b97210)
    * [https://github.com/ionic-team/ionic-framework/blob/b064fdebef14018b77242b791914d5bb10863d39/packages/vue/src/ionic-vue.ts] (https://github.com/ionic-team/ionic-framework/blob/b064fdebef14018b77242b791914d5bb10863d39/packages/vue/src/ionic-vue.ts)
  * dejé un workaround híbrido en el que se puede usar `setPlatformHelpers`, pero es necesario usar `defineCustomElements` para esperar a que los componentes estén definidos antes de montar el app.
  * el ide no completará los eventos en kebab.
* hay que configurar el [output-target](https://github.com/ionic-team/stencil-ds-output-targets/blob/main/packages/vue-output-target/README.md#componentmodelconfig) para generar componentes que soporten v-model, según documentación es trivial, pero después de varios intentos no logré hacerlo funcionar.

> Funciona en modyo

## Uso de un componente stencil en angular

Hacer funcionar a `angular` no fue sencillo, problemas encontrados:

* angular tiene su propio manejo de espacios de trabajo, por un problema ajeno a rush y al manejador de paquetes hacerlo funcionar dentro de un workspace requiere configuración adicional.
  * la solución a este problema es sencilla, es configurar los paths en el tsconfig de la librería de angular y el widget, sin embargo, encontrar la solución fue complicado.
* hay que configurar el [output-target](https://github.com/ionic-team/stencil-ds-output-targets/blob/main/packages/angular-output-target/README.md) para generar componentes que soporten ng-model, según documentación es trivial, no hice muchos intentos acá, pero si noté que puede ser más sencillo de resolver que vue, no me funcionó a la primera.
* al menos en webstorm los eventos se muestran como si no existieran en el html.

> No he podido generar un artefacto que funcione en un `page` de modyo

## Uso de variables css en stencil

* las variables del `:root` es necesario definirlas en el `globalStyle`
  * se importa desde el siguiente archivo `@modyo/design-system/dist/design-system/design-system.css`
  * solo contiene él `root` y el `reboot` de `bootstrap`, también los estilos incluidos en el `injectGlobalPaths`

* las variables, funciones, mixins y mapas se definen en él `injectGlobalPaths`, este se incluye tanto en los componentes como en el `globalStyle`
  * este slo importa los recursos abstractos, sin clases de utilidad.

* se crea un componente global a usar como wrapper de los widgets `m-app`
  * se prueba el uso de `shadow-dom` sin embargo el slot del componente se renderiza fuera del shadow lo que evita el scoping natural.
  * se prueba el uso de `scoping` sin obtener el resultado esperado.
  
> Es necesario explorar más con el uso de `shadow: true` y `scoped: true` la idea es encapsular solo el estilo del widget.
 
## Pruebas de manejo de versiones y publicaciones

> En espera
