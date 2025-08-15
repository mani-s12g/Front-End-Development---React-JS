FROM node:20-alpine

WORKDIR /app

# package* - here star(*) means anything starting with package, ' .' SPACE DOT after after
# json means, copy anything file starting with package*.json to working directory /app 
COPY package*.json .

RUN npm install

# copy everything from here to working directory (. to .) means from src to dest
# we dont want to copy node_modules folder so, create .dockerignore file and write 
# node_modules (basically mention which files or folders we dont want to copy here in docker)
COPY . .

# EXPOSE port
EXPOSE 5173

# next lastly we can say npm run dev or add cmd like below
CMD ["npm","run","dev"]

# lastly configure package.json's scripts->dev as --host 0.0.0.0
# SO it can run on any IP Address
# "scripts": {
    # "dev": "vite --host 0.0.0.0",
# }