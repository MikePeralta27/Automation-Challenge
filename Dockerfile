FROM cypress/base:14.16.0

WORKDIR /app

COPY . .

RUN npm ci

CMD ["npm", "run", "cy:electron"]