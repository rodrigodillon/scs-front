import ApiService from "../apiservice";

class SenhaService extends ApiService {

    constructor () {
        super('/scs-backend/api/senhas/');
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

export default SenhaService;