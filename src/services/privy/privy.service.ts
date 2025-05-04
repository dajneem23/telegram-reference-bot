import {PrivyClient} from '@privy-io/server-auth';
import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';



export class PrivyService {
	private client: PrivyClient;

	constructor(private configService: ConfigService) {

		const privy = new PrivyClient( this.configService.get('PRIVY_API_URL')!,
			this.configService.get('PRIVY_API_KEY')!,
			 {
			walletApi: {
				authorizationPrivateKey: this.configService.get('PRIVY_WALLET_API_AUTHORIZATION_PRIVATE_KEY')!,
			}
		});
		this.client = privy;
	}
}
