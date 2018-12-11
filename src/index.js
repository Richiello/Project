import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss'
import 'semantic-ui-css/semantic.min.css'
import { Startpage } from  './startpage'

ReactDOM.render(
  <Startpage />,
  document.getElementById('app')
);

module.hot.accept();
