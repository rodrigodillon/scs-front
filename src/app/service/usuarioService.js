import ApiService from "../apiservice";

class UsuarioService extends ApiService {

    constructor () {
        super('/api/senhas/');
    }


    pedirSenhaNormal(){
        return this.post('gerar-nova-senha', {tipo:"NORMAL"})
    }

    pedirSenhaPreferencial(){
        return this.post('gerar-nova-senha', {tipo:"PREFERENCIAL"})
    }

    senhaAtual(){
        return this.get('senha-atual');
    }



}

export default UsuarioService;