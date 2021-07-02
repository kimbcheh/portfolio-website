import { linkData } from '../data'

function Header() {
 console.log(linkData)
 return (
  <header>
   <nav>
    <h1>KIMBERLY CHEH</h1>
    <h1>KIMB.</h1>
    <ul>
     {linkData.map((link) => {
      return (
       <li key={link.title}>
        <a href={link.url}>{link.title}</a>
       </li>
      )
     })}
    </ul>
   </nav>
   <p>
    Kimberly is a front-end developer based in Melbourne, Australia &#128171;
   </p>
  </header>
 )
}

export default Header
