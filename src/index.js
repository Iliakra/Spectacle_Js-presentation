import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import PresentationDeck from './components/PresentationDeck';
import { Provider } from'react-redux';
import store from './store/index'


const Presentation = () => (
  <Fragment>
    <Menu store={store}/>
    <PresentationDeck store={store}/>
  </Fragment>
  
);

ReactDOM.render(<Provider store={store}><Presentation /></Provider>, document.getElementById('root'));
