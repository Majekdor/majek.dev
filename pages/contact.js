import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout title="contact">
      <article>
        <h1>Contacting me</h1>
        <p>I try my best to reply promptly to all of my messages, but sometimes it can take a while. I'm not ignoring you!</p>

        <Section title="Questions about or requesting help with my Minecraft plugins">
          <p>If you have a question about one of my plugins, please use one of the following support systems and don't
          try to email me or anything like that.</p>
          <ul>
            <li><a href="https://github.com/MajekDev">GitHub</a> - if you've found a bug please open an issue.</li>
            <li><a href="https://discord.majek.dev">Discord</a> - if you have any other question/comment.</li>
          </ul>
        </Section>

        <Section title="Questions about my other projects">
          <p>If you have any questions about my other projects feel free to email me at <a href="mailto:kev@majek.dev">kev@majek.dev</a> and I'll
            try to get back to you as soon as possible. If it's a bug please open an issue on GitHub!</p>
        </Section>

        <Section title="Other">
          <p>If you are sure that your question / message doesn't fall into any of the categories above, feel free to
            email me at <a href="mailto:kev@majek.dev">kev@majek.dev</a> or join my <a href="https://discord.majek.dev">Discord</a>.</p>
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
