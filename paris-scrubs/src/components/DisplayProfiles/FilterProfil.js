import React from "react";
import PageProfiles from "./PageProfiles.json"
import PageProfileDisplay from "./PageProfileDisplay"
import Profilesearchbar from "../profilesearchbar"


class FilterProfil extends React.Component {
    state = {
        showGender: PageProfiles,
        // isLoading: false
    }
    // componentDidMount() {
    //     this.setState({isLoading: true})
    // }
    render() {
              // this.state.showGender.filter(profile => console.log(profile))
            //   if (!this.state.isLoading) {
            //     return <div>Loading</div>
            // } else 
             return (
                <div>  
                    {/* <div className="gridcapacity"> */}
                        {/* yolo */}
                             {/* {this.state.showGender.filter(profile => {
                                if(this.state.showFemal && this.state.showMal && this.state.showOther === true) {
                                  return(profile.gender.includes('femme') + profile.gender.includes('homme') + profile.gender.includes('autre') )}
                                  else if (this.state.showFemal && this.state.showOther === true)
                                  return(profile.gender.includes('femme') + profile.gender.includes('autre') )
                                  else if (this.state.showMal && this.state.showOther === true)
                                  return(profile.gender.includes('homme') + profile.gender.includes('autre') )
                                  else if (this.state.showFemal && this.state.showMal === true)
                                  return(profile.gender.includes('femme') + profile.gender.includes('homme'))
                                  else if (this.state.showMal === true)
                                  return(profile.gender.includes('homme') )
                                  else if (this.state.showFemal === true)
                                  return(profile.gender.includes('femme') )
                                  else if (this.state.showOther === true)
                                  return(profile.gender.includes('autre') )
                              }).map((profile, index) => (
                              <PageProfiles {...profile} />))} */}
                        
                    {/* </div> */}
                    <Profilesearchbar/>
                    <PageProfileDisplay/>

                </div>

            )
        }

    }



export default FilterProfil;
