import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private hostname = process.env.HOSTNAME;

  getHello(): string {
      console.log(process.env.HOSTNAME);
      return `hostname is: ${this.hostname}`;
  }
}
