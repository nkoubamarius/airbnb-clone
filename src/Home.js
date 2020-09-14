import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home_section">
                
                 
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480" 
                    title="Des logements uniques"
                    description="Des tentes, des cabanes dans les arbres et plus encore : bien plus que de simples logements où passer la nuit."
                />
                <Card
                 src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480" 
                 title="Online Experience"
                 description="Des activités uniques a faire ensemble, organisées par des hotes du monde entier"
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480" 
                    title="Logements Entiers"
                    description="Des logements entiers confortables, avec de la place pour accueillir las amis ou la famille"
                />
            </div>
            <div className="home_section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/dab505d7-3a31-4499-813a-47b07e07f92c.jpg?aki_policy=large" 
                    title="Maison organique. Hôte : Gal"
                    price="150 dihrams"
                    description="This amazing home-made house is newly renovated and located on our small farm where we grow vegetables and fruit trees."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/084033d6-9691-4061-a7ca-601ac1a33d2d.jpg?aki_policy=x_large" 
                    title="Appartement en résidence entier. Hôte : Zineb"
                    price="250 dihrams"
                    description="Hello dear guests
                    My apartment is located in a safe and calm place. In the neighborhood there are many grocery shops, hair dresser, and coffeeshops ... The taxi and bus station are about 5 minutes walk !"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/4ea5ba27-254d-41ac-bd08-66e5aa52e05e.jpg?aki_policy=large" 
                    title="Appartement en résidence entier. Hôte : Zineb"
                    price="200 dihrams"
                    description="Hello dear guests
                    My apartment is located in a safe and calm place. In the neighborhood there are many grocery shops, hair dresser, and coffeeshops ... The taxi and bus station are about 5 minutes walk !"
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/efd38ae5-eb30-4ad9-84ac-ffc82a360966.jpg?aki_policy=x_large" 
                    title="Logement entier. Hôte : Hayat"
                    price="220 dihrams"
                    description="The appartement on the 3rd Floor.Bedroom with privet bath,kitchen,hall.there will be nothing shared"
                />
            </div>

        </div>
    )
}

export default Home
