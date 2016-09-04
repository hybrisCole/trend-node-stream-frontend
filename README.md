# Drupal CR 2016 - Programación Funcional Reactiva Aplicada a JavaScript
## Twitter Node Stream - Frontend
Este proyecto muestra datos del Twitter API que recibe mediante PubNub del [backEnd](https://github.com/hybrisCole/trend-node-stream-backend).
Este repo es una copia de [Victory Tutorial](https://github.com/FormidableLabs/victory-tutorial)
###Pasos para ejecutar este proyecto:
- Instalar [node 6.5.0](https://github.com/creationix/nvm)
- Clonar este proyecto
- Utilizar la misma variable de *PUBNUB_SUBSCRIBE_KEY* que utilizó en el [backEnd](https://github.com/hybrisCole/trend-node-stream-backend/blob/master/service/pubnubClient.js) y escribirla en la propiedad *subscribeKey* de *pubnubClient.js*
- Ejecutar **npm install** desde la línea de comandos, en el mismo path de **package.json**
- Ejecutar **npm run start** desde la línea de comandos, en el mismo path de **package.json**
- Para revisar el code linting, puede ejecutar **npm run lint**, o usar [Atom](https://atom.io/) con el paquete *linter-eslint*
