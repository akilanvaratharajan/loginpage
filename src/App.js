import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      userName: '',
      password: ''
    }
  }
  changeValue = (e) => {
this.setState({
  [e.target.name]: e.target.value
});
  }

  render() {
  return (
         
    <main>
  
  <div className="formWrap">
    <div className="header">
      <div>LOG IN</div>
    </div>
    <div className="fields">
      <div className="fieldWrap">
        <img src="/images/user.png" alt="" className="img"/>
        <input placeholder="Enter your username" name="userName" onChange={(e) => this.changeValue(e)} value={this.state.userName} />
    </div>
       <div className="fieldWrap">
        <img src="/images/key.png" alt="" className="img" />
        <input placeholder="Enter your password" name="password" onChange={(e) => this.changeValue(e)} value={this.state.password} />
    </div>
       <div className="fieldWrap">
        <img src="/images/computer.png" alt="" className="img"/>
         <input value="Drawer 01" className="selectip" />
    </div>
    </div>
      
        
      <div className="keyboard-container">
        <div className="keyboard">
         <div className="wrap">
           <div className="key">`</div>
            <div className="key">1</div>
            <div className="key">2</div>
            <div className="key">3</div>
           <div className="key">4</div>
            <div className="key">5</div>
            <div className="key">6</div>
            <div className="key">7</div>
            <div className="key">8</div>
            <div className="key">9</div>
            <div className="key">0</div>
            <div className="key">-</div>
           <div className="key">=</div>
           <div className="key">Bksp</div>
          </div>
          
           <div className="wrap">
           <div className="key">Tab</div>
            <div className="key">q</div>
            <div className="key">w</div>
            <div className="key">e</div>
           <div className="key">r</div>
            <div className="key">t</div>
            <div className="key">y</div>
            <div className="key">u</div>
            <div className="key">i</div>
            <div className="key">o</div>
            <div className="key">p</div>
            <div className="key">[</div>
           <div className="key">]</div>
           <div className="key">\</div>
          </div>
          
           <div className="wrap">
            <div className="key">a</div>
            <div className="key">s</div>
            <div className="key">d</div>
           <div className="key">f</div>
            <div className="key">g</div>
            <div className="key">h</div>
            <div className="key">j</div>
            <div className="key">k</div>
            <div className="key">l</div>
            <div className="key">;</div>
            <div className="key">'</div>
           <div className="key spl">Enter</div>
          </div>
          
            <div className="wrap">
            <div className="key">shift</div>
            <div className="key">z</div>
            <div className="key">x</div>
           <div className="key">c</div>
            <div className="key">v</div>
            <div className="key">b</div>
            <div className="key">n</div>
            <div className="key">m</div>
            <div className="key">,</div>
            <div className="key">.</div>
            <div className="key">/</div>
           <div className="key">Shift</div>
          </div>
        
          <div className="wrap">
            <div className="key spl">Accept</div>
            <div className="key space"></div>
           <div className="key spl">Cancel</div>
          </div>
         
        </div>
      </div>
    <div className="btnWrap">
      <button className="loginBtn" onClick={() => alert(JSON.stringify(this.state))}>Log In</button>
    </div>
  </div>
    
    </main>

   


    
  );
}
}

export default App;
