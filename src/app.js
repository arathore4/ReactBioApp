import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

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