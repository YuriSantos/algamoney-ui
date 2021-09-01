import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Lancamento } from 'src/app/core/model';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  //lancamento = new Lancamento();
  pessoas = [];
  formulario: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
      this.configurarFormulario();

      const codigoLancamento = this.route.snapshot.params['codigo'];

      this.title.setTitle('Novo lançamento');

      if (codigoLancamento) {
        this.carregarLancamento(codigoLancamento);
      }
      this.carregarCategorias();
      this.carregarPessoas();
    }

    get editando() {
      return Boolean(this.formulario.get('codigo').value)
    }

    configurarFormulario() {
      this.formulario = this.formBuilder.group({
        codigo: [],
        tipo: [ 'RECEITA', Validators.required ],
        dataVencimento: [ null, Validators.required ],
        dataPagamento: [],
        descricao: [null, [ Validators.required, Validators.minLength(5) ]],
        valor: [ null, Validators.required ],
        pessoa: this.formBuilder.group({
          codigo: [ null, Validators.required ],
          nome: []
        }),
        categoria: this.formBuilder.group({
          codigo: [ null, Validators.required ],
          nome: []
        }),
        observacao: []
      });
    }
  
    carregarLancamento(codigo: number) {
      this.lancamentoService.buscarPorCodigo(codigo)
        .then(lancamento => {
          this.formulario.patchValue(lancamento);
          this.atualizarTituloEdicao();
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    salvar() {
      if (this.editando) {
        this.atualizarLancamento();
      } else {
        this.adicionarLancamento();
      }
    }
  
    adicionarLancamento() {
      this.lancamentoService.adicionar(this.formulario.value)
        .then(lancamentoAdicionado => {
          this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });
  
          this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
        })
        .catch(erro => this.errorHandler.handle(erro));
    }
  
    atualizarLancamento() {
      this.lancamentoService.atualizar(this.formulario.value)
        .then(lancamento => {
          this.formulario.setValue(lancamento);
  
          this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    carregarCategorias() {
      return this.categoriaService.listarTodas()
        .then(categorias => {
          this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo }));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }  

    carregarPessoas() {
      return this.pessoaService.listarTodas()
        .then(pessoas => {
          this.pessoas = pessoas.map(p => ({ label: p.nome, value: p.codigo}));
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    novo() {
      this.formulario.reset();
  
      setTimeout(function() {
        this.lancamento = new Lancamento();
      }.bind(this), 1);
  
      this.router.navigate(['/lancamentos/novo']);
    }

    atualizarTituloEdicao() {
      this.title.setTitle(`Edição de lançamento: ${this.formulario.get('descricao').value}`);
    }

}
