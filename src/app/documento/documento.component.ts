import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../clienteservice/cliente.service';

@Component({
  selector: 'app-documento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent{
  queryForm: FormGroup;
  userRecords: any[] = [];
  mensaje: string = '';

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.queryForm = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit(): void {
    if (this.queryForm.valid) {
      const { tipoDocumento, numeroDocumento } = this.queryForm.value;
      this.clienteService.consultarCliente(tipoDocumento, numeroDocumento).subscribe({
        next: (data) => {
          this.mensaje = 'El cliente fue encontrado.';
          this.userRecords = [data]; 
        },
        error: (err) => {
          this.mensaje = 'El cliente no fue encontrado.';
          console.error('Error al consultar cliente', err);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
