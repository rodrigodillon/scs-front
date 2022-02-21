import React from "react";
import { Stack , Card , Button} from 'react-bootstrap';

import SenhaService from "../app/service/senhaService";


class Senha extends React.Component {


    constructor(){
        super();
        this.service = new SenhaService();
        this.state = {
            senhaAtual : 0,
            suaSenha : 0
            
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
                return {senhaAtual: resp.data.senha}
            })

        })
    }

    suaSenha = () => {
            this.setState(() => {
                return {suaSenha: localStorage.getItem('Senha')}
            })
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
                                <Card.Title >{this.state.senhaAtual} </Card.Title>
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
                                <Card.Title> {this.state.suaSenha} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Stack>
                </div>
            </>
        )
    }


}

export default Senha;