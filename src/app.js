import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profileImg from './assets/profileImage.PNG';

class App extends Component {

    constructor() {
        super();
        this.state = { displayBio : false };
    }

    readMore() {
        this.setState (
            {
                displayBio: true
            }
        )
    }

    showLess() {
        this.setState (
            {
                displayBio: false
            }
        )
    }

    render(){

        return (
            <div>
                <div style={{backgroundColor: '#E5B802', marginBottom:10}}>
                <div style={{display: 'flex'}}>
                    <p style={{ margin:20 }}> &#10094; Abhishek Rathore  &#10095;</p>
                    <div style={{position: 'absolute', right: 0, margin:20 }}>
                        <a href='a' style={{margin:5, color: '#0013D1'}}>About</a>
                        <a href='a' style={{margin:5, color: '#0013D1'}}>Experience</a>
                        <a href='a' style={{margin:5, color: '#0013D1'}}>Projects</a>
                        <a href='a' style={{margin:5, color: '#0013D1'}}>Skills</a>
                    </div>
                </div>
                </div>
                <img src={profileImg} alt='profile' className="profile" />
                <h1>Hello!!</h1>
                <p>My Name is Abhihek</p>
                { 
                    this.state.displayBio ? (
                     <div>
                      <p>I live in Brookfield</p>
                      <p>I love ReactJS</p>
                      <button onClick={()=>this.showLess()}>Show Less</button>
                     </div>
                     ) : (
                         <div>
                             <button onClick={()=>this.readMore()}>Read More</button>
                         </div>
                     )
                }

                <hr />
                <Projects />
                <hr style={{height:1, background:'#E5B802'}} />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;