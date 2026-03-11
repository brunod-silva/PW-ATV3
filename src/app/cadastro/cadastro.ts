import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  public nome:String="";
  public email:String="";
  public telefone:String="";
  public cpf:String="";
  public logradouro:String="";
  public senha :String="";
  public mensagem : String="";
  public cliente : Cliente = new Cliente;
  public cadastrar(nome:String, email:String, telefone:String, cpf:String, logradouro:String, senha :String){
    this.cliente.setSenha(senha);
    this.cliente.nome=nome;
    this.cliente.cpf=cpf;
    this.cliente.email =email;
    this.cliente.telefone=telefone;
    this.cliente.logradouro=logradouro;

    let json = JSON.stringify(this.cliente);
    localStorage.setItem("cliente", json);
    this.mensagem="Cadastro efetuado!";
  }
}
