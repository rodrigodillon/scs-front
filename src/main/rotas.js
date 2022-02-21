import React from 'react'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import ControleSenha from '../views/controleSenha';
import NovaSenha from '../views/novaSenha';
import Senha from '../views/senha';

function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NovaSenha />} />
                <Route path="/senhas" element={<Senha />} />
                <Route path="/controleSenha" element={<ControleSenha />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;