import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({ kurssi }) => {
    return (
        <h1>{kurssi.nimi}</h1>
    )
}

const Sisalto = ({ kurssi }) => {
    return (
        <Osa kurssi={kurssi} />
    )
}

const Osa = ({ kurssi }) => {
    const osat = kurssi.osat

    return (
        <ul style={{listStyleType: "none"}}>
            {osat.map(osa => <li key= {osa.id}>{osa.nimi} {osa.tehtavia}</li>)}
        </ul>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
        </div>

    )
}

const App = () => {
    const kurssi = {

        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
                <Kurssi kurssi={kurssi} />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
