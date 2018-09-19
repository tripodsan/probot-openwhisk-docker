FROM openwhisk/action-nodejs-v8
LABEL Tobias Bocanegra

WORKDIR /nodejsAction

COPY package.json /nodejsAction/package.json

RUN rm -rf /nodejsAction/node_modules \
    && npm install \
    && npm cache clean --force

RUN cat /nodejsAction/package.json

EXPOSE 8080
CMD node --expose-gc app.js
