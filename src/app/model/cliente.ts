export class Cliente {
    public nome:String="";
    public email:String="";
    public telefone:String="";
    public cpf:String="";
    public logradouro:String="";
    private senha :String="";


    public setSenha(senha:String){
        this.senha = senha;
    }
    public getSenha(){
        return this.senha;
    }
}
