# Proyecto Semestral - Entrega 6

Fecha límite: lunes 26 de junio a las 23:59:59

# Introducción

¡Y llegamos a la última entrega! Luego de esta entrega la aplicación debe quedar completa de acuerdo a los objetivos planteados inicialmente.

Aunque tendrán algunos días para completar o pulir algunos detalles que les puedan quedar, tienen que considerar que esta **será la entrega en la que se evaluarán todos los aspectos técnicos de su aplicación, lo cual es una parte importante para la nota final de su proyecto**.

## Trabajo a realizar

En esta entrega se espera:

* Que incorporen **algún servicio REST a elección**, el cual debe ser consumido usando la API que el proveedor de la misma publique. Es importante que la elección vaya en línea con el servicio que presta su aplicación, agregándole valor a la misma.
* Que **ofrezcan una API REST** que pueda ser utilizada por otras aplicaciones. Mediante esta API deben ofrecer al menos un 33% de la funcionalidad disponible manualmente en su aplicación.

Deben considerar que parte de la funcionalidad de su aplicación es accesible sólo para ciertos usuarios, o depende del usuario que esté interactuando con la aplicación. En el contexto de su API, esto lo pueden simplificar creando “manualmente” (y de manera aleatoria) un *access_token* que identifique a cada usuario, y que sea exigido por su aplicación al momento de realizar ciertas operaciones. Esto significa que en lugar de entregar como parámetro un *user_id*, entregarán un *access_token* que permitirá a su aplicación saber a qué usuario se refieren, sin directamente especificarlo.

Cualquier duda general sobre el trabajo a realizar pueden consultarla en el [foro del curso](https://github.com/IIC2513-2017-1/syllabus/issues). Cualquier duda particular sobre su proyecto, pueden consultarla directamente a su ayudante.

**Nota importante**: tengan presente que la idea es consumir una API REST mediante _requests_ generados por ustedes en su aplicación (ya sea desde _Ruby_ o desde el cliente con _JavaScript_). Esto significa que algo como agregar un botón de _Twitter_, un contador de _tweets_/_likes_ o insertar un mapa de _Google_ con marcadores no se considera como "consumir una API". Si quieren agregar algo así naturalmente pueden hacerlo (y puede que le agregue valor a su entrega final) pero no se considerará para cumplir los requisitos de esta entrega.

## Forma de entrega

La aplicación debe quedar instalada en [Heroku](https://www.heroku.com/). El código debe quedar disponible en su repositorio de [Github](https://www.github.com) en la _branch master_. Incluyan un archivo "README" con cualquier indicación que consideren importante para su ayudante que les corregirá.

## Evaluación

Esta entrega generará dos notas con respecto a las evaluaciones:
* se evaluará como cualquier otra entrega parcial, con énfasis en la funcionalidad solicitada para esta entrega en particular
* se considerará el codígo hasta esta entrega para evaluar tanto funcionalidad y usabilidad de su aplicación, como también todos los aspectos técnicos de la misma (i.e código, arquitectura, modelo de datos, robustez). Esta última evaluación, en conjunto con la demo final, es lo que generará la nota final de su proyecto, que es un 50% de la nota práctica del curso
