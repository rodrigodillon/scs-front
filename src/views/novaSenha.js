import React from "react";
import { Button,Stack } from 'react-bootstrap';

import UsuarioService from "../app/service/usuarioService";

import {withRouter} from './withRouter'


class NovaSenha extends React.Component {

    novaSenha = 0

    constructor(){
        super();
        this.service = new UsuarioService();
        this.novaSenhaNormal = this.novaSenhaNormal.bind(this);
    }
    
    //navigate = useNavigate();
    
    novaSenhaPreferencial = async () => {
        
        const response = await this.service.pedirSenhaPreferencial()
        const {senha} = response.data
        console.log(response.data)
        localStorage.setItem('Senha', senha);
        //if(dataHoraSenhaAtendimento != null) {
          //  setTimeout(()=> {
            //    localStorage.clear()
            //},30000)
        //}
    }

    
    novaSenhaNormal = async () => {
        const response = await this.service.pedirSenhaNormal()
        const {senha} = response.data
        localStorage.setItem('Senha', senha);
        this.props.navigate('/senhas')
        
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

export default  withRouter(NovaSenha) ;