import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-reenvia-senha',
  imports: [FormsModule,CommonModule],
  templateUrl: './reenvia-senha.html',
  styleUrl: './reenvia-senha.css',
})
export class ReenviaSenha {
  public mensagem:String ="";
  public cpf:String="";
  public email:String="";
  public reenviaSenha(cpf:String, email: String){
    let dados = localStorage.getItem("cliente");
    if(dados){
      let obj =JSON.parse(dados);
      if(cpf ===obj.cpf && email===obj.email){
        this.mensagem = "Senha enviada via e-mail";
        let envioSenha="Prezado" + obj.nome+",\n Segue o a senha de acesso: "+obj.senha+"\nAtenciosamente.";
      }else{
        this.mensagem="E-mail ou CPF não localizados";
      }
    }
  }
}
