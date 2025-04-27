FROM node:18.16.0-alpine3.16
WORKDIR /app

COPY package*.json .

RUN npm install --include=dev
RUN npm install react-router-dom lucide-react

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]