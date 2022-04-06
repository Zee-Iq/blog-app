import "./Header.css"

 const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">MERN</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.unsplash.com/photo-1649191717256-d4a81a6df923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
    </div>
  )
}

export default Header

