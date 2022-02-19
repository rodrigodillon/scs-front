import ApiService from "../apiservice";

class GerenteService extends ApiService {

    constructor () {
        super('/api/senhas/');
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

export default GerenteService;