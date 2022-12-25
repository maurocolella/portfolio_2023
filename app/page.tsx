import { LoadablePage } from '@/components/LoadablePage'
import { Logo } from '../lib/components/Logo'

export default function Home() {
  return <LoadablePage rawContent={`
    <div>
      <h1>About Me</h1>
      <h2>About Me</h2>
      <h3>About Me</h3>
      <h4>About Me</h4>
      <h5>About Me</h5>
      <h6>About Me</h6>
      <hr />
      <article>
        <h1>
          <Logo />
        </h1>
        <h1>Mauro Colella</h1>
        <h2>About Me</h2>
        <p>Hi, my name is Mauro Colella. I am a senior software developer with over twenty years of activity in the IT industry. I develop tailored solutions for great companies that offer great services and products.</p>
        <p>I specialize in web applications and full-stack development. From architecture through DevOps and data engineering, all the way to user and application interfaces, integrations, and complex visualizations. I am fluent with a broad range of technologies:
          T-shaped with a passion. And I am certified for this with multiple providers and vendors including Google, Oracle and more.</p>
        <p>I have been successfully freelancing my services for over ten years, with a strong focus on customer needs in both B2B and the general market.</p>
        <p>I am European, I trained in Switzerland, and I reside in Asia.</p>
        <p>When I am not in front of the computer, my interests range from being a dad to learning about art, design, motion graphics, architecture and much more.</p>
        <p>For me, command of information technology is a means to empower people to share and access information. It is first and foremost a means to enable and facilitate intercommunication.</p>
        <p>I&lsquo;d like to welcome you to my website. I hope you enjoy your visit, and I am looking forward to developing for you a platform that enables you to truly achieve and exceed every one of your professional targets and ambitions.</p>
        <p>It sounds simple but this is what I do.</p>
        <p>I make it simple. For you.</p>
      </article>
    </div>
  `} />
}
