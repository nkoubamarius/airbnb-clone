import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">

            <div className="searchPage__info">
                <p>62 Stays - 26 August to 30 August - 2 Guest</p>
                <h1>Stays nearby</h1>

                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and Beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>


            <SearchResult
            img="https://a0.muscache.com/im/pictures/3c753b76-8145-40bc-a631-cf6a37330fb0.jpg?aki_policy=large" location="Hassan" title="Logement entier" description="Appartement meublé, location moyenne et longue durée. TL , machine à laver ,cuisiniére, nécessaire de cuisine, draps couverture. 1 chambre 1 grand lit,
            placard.
            1 salon Marocain. Porte d'entrée sécurisé - possibilité de ménage- 4ème étage sans ascenseur." star={4.89} price="$50 / night" total="$300 total"
            />

        </div>
    )
}

export default SearchPage
