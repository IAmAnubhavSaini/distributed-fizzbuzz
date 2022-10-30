FROM node:16-alpine AS builder
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production
#RUN yarn install --production

COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
