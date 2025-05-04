import TelegramBot from 'node-telegram-bot-api';
import {ConfigService} from '@nestjs/config';

export default class TelegramService {
	private bot: TelegramBot;

	constructor(private configService: ConfigService) {
		this.bot = new TelegramBot(
			this.configService.get('TELEGRAM_BOT_TOKEN')!,
			{ polling: true });
	}

	sendMessage(chatId: string, message: string) {
		this.bot.sendMessage(chatId, message);
	}

	sendPhoto(chatId: string, photoUrl: string) {
		this.bot.sendPhoto(chatId, photoUrl);
	}
}
