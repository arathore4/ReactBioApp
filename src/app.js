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
                <div style={{display: 'flex',flexDirection: 'row', alignItems:'left'}}>
                    <p> &#10094; Abhishek Rathore  &#10095;</p>
                </div>
                <hr/>
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
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;