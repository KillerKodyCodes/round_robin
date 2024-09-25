import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BracketService } from './bracket.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), BracketService]
};
