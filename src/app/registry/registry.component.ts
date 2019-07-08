import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario.model'

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  usuario: UsuarioModel

  constructor() { }

  ngOnInit() {
  }

}
