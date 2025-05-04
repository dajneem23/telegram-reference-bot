import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
	imports: [ CqrsModule.forRoot(), ConfigModule.forRoot({
		load: [ configuration ],
		isGlobal: true,
		envFilePath: [ '.env' ],
	}) ],
	controllers: [ AppController ],
	providers: [ AppService ],
})
export class AppModule { }
