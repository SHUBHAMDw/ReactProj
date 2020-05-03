import React,{Component} from 'react';
import Project from './Project'
import Jokes from './Jokes'

class App extends Component
{
    constructor()
    {
        super();
        this.state={bio :false}
       this.togglebio= this.togglebio.bind(this);
    }

    togglebio()
    {
         this.setState({bio: !this.state.bio});
    
    }
    render()
    {
        return(

            <div>
                    <p>Hi my name is Shubham and I am a Software Engineer.</p>
                    <p>I am always looking forward to work on meaningful projects.</p>
            
           {
               this.state.bio ? (
                    <div>I like clicking photo
                    <button onClick={this.togglebio}>Less Info</button>
                    </div>
           ) : <button onClick={this.togglebio}>More Info</button>
           }

           <div><Project></Project></div>
           <div><Jokes></Jokes></div>
           </div>

        )
    }

}

export default App;