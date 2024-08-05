import logo from '/vite.svg'

const imgStyle ={
  height: '15rem',
  };

export function Hero(){
    return (
        <section>
          <div>
            <h1>Vite next generations frontend tooling</h1>
            <p>Get ready for a development environment that can finally catch up with you.</p>
            <div>
              <a href="#">Get started</a>
              <a href="#">Why Vite?</a>
              <a href="#">View on Github</a>
              <a href="#">⚡ ViteCong 24!</a>
            </div>
          </div>
          <img src={logo} style={imgStyle} alt="Vite image" />
        </section>
    )
}