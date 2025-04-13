// Exercise13.jsx
import React, { Component } from 'react';

const Q1 = () => {
  const m = "Hello, React!";
  return (
    <div>
      <h1>{m}</h1>
    </div>
  );
};

const Q2 = () => {
  const f = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {f.map((i, k) => <li key={k}>{i}</li>)}
    </ul>
  );
};

const Q3 = () => {
  const s = { color: 'red', fontSize: '20px' };
  return <p style={s}>Styled Message</p>;
};

const Q4 = () => {
  const a = 3;
  const b = 4;
  return <p>{a * a + b * b}</p>;
};

const Q5 = () => {
  const isMorning = true;
  return <p>{isMorning ? "Good Morning" : "Good Evening"}</p>;
};

const Q6 = () => {
  const d = new Date().getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return <p>{days[d]}</p>;
};

const Q7 = () => {
  const n = 7;
  let p = true;
  if (n <= 1) p = false;
  for (let i = 2; i < n; i++) if (n % i === 0) p = false;
  return <p>{n} is {p ? "" : "not "}prime</p>;
};

class Q8 extends Component {
  constructor() {
    super();
    this.state = { c: '', f: '' };
  }

  handleC = (e) => {
    const v = e.target.value;
    this.setState({ c: v, f: v ? (v * 9 / 5 + 32).toFixed(2) : '' });
  };

  handleF = (e) => {
    const v = e.target.value;
    this.setState({ f: v, c: v ? ((v - 32) * 5 / 9).toFixed(2) : '' });
  };

  render() {
    return (
      <div>
        <input type="number" value={this.state.c} onChange={this.handleC} placeholder="Celsius" />
        <input type="number" value={this.state.f} onChange={this.handleF} placeholder="Fahrenheit" />
      </div>
    );
  }
}

const Q9 = () => {
  const s = "React";
  const r = s.split('').reverse().join('');
  return <p>{r} - {s === r ? "Palindrome" : "Not Palindrome"}</p>;
};

const Q10 = () => {
  const [n, setN] = React.useState(0);
  const handleClick = () => setN(Math.floor(Math.random() * 100) + 1);
  return <button onClick={handleClick}>{n || "Click"}</button>;
};

const Q11 = () => {
  const y = 2024;
  const l = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  return <p>{y} is {l ? "" : "not "}a leap year</p>;
};

class Q12 extends Component {
  render() {
    return <p>Hello, {this.props.firstName} {this.props.lastName}!</p>;
  }
}

const Exercise13 = () => {
  return (
    <div>
      <Q1 />
      <hr />
      <Q2 />
      <hr />
      <Q3 />
      <hr />
      <Q4 />
      <hr />
      <Q5 />
      <hr />
      <Q6 />
      <hr />
      <Q7 />
      <hr />
      <Q8 />
      <hr />
      <Q9 />
      <hr />
      <Q10 />
      <hr />
      <Q11 />
      <hr />
      <Q12 firstName="Sekkappan" lastName="Vinaitheerthan" />
    </div>
  );
};

export default Exercise13;