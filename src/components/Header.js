function Header({ linkData }) {
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
  </header>
 )
}

export default Header
