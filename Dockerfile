# download image, that we need
FROM node:17-alpine3.12

# setup working directory
WORKDIR /usr/app

# VOLUME usr/app/logs

# ADD index.js .

# copy code inside the container - COPY is more optimized
COPY index.js .
COPY connection.js .

# shows which port will be opened while running the container - just description
EXPOSE 3300

# install packages, that we need
RUN npm install express pg dotenv

#---------> everything up ^ is running while building image!

# RUN node index.js

# docker executes from root by default
# USER admin

# setup command that will run while running the container
CMD ["node", "index.js"]

# ENTRYPOINT ["node", "index.js"]