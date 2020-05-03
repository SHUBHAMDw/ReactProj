 import React,{Component} from 'react'
 import PROJECTS    from './data/project'

 class Proj extends Component
 {
     render(){
         return (
            <div>
            <div>{this.props.pr.title}</div>
            <div>{this.props.pr.title}</div>
            </div>
         );
         }
 }

 class Projects extends Component
 {
     render()
     {
         return(
             <div>

                <div><h2>Highlighted Projects</h2></div>
                {PROJECTS.map(
                    X=>{

                        return (
                            <Proj  key={X.id} pr={X}/>
                        )
                    }

                )}

             </div>


         );
     }
 }

 export default Projects;