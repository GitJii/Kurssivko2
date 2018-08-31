import React from 'react'

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

export default Kurssi