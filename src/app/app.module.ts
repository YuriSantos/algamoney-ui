import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
<<<<<<< Updated upstream
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
=======
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavBarComponent,
    PessoasPesquisaComponent,
<<<<<<< Updated upstream
    LancamentoCadastroComponent
=======
    PessoaCadastroComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
