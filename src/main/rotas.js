import React from 'react'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Gerente from '../views/Gerente';
import NovaSenha from '../views/novaSenha';
import Usuario from '../views/Usuario';

function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NovaSenha />} />
                <Route path="/senhas" element={<Usuario />} />
                <Route path="/gerente" element={<Gerente />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;