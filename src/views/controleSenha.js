import React from "react";
import { Stack, Card, Button, Container, Row, Col } from 'react-bootstrap';

import ControleSenhaService from "../app/service/controleSenhaService";


class ControleSenha extends React.Component {

    constructor(){
        super();
        this.service = new ControleSenhaService();
        this.state = {
            senhaAtual : 0
        }
    }

    pedirNovaSenha = () => {
        return this.service.chamarProximaSenha();
    }

    reiniciar = () => {
        return this.service.reiniciarSenhas();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 500
        )
        setTimeout(()=> {
            this.senhaAtual()
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
                                <Card.Title> {this.state.senhaAtual} </Card.Title>
                            </Card.Body>
                        </Card>
                        <Container style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                            }}>
                        <Row>
                            <Col style={{padding:"20px"}}>
                                <Button onClick={this.reiniciar} variant="dark">REINICIAR</Button>
                            </Col>
                            <Col style={{padding:"20px"}}>
                                <Button onClick={this.pedirNovaSenha} variant="warning">PROXIMO</Button>
                            </Col>
                        </Row>
                    </Container>
                </Stack>
            </div>
            </>
        )
    }


}

export default ControleSenha;