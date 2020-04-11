import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {

  port: parseInt(process.env.PORT, 10),

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/api',
    version: process.env.VERSION,
  },

  emails: {
    apiKey: 'API key from mailgun',
    domain: 'Domain Name from mailgun',
  },

  swaggerConfig: {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'APIs Wallet',
      description: '',
      termsOfService: '',
      contact: {
        name: 'Tran Son hoang',
        email: 'son.hoang01@gmail.com',
        url: 'https://hoangtran.co',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
  },
}
