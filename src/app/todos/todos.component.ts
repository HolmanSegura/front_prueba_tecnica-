import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ClienteService } from '../clienteservice/cliente.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
  ],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  displayedColumns: string[] = [
    'nombreCompleto',
    'tipoDocumento',
    'numeroDocumento',
    'ciudad',
    'direccion',
    'telefono',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.obtenerTodosLosClientes().subscribe({
      next: (data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Error al obtener los clientes:', err);
      },
    });
  }
}
