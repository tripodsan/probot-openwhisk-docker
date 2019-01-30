FROM adobeapiplatform/adobe-action-nodejs-v10:3.0.13

LABEL Tobias Bocanegra


ENV UID=1001 \
    NOT_ROOT_USER=runtimeuser

USER root
RUN apk add nodejs-npm python
#RUN apk update && \
#    apk add --no-cache \
#    libuv \
#    imagemagick=7.0.7.39-r0 \
#    unzip

#RUN adduser -D -u ${UID} -h /home/${NOT_ROOT_USER} -s /bin/bash ${NOT_ROOT_USER}
RUN npm --version
WORKDIR /nodejsAction
#RUN chown ${NOT_ROOT_USER}:${NOT_ROOT_USER} /nodejsAction
#COPY . .
# COPY the package.json to root container, so we can install npm packages a level up from user's packages, so user's packages take precedence
COPY ./package.json /
RUN cd / && npm install --no-package-lock \
    && npm cache clean --force

RUN rm -rf /usr/local/lib/node_modules

RUN apk del nodejs nodejs-npm

USER ${NOT_ROOT_USER}

EXPOSE 8080
CMD node --expose-gc app.js
