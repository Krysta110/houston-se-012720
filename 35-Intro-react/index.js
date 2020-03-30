console.log("Are we here?")

const Text = () => {
  return React.createElement("h1", {}, "012720")
}

const NavBar = (props) => {
 return( <div className={`ui inverted ${props.color} menu`}>
  <a className='item'>
    <h2 className="ui header">
      <i className={`${props.icon} icon`}></i>
      <div className="content">
        bugger
      </div>
    </h2>
  </a>
</div> )

//"paw icon"
// return React.createElement("div", {className:`ui inverted red menu` }, 
//     React.createElement("a", {className: "item"}, 
//     React.createElement("h2",{className: "ui header"}, 
//     [
//         React.createElement("i",{className: `bug  icon`}, null),
//         React.createElement("div", {className:"content" }, "bugger")

//     ])))
}

const App = () => {
 return( 
   <div>
      <NavBar color="green" icon="paw" />
      <Text/>
   </div>
 )
}

ReactDOM.render(
  <App/>,
  document.getElementById("container") 
)