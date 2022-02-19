import React from "react";
import { Button,Stack } from 'react-bootstrap';

import Redirect from "../app/service/redirect";
import UsuarioService from "../app/service/usuarioService";


class NovaSenha extends React.Component {

    novaSenha = 0

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    
    novaSenhaPreferencial = async () => {
        const response = await this.service.pedirSenhaPreferencial()
        const {senha, dataHoraSenhaAtendimento} = response.data
        console.log(response.data)
        localStorage.setItem('Senha', senha);
        if(dataHoraSenhaAtendimento != null) {
            setTimeout(()=> {
                localStorage.clear()
            },30000)
        }
    }

    novaSenhaNormal = async () => {
        const response = await this.service.pedirSenhaNormal()
        const {senha} = response.data
        localStorage.setItem('Senha', senha);
    }


    render(){
        return (
            <>
            <div>
                <Stack gap={2} className="col-md-5 mx-auto" style={{justifyContent: "center",
                height: "100vh"}}>
                    <Button onClick={this.novaSenhaPreferencial} variant="primary">PREFERENCIAL</Button>
                    <Button onClick={this.novaSenhaNormal} variant="success">NORMAL</Button>
                </Stack>
            </div>
            </>
        )
    }
}

export default NovaSenha ;