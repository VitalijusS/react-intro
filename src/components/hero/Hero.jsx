import logo from '/vite.svg';
import style from './Hero.module.css';
import { Button } from '../button/Button';
const imgStyle ={
  height: '24rem',
  width:'100%'
  };
  
export function Hero(){
    return (
        <section className={style.hero}>
          <div className={style.textContent}>
            <h1 className={style.title}>Vite next generations frontend tooling</h1>
            <p className={style.description}>Get ready for a development environment that can finally catch up with you.</p>
            <div className={style.btnList}>
              <Button url='#' text='Get started'/>
              <Button url='#' text='Why Vite?'/>
              <Button url='#' text='View on Github'/>
              <Button url='#' text='⚡ ViteCong 24!'/>
            </div>
          </div>
          <img src={logo} style={imgStyle} alt="Vite image" />
        </section>
    )
}