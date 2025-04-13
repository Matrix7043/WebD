import React, { useState, useEffect, useReducer, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => <h1>{title}</h1>;
const Footer = () => <footer>2025 Sekkappan Vinaitheerthan (23BCE1351)</footer>;

const Content = () => {
  const [joke, setJoke] = useState('Click the button for a joke');
  const jokes = [
    'Why don’t scientists trust atoms? Because they make up everything!',
    'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.'
  ];
  const getJoke = () => setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  return (
    <div>
      <p>{joke}</p>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
};

const AppComponent = () => (
  <div>
    <Header title="Joke"/>
    <Content/>
    <Footer/>
  </div>
);

const StyledButton = () => (
  <button style={{
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}>
    Styled Button
  </button>
);

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor');
  }

  componentDidMount() { console.log('componentDidMount'); }
  componentDidUpdate() { console.log('componentDidUpdate'); }
  componentWillUnmount() { console.log('componentWillUnmount'); }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update ({this.state.count})
        </button>
      </div>
    );
  }
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
};

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke');
    }
    setLoading(false);
  };

  useEffect(() => { fetchJoke(); }, []);

  return (
    <div>
      <p>{loading ? 'Loading...' : joke}</p>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Fetching...' : 'New Joke'}
      </button>
    </div>
  );
};

const FocusForm = () => {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.focus();
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me"/>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

const ThemeContext = React.createContext();

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      padding: '20px',
      margin: '10px 0'
    }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const ParentComponent = () => {
  const message = 'Hello from Parent Component';
  return <ChildComponent message={message}/>;
};

const ChildComponent = ({ message }) => <p>{message}</p>;
ChildComponent.propTypes = {
  message: PropTypes.string.isRequired
};

const FormWithState = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      <p>Live Preview: {name} {email}</p>
    </form>
  );
};

const FormWithRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(`Submitted: ${nameRef.current.value}, ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name"/>
      <input ref={emailRef} placeholder="Email"/>
      <button type="submit">Submit</button>
      <p>{submittedData}</p>
    </form>
  );
};

const Exercise15 = () => {
  const [theme, setTheme] = useState('light');
  const [showLifecycle, setShowLifecycle] = useState(true);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        
        <h3>1.</h3>
        <AppComponent/>
        <hr/>
        
        <h3>2-4.</h3>
        <StyledButton/>
        <hr/>
        
        <h3>5.</h3>
        <button onClick={() => setShowLifecycle(!showLifecycle)}>
          {showLifecycle ? 'Hide' : 'Show'} Lifecycle Component
        </button>
        {showLifecycle && <LifecycleDemo/>}
        <hr/>
        
        <h3>6.</h3>
        <Counter/>
        <hr/>
        
        <h3>6.</h3>
        <CounterWithReducer/>
        <hr/>
        
        <h3>7.</h3>
        <JokeFetcher/>
        <hr/>
        
        <h3>8.</h3>
        <FocusForm/>
        <hr/>
        
        <h3>9.</h3>
        <ThemeSwitcher/>
        <hr/>
        
        <h3>10-11.</h3>
        <ParentComponent/>
        <hr/>
        
        <h3>12.</h3>
        <FormWithState/>
        <hr/>
        
        <h3>12.</h3>
        <FormWithRef/>
      </div>
    </ThemeContext.Provider>
  );
};

export default Exercise15;