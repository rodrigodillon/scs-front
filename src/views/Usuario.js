import React from "react";
import { Stack , Card , Button} from 'react-bootstrap';

import UsuarioService from "../app/service/usuarioService";


class Usuario extends React.Component {


    constructor(){
        super();
        this.service = new UsuarioService();
        this.state = {
            senha : 0,
            suaNovaSenha : 0
            
        }
    }

    componentDidMount() {
        this.suaSenha()

        this.timerID = setInterval(
            () => this.tick(), 500
        )
        setTimeout(()=> {
            this.tick()
        },500)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick () {
        this.service.senhaAtual().then((resp)=>{
            this.setState(() => {
                return {senha: resp.data.senha}
            })

        })
    }

    suaSenha = () => {
            this.setState(() => {
                return {suaNovaSenha: localStorage.getItem('Senha')}
            })
            console.log("novo status" + this.state.suaNovaSenha)
    }

    render() {
        return (
            <>
                <div>
                    <Stack gap={2} className="col-md-5 mx-auto" style={{
                        justifyContent: "center",
                        height: "100vh",
                        alignItems: "center"
                    }}>
                        <Card
                            bg="info"
                            text='dark'
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>SENHA ATUAL:</Card.Header>
                            <Card.Body>
                                <Card.Title >{this.state.senha} </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card
                            bg="secondary"
                            text='white'
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>SUA SENHA:</Card.Header>
                            <Card.Body>
                                <Card.Title> {this.state.suaNovaSenha} </Card.Title>
                            </Card.Body>
                        </Card>
                        <Button onClick={this.suaSenha} variant="success">NORMAL</Button>
                    </Stack>
                </div>
            </>
        )
    }


}

export default Usuario;