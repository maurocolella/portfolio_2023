import { LoadablePage } from '@/containers/LoadablePage'
import { prepareAnimatableContent } from '@/utils/prepareAnimatableContent'

export default function Home({ params } : { params: { slug?: string }}) {
  const content = params?.slug?.[0] === 'about' ?
    `
    <div>
      <article>
        <h2>About Me</h2>
        <p>Hi, my name is Mauro Colella. I am a senior software developer with over twenty years of activity in the IT industry. I develop tailored solutions for great companies that offer great products and services.</p>
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
  `
    :
    `<div>
      <article>
        <h2>Lorem Ipsum Daily</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed orci ut justo rutrum sodales vitae a leo. Mauris nisl velit, fermentum et sapien vel, semper pharetra nulla. Ut vulputate, turpis at interdum pulvinar, libero dolor euismod nisi, at finibus odio ante ut lacus. Sed vulputate magna sed velit pulvinar, fringilla eleifend lacus hendrerit. Proin lacinia lorem nec dolor sagittis, vitae ultrices erat accumsan. Curabitur sapien dui, interdum ac imperdiet vitae, vehicula eu nisi. Vestibulum et sapien eros. Duis ex odio, molestie at lorem at, accumsan rutrum sem. In in purus in nibh gravida porta. Donec ultricies, nulla a auctor aliquam, velit purus interdum odio, quis ullamcorper ex diam sed nisi.
        </p>
        <p>
          Vestibulum sodales justo ac enim posuere, quis volutpat massa dapibus. Curabitur eget enim ac metus feugiat condimentum. Integer vestibulum elit ut erat luctus, at scelerisque elit aliquet. Nunc pellentesque, metus vel auctor volutpat, nulla sapien efficitur nulla, quis viverra ligula turpis nec purus. Fusce augue nisi, blandit non diam sit amet, laoreet placerat neque. Aliquam elementum suscipit nunc sit amet scelerisque. Suspendisse porta diam libero, et egestas magna tempus eget. Quisque eu fringilla est. Pellentesque ex nisi, aliquet eget tellus sed, congue vulputate mauris. Praesent in finibus ante, nec aliquam libero. Fusce quis est tempus, efficitur neque et, ullamcorper arcu. Morbi nec viverra lacus. Aliquam ut eros a nisi sagittis varius quis nec sapien. In porttitor ornare mattis. Cras vitae mi nibh. Sed id risus euismod, ornare orci non, ultrices tellus.
        </p>
        <p>
          Aliquam scelerisque, elit et imperdiet accumsan, lacus nisi ullamcorper turpis, vitae consectetur neque massa in ante. Pellentesque auctor vehicula elit, vel sagittis magna ullamcorper vitae. Nulla molestie tortor nec cursus cursus. Morbi porta gravida pretium. Donec est lectus, faucibus nec dictum vitae, dictum non ante. Ut ac dolor auctor, aliquet metus laoreet, cursus orci. Etiam ac facilisis orci, in consectetur lacus. Quisque vehicula facilisis aliquam. Donec tincidunt nunc quis justo gravida, ut commodo nisi eleifend. Etiam non porttitor lectus. Curabitur faucibus arcu in ex malesuada tincidunt. Cras lobortis at magna nec aliquam. Pellentesque et tortor at metus egestas finibus. Vestibulum maximus mollis lacus eu malesuada. In non tortor sem.
        </p>
        <p>
          Maecenas nec tellus vestibulum, gravida orci porta, pellentesque neque. Mauris tempus eros at ligula congue fermentum. Morbi sed purus felis. Suspendisse eu venenatis massa, tempor rutrum nunc. Nam venenatis cursus finibus. Nulla sit amet posuere elit. Proin bibendum quam libero, non porttitor lectus lobortis et.
        </p>
        <p>
          Mauris vitae est nisi. Donec quis turpis ullamcorper, aliquet nisi nec, tincidunt lacus. Morbi aliquet efficitur lectus, quis posuere mi tristique sit amet. Mauris vulputate est augue, in vulputate elit vulputate vitae. Curabitur eleifend augue ac blandit mattis. In faucibus porta scelerisque. Praesent condimentum sapien leo, nec porttitor odio luctus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis mattis dolor. Quisque sed dolor ut leo pretium fermentum. Pellentesque iaculis mollis venenatis. Aliquam quis neque ultrices, feugiat mauris id, pulvinar nibh. Nunc interdum, massa in iaculis venenatis, risus augue iaculis arcu, non gravida nisl ante quis nibh. In sit amet massa vitae turpis egestas tempus eu eu sapien. Phasellus varius faucibus quam vel dictum.
        </p>
      </article>
    </div>`

  return <LoadablePage
    rawContent={content}
    wrappedContent={prepareAnimatableContent(content)}
  />
}
