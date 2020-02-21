import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudJavaService } from 'src/app/services/crud-java.service';
import { Users } from 'src/app/Modelo/Users';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: Users = new Users();
  constructor(private router: Router, private service: CrudJavaService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    const id = localStorage.getItem('id');
    this.service.getUsersId(+ id)
    .subscribe(
      data => {
        // console.log(data);
        this.user = data;
      }
    );
  }

  actualizar(user: Users) {
    this.service.updateUsers(user)
    .subscribe(
      data => {
        console.log(data);
        this.user = data;
        alert('Usuario actualizado correctamente');
        this.router.navigate(['BackendJava/listar']);
      }
    );
  }

}
