import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContactComponent } from './components/contact.component';
import { CostComponent } from './components/cost.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { ServicesComponent } from './components/services.component';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderComponent></HeaderComponent>
    <HeroComponent></HeroComponent>
    <ServicesComponent></ServicesComponent>
    <CostComponent></CostComponent>
    <ContactComponent></ContactComponent>
    <FooterComponent></FooterComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
