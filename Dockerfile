# Use official Node.js image
FROM node:23-slim as builder

# Set working directory
WORKDIR /app

RUN yarn global add typescript

COPY yarn.lock .
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build


# Run stage
FROM node:23-slim  AS runner

WORKDIR /app

COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/package.json .

# Install only production dependencies
RUN yarn install --production

COPY --from=builder /app/dist ./dist

ENTRYPOINT [ "yarn", "start" ]
