import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ObtenerProjectService } from 'src/app/services/obtener-project.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email!: string;
  public password!: string;

  public emailPrueba: string = 'Victor'
  public passwordPrueba: string = '1234'

  public completado: string = '';

  public habilitar = false;
  registerForm!: FormGroup;
  public bloquear =true;

  constructor(private formBuilder: FormBuilder, private obtenerData:ObtenerProjectService) {

  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      usuario: [''],
      password: [''],
    });
  }

  onSubmit() {
  }


  login() {



  }

}
