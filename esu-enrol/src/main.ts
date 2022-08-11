import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import bodyParser = require("body-parser");
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: false, transform: true }));
  app.use(bodyParser.json());
  app.enableCors({
    origin : "*",
    methods : "*",
    allowedHeaders : "*"
  })
  await app.listen(4012, '0.0.0.0').then( e =>{
    
  } );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
}
bootstrap();
