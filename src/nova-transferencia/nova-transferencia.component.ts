import { TransferenciasService } from './../app/services/transferencias.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor:number;
  destino:number;

  constructor(private service: TransferenciasService, private router : Router ) {}

  transferir(){
    console.log('Solicitado nova transferência');
    const valorEmitir: Transferencia = {valor:this.valor, destino:this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.log(error)
    );



  }

  limparCampos(){
    this.valor = 0;
    this.destino =0;
  }


}
