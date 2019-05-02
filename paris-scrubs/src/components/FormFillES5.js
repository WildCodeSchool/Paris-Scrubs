import React from "react";
import "./FormFill.css"

class FormFilmES5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            img: '',
            age: '',
            gender: '...un homme, une femme ou une chose ? : ',
            physic: '',
            mental: '',
            food:'',
            sex:'',
            }
            this.onChange = this.onChange.bind(this);
            this.submitForm = this.submitForm.bind(this);
        }
    

    //Création de la méthode "onChange"
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    //Création de la méthode de soumission du formulaire
    submitForm(e) {
        e.preventDefault();

            //Création de la configuration appelée par le "fetch"
            const config = {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            };
    
            //Création de l'url appelant la base de données "films" ???
            const url = "https://discaz.github.io/API-profiles/api/all.json";

        
            //Création du "fetch" pour envoyer les données via le formulaire
            fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Profil ajouté avec l'ID ${res}!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout de votre profil');
            });
    }
    
    render() {
        return (
            <div className="FormProfil">
                <h2 className="center">Créer votre profil</h2>

                <h3 className="center">Et lâchez-vous ou on va vous jeter !!!</h3>

                <form onSubmit={this.submitForm}>

                <fieldset>
                    <legend className="legend">Allez ! Donnez-nous gentiment votre identité...</legend>
                    
                    {/* SURNOM */}
                    <div className="form-data">
                    <label htmlFor="username">Votre surnom</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    </div>

                    {/* GENRE */}
                    <div className="form-data">
                    <label htmlFor="gender">Et vous êtes ?</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        onChange={this.onChange}
                        value={this.state.gender}
                    />
                    </div>

                    {/* PHOTO */}
                    <div className="form-data">
                    <label htmlFor="img">Votre photo</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={this.onChange}
                        value={this.state.img}
                    />
                    </div>

                    {/* AGE */}
                    <div className="form-data">
                    <label htmlFor="age">Votre âge</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        onChange={this.onChange}
                        value={this.state.age}
                    />
                    </div>
                
                </fieldset>

                <section className="height"></section>

                <fieldset>

                    <legend className="legend">Décrivez-nous vos défauts dont vous êtes le plus fier </legend>

                    {/* DEFAUT PHYSIQUE */}
                    <div className="form-data">
                    <label htmlFor="physic">Vos défauts physiques</label>
                    <input
                        type="text"
                        id="physic"
                        name="physic"
                        onChange={this.onChange}
                        value={this.state.physic}
                    />
                    </div>

                    {/* DEFAUT MENTAL */}
                    <div className="form-data">
                    <label htmlFor="mental">Vos défauts psychologiques</label>
                    <input
                        type="text"
                        id="mental"
                        name="mental"
                        onChange={this.onChange}
                        value={this.state.mental}
                    />
                    </div>

                </fieldset>

                <section className="height"></section>

                <fieldset>

                    <legend className="legend">Et autre chose encore ?</legend>

                    {/* FOOD */}
                    <div className="form-data">
                    <label htmlFor="food">Vos goûts culinaires</label>
                    <input
                        type="text"
                        id="food"
                        name="food"
                        onChange={this.onChange}
                        value={this.state.food}
                    />
                    </div>

                    {/* SEX */}
                    <div className="form-data">
                    <label htmlFor="sex">Vos préférences sexuelles</label>
                    <input
                        type="text"
                        id="sex"
                        name="sex"
                        onChange={this.onChange}
                        value={this.state.sex}
                    />
                    </div>

                    <section className="height"></section>
                    <hr />


                    <div className="form-data">
                    <input type="submit" value="Valider votre profil" />
                    </div>
                </fieldset>
                </form>
                </div>
        );
    }

}

export default FormFilmES5;