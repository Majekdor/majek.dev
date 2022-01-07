import Layout from '../components/layout';
import React, {useEffect, useState} from 'react';

export default function Tvshows() {
    const [selection, setSelection] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        getSelection().then(selection => {
            setSelection(selection);
        })
    }

    return (
        <Layout title="movies">
            <article>
                <h1>TV Show Selector</h1>
                <p>This is a simple tv show selector. There are no categories so just click the button.</p>
                <hr/>
                <button type="submit" onClick={handleSubmit}>Find A Show</button>
                <br/>
                <br/>
                <p>{selection}</p>
            </article>
        </Layout>
    )
}

async function getSelection() {
    const response = await fetch("/assets/tvshows.json");
    let json = await response.json();
    let tvShows = json["tv-shows"];

    return "Selection: " + tvShows[getRandom(0, tvShows.length - 1)];
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
