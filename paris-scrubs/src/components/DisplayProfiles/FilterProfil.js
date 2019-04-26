import React from "react";
import PageProfiles from "./PageProfiles.json"
import PageProfileDisplay from "./PageProfileDisplay"
import Profilesearchbar from "./components/Profilesearchbar"




class FilterProfil extends React.Component {
    state = {
        showGender: PageProfiles,
        isLoading: false
    }
    componentDidMount() {
        this.setState({isLoading: true})
    }
    render() {
              // this.state.showGender.filter(profile => console.log(profile))
              if (!this.state.isLoading) {
                return <div>Loading</div>
            } else 
            return (
                <div>  
                    <div className="gridcapacity">
                        yolo
                        {
                            // PageProfiles.filter( profile => <p>{profile.gender}</p> )
                        }
                    </div>
                    <Profilesearchbar/>
                    <PageProfileDisplay/>

                </div>

            )
        }

    }



export default FilterProfil;
