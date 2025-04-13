// Exercise14.jsx
import React from 'react';
import reactLogo from '../Css/Photo.jpeg';
import viteLogo from '../Css/Kendrick.jpg';

const Q1 = () => {
  return (
    <div>
      <img src={viteLogo} alt="Public" width="100"/>
      <img src={reactLogo} alt="Src" width="100"/>
    </div>
  );
};

const Q2 = () => {
  return (
    <form style={{border:'1px solid #ccc', padding:'20px', maxWidth:'300px'}}>
      <h3>Novell Services Login</h3>
      <div>
        <label>Username:</label><br/>
        <input type="text"/>
      </div>
      <div>
        <label>Password:</label><br/>
        <input type="password"/>
      </div>
      <div>
        <label>City of Employment:</label><br/>
        <input type="text"/>
      </div>
      <div>
        <label>Web server:</label><br/>
        <select>
          <option>Choose a server</option>
          <option>Server 1</option>
          <option>Server 2</option>
        </select>
      </div>
      <div>
        <label>Please specify your role:</label><br/>
        <input type="radio" name="role" value="Admin"/> Admin<br/>
        <input type="radio" name="role" value="Engineer"/> Engineer<br/>
        <input type="radio" name="role" value="Manager"/> Manager<br/>
        <input type="radio" name="role" value="Guest"/> Guest
      </div>
      <div>
        <label>Single Sign-on to the following:</label><br/>
        <input type="checkbox" name="service" value="Mail"/> Mail<br/>
        <input type="checkbox" name="service" value="Payroll"/> Payroll<br/>
        <input type="checkbox" name="service" value="Self-service"/> Self-service
      </div>
      <button type="button">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
};

const ProfileImage = () => {
  return <img src={reactLogo} alt="Profile" width="150"/>;
};

const UserInfo = () => {
  return (
    <div>
      <h3>Sekkappan Vinaitheerthan</h3>
      <p>23BCE1351</p>
      <p>sekka@example.com</p>
      <p>Web Developer | React Enthusiast</p>
    </div>
  );
};

const UserPosts = () => {
  const p = ['Post 1', 'Post 2', 'Post 3'];
  return (
    <ul>
      {p.map((i,k) => <li key={k}>{i}</li>)}
    </ul>
  );
};

const ProfilePage = () => {
  return (
    <div style={{border:'1px solid #ddd', padding:'20px', maxWidth:'500px'}}>
      <ProfileImage/>
      <UserInfo/>
      <h4>Posts:</h4>
      <UserPosts/>
    </div>
  );
};

const Exercise14 = () => {
  return (
    <div>
      <Q1/>
      <hr/>
      <Q2/>
      <hr/>
      <ProfilePage/>
    </div>
  );
};

export default Exercise14;