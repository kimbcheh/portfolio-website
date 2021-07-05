import { linkData } from '../data'

function Header() {
 return (
  <header>
   <nav className='bottom-border'>
    <span className='star'>&#x2736;</span>
    <h1 className='desktop-heading'> KIMBERLY CHEH</h1>
    <h1 className='mobile-heading'> KIMB.</h1>
    <ul>
     {linkData.map((link) => {
      return (
       <li key={link.title}>
        <a href={link.url}>{link.title}</a>{' '}
        <span className='symbol'>&#x2197;</span>
       </li>
      )
     })}
    </ul>
   </nav>
   <div className='hero-container bottom-border'>
    <p className='hero-text'>
     Kimberly is a front-end developer based in Melbourne, Australia &#128171;
    </p>
   </div>
  </header>
 )
}

export default Header
