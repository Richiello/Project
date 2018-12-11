import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss'
import 'semantic-ui-css/semantic.min.css'
import { Startpage } from  './startpage'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Startpage />
    </BrowserRouter>,
    document.getElementById('app')
);

module.hot.accept();
