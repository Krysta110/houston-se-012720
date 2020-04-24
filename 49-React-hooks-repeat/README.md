# React Hooks


* What is Hooks?
    * to hook react class functionality to a functional component
    * Why to use hooks?
    * react v16.8
* useState()
    * replace: this.setState()
    * example: `const [conter,setCounter] = useState(0)`
    * intial counter value is `0`
    * `setCounter(newValue)` is a function to change value of counter
* useEffect()
    * replaces class lifecycle methods(`componentDidMount(), componentDidUpdat(), componentWillUnmount()`)
```JavaScript
    useEffect(() => console.log("mounted or updated / rendered"))
    useEffect(() => console.log("mounted"),[])
    useEffect(() => console.log("State changed"),[state.value])
    useEffect(() => {
         return () => {
          console.log('will unmount');
        }
       }, [])
```
* Router props
    * router v5
    * useHistory()
    * useParams()
* React-redux
    * useContext()
    * useReducer()

#### Readings:
* [React Hooks for beginners](https://www.valentinog.com/blog/hooks/) 
* [Benefits of React Hooks](https://www.darrenlester.com/blog/benefits-of-react-hooks)
* [Why React Hooks?](https://hackernoon.com/why-react-hooks-a-developers-perspective-2aedb8511f38)
* [The hooks of react router](https://css-tricks.com/the-hooks-of-react-router/)
* [Lifecycle with hooks](https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n)
