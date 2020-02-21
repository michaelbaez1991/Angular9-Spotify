import { Component, OnInit } from '@angular/core';
import { CrudJavaService } from '../services/crud-java.service';
import { Router } from '@angular/router';
import { Users } from '../Modelo/Users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: Users = new Users();
  constructor(private serviceCrud: CrudJavaService, private router: Router) { }

  ngOnInit(): void {
  }

  editar(user: Users): void {
    localStorage.setItem('id', user.id.toString());
    this.router.navigate(['BackendJava/editar']);
  }

}
