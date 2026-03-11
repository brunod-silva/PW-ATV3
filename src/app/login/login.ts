import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login { 
  public mensagem:String="";
  public cpf:String="";
  public senha :String="";
  public autenticar(cpf:String, senha :String){
    let dados = localStorage.getItem("cliente");
    if(dados){
      let obj =JSON.parse(dados);
      if(cpf ===obj.cpf && senha===obj.senha){
        this.mensagem = "Login efetuado";
      }else{
        this.mensagem="Senha ou usuário inválidos";
      }
    }
  }
}
