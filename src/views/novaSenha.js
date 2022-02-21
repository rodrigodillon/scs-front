import React from "react";
import { Button,Stack } from 'react-bootstrap';

import SenhaService from "../app/service/senhaService";

import {withRouter} from '../app/service/withRouter';


class NovaSenha extends React.Component {


    constructor(){
        super();
        this.service = new SenhaService();
        this.novaSenhaNormal = this.novaSenhaNormal.bind(this);
    }
    
    
    novaSenhaPreferencial = async () => {
        
        const response = await this.service.pedirSenhaPreferencial()
        const {senha} = response.data
        localStorage.setItem('Senha', senha);
        this.props.navigate('/senhas')
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