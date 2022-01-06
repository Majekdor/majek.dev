import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Domain />
      <Projects />
    </Layout>
  )
}

const AboutMe = () => {
  return (
    <article>
      <h1>About me</h1>
      <p>I use the nickname "<b>Majekdor</b>" or sometimes just "<b>Majek</b>" for most of my accounts related to development and gaming.</p>
      <p>Among other things, I'm a <b>software developer</b> and maintain/contribute to a number of <b>open
        source</b> projects in my spare time.</p>
      <p>If you'd like to contact me, you can find how to reach me on my <Link href="/contact">contact page</Link>.</p>
      <p>You can find me (most actively) on GitHub, <a href="https://github.com/Majekdor">@Majekdor</a>.</p>
    </article>
  )
}

const Domain = () => {
  return (
    <article>
      <h1>This domain</h1>
      <p>There are some sites and services available under this domain.</p>
      <ul>
        <li><a href="https://repo.majek.dev/"><b>repo.</b>majek.dev</a> - maven repository</li>
        <li><a href="https://bytebin.majek.dev/"><b>bytebin.</b>majek.dev</a> - content storage web service</li>
      </ul>
      <p>I try my best to keep these services available. My Maven repository has had good uptime for over a year now.</p>
    </article>
  )
}

const Projects = () => {
  return (
    <article>
      <h1>My projects</h1>
      <p>I work on a number of open source projects in my spare time.</p>

      <Project repo="MajekDev/HexNicks">
          <li>HexNicks is a <b>nickname</b> plugin for Minecraft servers, written in Java.</li>
          <li>At time of writing, it has 4,000+ downloads on Spigot.</li>
          <li>It supports color codes and gradients from <a href="https://docs.adventure.kyori.net/minimessage">MiniMessage</a> as well as legacy Spigot codes if enabled.</li>
      </Project>

      <Project repo="MajekDev/PartyChat">
          <li>PartyChat is a <b>group chat</b> plugin for Minecraft servers, written in Java.</li>
          <li>The project plugin allows players to create a private party to chat with a select group of people online.</li>
      </Project>

      <Project repo="Majekdor/statbot">
        <li>statbot is a <b>discord bot</b> for viewing your stats from various games, written in JavaScript.</li>
        <li>At the time of writing, it supports Rocket League ranks and stats as well as Valorant ranks.</li>
      </Project>
      
      <section>
        <h3>Other</h3>
        <p>I've also created and/or made significant contributions to a number of other projects.</p>
        <ul>
          <BriefProject repo="MajekDev/PvPToggle" desc="pvp plugin for Bukkit Minecraft servers" />
          <BriefProject repo="FarLandsMC/RegionProtection" desc="region plugin for Bukkit Minecraft servers" />
          <BriefProject repo="FarLandsMC/FarLands" desc="custom plugin for the FarLandsMC Minecraft server" />
          <li>... and more! You can find all of my public repositories on my <a href="https://github.com/Majekdor">GitHub profile</a>.</li>
        </ul>
      </section>
    </article>
  )
}

const Project = ({ repo, children }) => {
  return (
    <section>
      <h3><a href={'https://github.com/' + repo}>{repo}</a></h3>
      <ul>
        {children}
      </ul>
    </section>
  )
}

const BriefProject = ({ repo, desc }) => {
  return <li><a href={'https://github.com/' + repo}>{repo}</a> ({desc})</li>;
}
