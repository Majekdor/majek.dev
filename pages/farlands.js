import Layout from '../components/layout';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FarLands() {
    return (
        <Layout title="farlands">
            <article>
                <h1>FarLands Files</h1>
                <p>All public files from the FarLands Minecraft Server, including map downloads.</p>

                <Section title="FarLands v1: Rising">
                    <p>FarLands v1 ran from <b>January 27th, 2019</b> until <b>June 17th, 2019</b>.</p>
                    <ul>
                        <li>
                            <p>Unfortunately I do not have the v1 map at this time.</p>
                        </li>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/flv1homes.txt"><button><FontAwesomeIcon icon={faEye}/> View Homes</button></a> - View a list of player homes from v1.
                        </li>
                    </ul>
                </Section>

                <Section title="FarLands v2: Odyssey">
                    <p>FarLands v2 ran from <b>June 28th, 2019</b> until <b>July 10th, 2020</b>.</p>
                    <ul>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/farlandsv2.zip">
                                <button><FontAwesomeIcon icon={faDownload} /> Download Map</button></a> - Download the v2 map.
                            <br/>
                            <p><b>Warning</b>: The v2 map is 30GB!</p>
                        </li>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/flv2homes.txt"><button><FontAwesomeIcon icon={faEye} /> View Homes</button></a> - View a list of player homes from v2.
                        </li>
                    </ul>
                </Section>

                <Section title="FarLands v3: Sanctuary">
                    <p>FarLands v3 ran from <b>July 11th, 2020</b> until <b>December 31st, 2021</b>.</p>
                    <ul>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/farlandsv4.zip">
                                <button><FontAwesomeIcon icon={faDownload} /> Download Map</button></a> - Download the v3 map.
                            <br/>
                            <p><b>Warning</b>: The v3 map is 40GB!</p>
                        </li>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/flv3homes.txt"><button><FontAwesomeIcon icon={faEye} /> View Homes</button></a> - View a list of player homes from v3.
                        </li>
                    </ul>
                </Section>

                <Section title="FarLands v4: New Heights">
                    <p>FarLands v4 ran from <b>January 1st, 2022</b> until <b>June 16th, 2023</b>.</p>
                    <ul>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/farlandsv4.zip">
                                <button><FontAwesomeIcon icon={faDownload} /> Download Map</button></a> - Download the v4 map.
                            <br/>
                            <p><b>Warning</b>: The v4 map is 45GB!</p>
                        </li>
                        <li>
                            <a href="https://farlandsmc.s3.amazonaws.com/flv4homes.txt"><button><FontAwesomeIcon icon={faEye} /> View Homes</button></a> - View a list of player homes from v4.
                        </li>
                    </ul>
                </Section>

                <Section title="FarLands v5: Expedition">
                    <p>FarLands v5 started <b>June 17th, 2023</b> and is still running. Come join us! The ip is <code>farlandsmc.net</code> and
                        you can join our Discord <a href="https://discord.gg/NE22xkYmQ5"><b>here</b></a>.</p>
                </Section>
            </article>
        </Layout>
    )
}

const Section = ({ title, children }) => {
    return (
        <section>
            <h3>{title}</h3>
            {children}
        </section>
    )
}
