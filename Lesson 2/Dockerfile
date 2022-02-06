# download image, that we need
FROM node:17-alpine3.12

ENV PORT=3000

# setup working directory
WORKDIR /usr/app

# VOLUME usr/app/logs

# ADD index.js .

# copy code inside the container - COPY is more optimized
COPY main.js .

# shows which port will be opened while running the container
EXPOSE 3000

# install packages, that we need
RUN npm install express process fs && \
    mkdir logs && \
    touch logs/file.log

#---------> everything up ^ is running while building image!

# RUN node index.js

# docker executes from root by default
# USER admin

# setup command that will run while running the container
CMD ["node", "main.js"]

# ENTRYPOINT ["node", "index.js"]