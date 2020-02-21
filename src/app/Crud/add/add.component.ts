import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudJavaService } from 'src/app/services/crud-java.service';
import { Users } from 'src/app/Modelo/Users';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  usu: Users = new Users();

  constructor(private router: Router, private serviceCrud: CrudJavaService) { }

  ngOnInit(): void {
  }

  guardar() {
    this.serviceCrud.postUsers(this.usu)
    .subscribe(
      data => {
        // console.log(data);
        alert('Se agrego con exito!!');
        this.router.navigate(['BackendJava/listar']);
      }
    );
  }
}
