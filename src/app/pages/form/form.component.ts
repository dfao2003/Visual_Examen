import { Component } from '@angular/core';
import { Operador } from 'src/app/domain/Operador';
import { Recarga } from 'src/app/domain/Recarga';
import { OperadoraService } from 'src/app/services/operadora.service';
import { RecargaService } from 'src/app/services/recarga.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  codigoOpera: number = 0;

  recargas: any;

  recarga: Recarga = new Recarga();

  ope: Operador =  new Operador();

  constructor(private recargasService: RecargaService, private operadorasService: OperadoraService){

  }

  ngOnInit(): void {
    this.recargas = this.recargas.getRecargas();
  }

  guardar(){
    this.operadorasService.getOperadoraCodigo(this.codigoOpera);
    this.recargasService.saveRecarga(this.recarga).subscribe(data=>{
      console.log(data);
    })
  }

}
