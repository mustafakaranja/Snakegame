import React from 'react';
import Startgame from './Startgame'
import Rout from './Rout'

const StartButton = () =>{
     return (
      <div>
      <a className="ui positive button segment"
        href="/Startgame"      
       >
          Play Game  
       </a>
      </div>

     )
}

const App = () => {
    return (
        <div className="ui blue segment">
          <div className="ui container">
                <div className="ui inverted header segment">
                      Play Snake-Game
                  <div className="createdby">
                           Re-Createdby: Mustafa .Y. Karanjawala
                  </div>
                </div>
                <div className="ui secondary segment">
                     <div>
                         < StartButton />   
                      </div>
                      <div>
                        <Rout path='/Startgame'>
                           <Startgame />
                        </Rout>
                      </div>
                        
                    
                </div>
         </div>
        </div> 
         
    )
}

export default App;