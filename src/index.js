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
        <ul style={{ listStyleType: "none" }}>
            {osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)}
        </ul>
    )
}

const Yhteensa = ({ kurssi }) => {
    const tehtavienLkm = kurssi.osat.reduce((summa, tehtavat) => summa + tehtavat.tehtavia, 0);

    return (
        <div>Yhteensä {tehtavienLkm} tehtävää</div>
    )
}

const Kurssi = ({ kurssi }) => {

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi}/>
        </div>
    )
}

const Opetusohjelma = ({ kurssit }) => {
    const opetusohjelma = kurssit

    return (
    
    <ul style={{ listStyleType: "none" }}>
        {opetusohjelma.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>)}
    </ul>
    
    )
}

const App = () => {
    const kurssit = [
        {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
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
    },
    {
        nimi: 'Node.js',
        id: 2,
        osat: [
            {
                nimi: 'Routing',
                tehtavia: 3,
                id: 1
            },
            {
                nimi: 'Middlewaret',
                tehtavia: 7,
                id: 2
            }
        ]
    }
]

    return (
        <div>
            <Opetusohjelma kurssit={kurssit} />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
