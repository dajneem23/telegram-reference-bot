# Telegram Referral Bot

This is a simple Telegram bot built with Node.js, TypeScript, and Express.js that uses Privy for authentication and PostgreSQL with Prisma for storage.

## Features

* Telegram bot asks users for their email upon starting
* Uses Privy to authenticate users via email
* Sends confirmation email to complete login
* Requires inviting 2 new users via unique referral URL before unlocking access
* Once unlocked, users can play a /roll dice game (1-6)

## Tech Stack

* Node.js + TypeScript
* Express.js for HTTP server
* Prisma ORM with PostgreSQL for database
* Privy for authentication via email
* Telegram Bot API

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/telegram-referral-bot.git
   cd telegram-referral-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   PRIVY_APP_ID=your_privy_app_id
   PRIVY_CLIENT_ID=your_privy_client_id
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   BASE_URL=https://yourdomain.com
   ```

4. Set up the database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

## Usage

1. Start a chat with the bot on Telegram
2. Enter your email and confirm it via the Privy email
3. Share your invite link with 2 users
4. Once they join and confirm, the bot will be unlocked
5. Use `/roll` to play the dice game

## License

MIT
