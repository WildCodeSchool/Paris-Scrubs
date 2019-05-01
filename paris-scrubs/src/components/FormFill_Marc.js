import React from "react"
import "./FormFill.css"


class FormFill extends React.Component {
state = {
  username : "",

  aversion : "" ,
  badFood : "" ,
  film : "",
  goodFood : "",
  mail:"",
  musique : "",
  physique : "",
  psychologie : "",
  punchline : "",
  sexualite : "",
  story :"",
}

typingChange = event => { 
  this.setState ({[event.target.name] : event.target.value })
}

  render () {
    return (
      
    <form className="formfillContainer">
        
      {/* FILLING AREA 1 : EMAIL      
      
      <div className = "formfillMail"> 
        <label htmlFor="fillMail">
          Votre Email : &nbsp;
        </label>
        <p>
          {this.state.mail}
        </p>
        <div>
          <input name = {this.props.mail}  type="email" onChange = {this.typingChange} placeholder="xxxx@monemail.com" />
        </div>
      </div> */}
      
      {/* FILLING AREA 2 : LASTNAME/FIRSTNAME*/}      
      
      <div className = "formfillName">
        <label htmlFor="fillName">
          Votre surnom : &nbsp;
        </label>
        <p>
          {this.state.username}
        </p>
        <div>
          <input 
          name = {this.props.username}  
          type="text" 
          onChange = {this.typingChange} 
          placeholder="Mon surnom de Scrubber"/>
        </div>
      </div> 
      
      {/* FILLING AREA 3 : QUOTE

      <div className = "formfillPunchline">
        <label htmlFor="fillPunchline">
          Votre Punchline : &nbsp;
        </label>
        <p>
          {this.state.punchline} 
        </p>
        <div>
          <input name={this.props.punchline} type="text" onChange = {this.typingChange} placeholder="ma punchline"/>
        </div> 
      </div>*/}
    
      {/* FILLING AREA 4 : FLAWS*/}

      <div className="formfillFlaw">
          
        <label htmlFor="fillFlaw">
          Vos Defauts :
        </label>
        
        <ul>
          
          <li>
            <h3>
            {this.state.badFood}
            </h3>
          <div>
            <input name ={this.props.badFood} type="text" onChange = {this.typingChange} placeholder="je n'aime pas manger..."/>
          </div>
          </li>
          
          <li>
            <h3>
              {this.state.psychologie}
            </h3>
            <div>
              <input name ={this.props.psychologie} type="text" onChange = {this.typingChange} placeholder="mes instabilites psychologiques"/>
            </div>
          </li>
          
          <li>
            <h4>
              {this.state.physique} test
            </h4>   
            <div>
              <input name ={this.props.physique} type="text" onChange = {this.typingChange} placeholder="mes defauts physiques"/>
            </div>
          </li>
          
          <li>
            <h3>
                {this.state.aversion}
            </h3>   
            <div>
              <input name ={this.props.aversion} type="text" onChange = {this.typingChange} placeholder="Je deteste"/>
            </div>
          </li>
        </ul>
        
      </div>

      {/* FILLING AREA 5 : DELIGHTS*/}
      
        <div className="formfillDelights">
        
        <label htmlFor="fillDelights">
          Vos Plaisirs :
        </label>
          
          <ul>
            <li>
              <h3>
              {this.state.film}
              </h3>
            <div>
              <input name ={this.props.film} type="text" onChange = {this.typingChange} placeholder="j'aime regarder..."/>
            </div>
            </li>
            
            <li>
              <h3>
                {this.state.musique}
              </h3>
              <div>
                <input name ={this.props.musique} type="text" onChange = {this.typingChange} placeholder="j'aime ecouter..."/>
              </div>
            </li>
            
            <li>
              <h3>
                {this.state.sexualite}
              </h3>   
              <div>
                <input name ={this.props.sexualite} type="text" onChange = {this.typingChange} placeholder="mes penchants sexuels"/>
              </div>
            </li>
            
            <li>
              <h3>
                  {this.state.goodFood}
              </h3>   
              <div>
                <input name ={this.props.goodFood} type="text" onChange = {this.typingChange} placeholder="Je mange..."/>
              </div>
            </li>
          </ul>
        
        </div>

        {/* FILLING AREA 6 : STORY*/}

          <div className= "formfillStory">

            <label for="fillStory">
              Votre Histoire :
            </label>
            <textarea 
              cols="70" 
              name={this.props.story}
              onChange={this.typingChange}
              placeholder="Mon histoire"
              rows="10" 
              value={this.state.story} >
            </textarea>
          </div>

        {/* FILLING AREA 7 : SUBMIT*/}

    
          <div className="formfillSubmit">
            <input type="submit" value="Envoyer le formulaire"/>
          </div>
    
    </form>

    )
  }
}

export default FormFill
          
            
