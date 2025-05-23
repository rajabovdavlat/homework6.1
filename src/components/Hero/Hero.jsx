
import  './Hero.css'

function Hero() {
  return (
    <header className='header'>
      <nav>
        <img className='nav-brand' src="/logo.svg" alt="" />
        <div className='nav-menu'>
          <img src="/search.svg" alt="" />
          <img src="/shopping-cart.svg" alt="" />
          <a className='sign-up' href="#">Sign up</a>
          <a className='sign-in' href="#">Sign in</a>
        </div>
      </nav>
      <div className='hero'>
        <img className='hero-img' src="./hero-img.png" alt="" />
        <div className='hero-info'>
          <h1 className='hero_title'>Kembang Flower Mantap</h1>
          <p className='hero-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <div className="slider">
           <div className='s-left'>
             <div className='sld-left'>
                <img className='s-img' src="/arrow-left.svg" alt="" />
                <h3>Previous</h3>
             </div>
             <h2>Kaktus Plant</h2>
           </div>
           <div className='s-right'>
             <div className='sld-right'>
               <h3>Next</h3>
               <img className='s-img' src="/arrow-right.svg" alt="" />
             </div>
             <h2>Kaktus Plant</h2>
           </div>
         </div>
        </div>
        
      </div>
    </header>
    
  )
}

export default Hero