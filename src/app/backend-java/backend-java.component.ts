import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend-java',
  templateUrl: './backend-java.component.html',
  styleUrls: ['./backend-java.component.css']
})
export class BackendJavaComponent implements OnInit {

  constructor(private router: Router) { }
  Listar() {
    this.router.navigate(['listar']);
  }

  Agregar() {
    this.router.navigate(['agregar']);
  }

  Editar() {
    this.router.navigate(['editar']);
  }

  ngOnInit(): void {
  }

}
