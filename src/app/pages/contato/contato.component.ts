import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(120)
      ])],
      endereco: ['', Validators.compose([
        Validators.maxLength(1024)
      ])],
      email: ['', Validators.compose([
        Validators.maxLength(120),
        CustomValidator.EmailValidator
      ])],
      telefone: ['', Validators.compose([
        Validators.maxLength(16)
      ])],
      celular: ['', Validators.compose([
        Validators.maxLength(16)
      ])]
    });
  }

  ngOnInit() {
  }

}
