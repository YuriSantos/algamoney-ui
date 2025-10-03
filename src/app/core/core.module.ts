import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';

import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    ConfirmDialogModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    DatePipe,
    ErrorHandlerService,
    AuthService,
    MessageService,
    ConfirmationService,
    Title
  ]
})
export class CoreModule { }
