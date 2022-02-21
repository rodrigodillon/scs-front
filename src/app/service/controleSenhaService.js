import ApiService from "../apiservice";

class ControleSenhaService extends ApiService {

    constructor () {
        super('/scs-backend/api/senhas/');
    }

    chamarProximaSenha() {
        return this.post('chamar-proximo');
    }

    reiniciarSenhas(){
        return this.post('reiniciar');
    }

    senhaAtual(){
        return this.get('senha-atual');
    }
}

export default ControleSenhaService;