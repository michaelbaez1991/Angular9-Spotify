import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudJavaService } from 'src/app/services/crud-java.service';
import { Users } from 'src/app/Modelo/Users';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  users: Users[];
  constructor(private serviceCrud: CrudJavaService, private router: Router) { }

  ngOnInit(): void {
    this.serviceCrud.getUsers()
    .subscribe(
      data => {
        // console.log(data);
        this.users = data;
      }
    );
  }

  editar(user: Users): void {
    localStorage.setItem('id', user.id.toString());
    this.router.navigate(['BackendJava/editar']);
  }
}
