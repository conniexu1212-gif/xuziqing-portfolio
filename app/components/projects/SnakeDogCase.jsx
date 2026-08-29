import Image from 'next/image';
import Link from 'next/link';

const assetRoot = '/assets/projects/snake-dog';

const responsibilities = [
  '联名玩法策划',
  'IP方沟通',
  '社媒内容',
  'UGC传播',
  '微信红包封面策划及上线',
  '动态表情包设计及上线',
  '漫展线下活动策划与推进',
];

const results = [
  { value: '50万+', label: '动态表情包发送' },
  { value: '10分钟', label: '微信红包封面告罄' },
  { value: '+18.7%', label: '项目整体实收环比增长' },
  { value: '+616.32%', label: '漫展4天实收环比增长' },
];

function ExternalLink({ href, children }) {
  return (
    <a className="sd-text-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, number, id }) {
  return (
    <div className="sd-section-heading">
      <p><span>{number}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default function SnakeDogCase({ nextProject }) {
  return (
    <main className="detail-page snake-dog-page">
      <header className="detail-header sd-header">
        <Link className="wordmark" href="/#top">XUZIQING</Link>
        <Link className="detail-back" href="/#top">← 返回全部项目</Link>
      </header>

      <article className="sd-article">
        <section className="sd-hero" aria-labelledby="sd-hero-title">
          <div className="sd-hero-copy">
            <p className="sd-kicker">05 / SPRING FESTIVAL IP CAMPAIGN</p>
            <div className="sd-hero-title">
              <p>茶话弄 × 小狗蛇</p>
              <h1 id="sd-hero-title">蛇年春节<br />IP 联名</h1>
            </div>
            <div className="sd-hero-intro">
              <p className="sd-role-line">春节 Campaign / IP 联名 / 年轻化营销</p>
              <p>围绕 2025 蛇年春节节点，引入年轻化 IP「小狗蛇」，以更亲和、有趣的角色形象打破消费者对“蛇”的传统刻板印象，并通过红包封面、动态表情包、社媒内容、UGC 与漫展线下活动等多触点联动，拓展品牌的年轻消费人群。</p>
              <ul className="sd-tag-list" aria-label="项目标签">
                {['春节营销', 'IP联名', '社交玩法', 'UGC', '线下漫展'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>
          <figure className="sd-hero-media">
            <Image
              src={`${assetRoot}/hero/spring-festival-campaign-kv-clean.png`}
              alt="茶话弄与小狗蛇 2025 蛇年春节联名主视觉"
              width={790}
              height={1706}
              sizes="(max-width: 760px) 100vw, 50vw"
              priority
            />
          </figure>
        </section>

        <section className="sd-section sd-overview" aria-labelledby="sd-overview-title">
          <SectionHeading eyebrow="PROJECT OVERVIEW / 项目概览" title="用一个“不像蛇的蛇”，重新讲蛇年春节" number="01" id="sd-overview-title" />

          <dl className="sd-meta-grid">
            <div><dt>项目周期</dt><dd>2025.01.17 — 02.14</dd></div>
            <div><dt>营销节点</dt><dd>2025蛇年春节</dd></div>
            <div><dt>项目方向</dt><dd>品牌年轻化<br />春节节点传播<br />年轻用户拓展</dd></div>
          </dl>

          <div className="sd-role-layout" aria-label="我的职责">
            <p className="sd-label">MY ROLE / 我的职责<br /><strong>【主导】</strong></p>
            <ul>
              {responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="sd-big-idea" aria-labelledby="sd-idea-title">
            <p className="sd-big-word" aria-hidden="true">YOUNG<br />SNAKE</p>
            <div>
              <p className="sd-label">BIG IDEA</p>
              <h3 id="sd-idea-title">亲和的角色，<br />更年轻的春节表达。</h3>
              <p>横向观察品牌用户结构后，茶话弄既有消费人群整体相对偏成熟；而春节作为全年高关注节点，也提供了进一步接触年轻消费者的机会。</p>
              <p>因此在蛇年 IP 选择上，没有延续传统生肖蛇常见的视觉表达，而是选择形象亲和、年轻、具有社交传播属性的「小狗蛇」。</p>
            </div>
          </div>
        </section>

        <section className="sd-section sd-social" aria-labelledby="sd-social-title">
          <SectionHeading eyebrow="SOCIAL PLAY / 社交玩法" title="把联名角色放进真实的春节社交场景" number="02" id="sd-social-title" />
          <p className="sd-lead">相比只做一次产品包装联名，本次项目进一步将小狗蛇延伸到春节期间用户真正会使用、分享和传播的社交内容中。</p>

          <div className="sd-social-spread">
            <article className="sd-social-item sd-envelope-item">
              <figure>
                <Image src={`${assetRoot}/social/wechat-red-envelope-cover.png`} alt="茶话弄小狗蛇春节微信红包封面页面" width={1280} height={1707} sizes="(max-width: 760px) 100vw, 43vw" />
              </figure>
              <div className="sd-social-copy">
                <p className="sd-label">WECHAT RED ENVELOPE / 微信红包封面</p>
                <h3>让 IP 进入春节高频互动</h3>
                <p>借春节红包这一高频社交行为，让 IP 自然进入用户之间的互动场景。</p>
                <strong>10分钟<small>告罄</small></strong>
              </div>
            </article>

            <article className="sd-social-item sd-sticker-item">
              <div className="sd-social-copy">
                <p className="sd-label">ANIMATED STICKERS / 动态表情包</p>
                <h3>把角色变成持续使用的聊天内容</h3>
                <p>将联名角色转化为可持续使用的聊天内容资产，让 IP 的传播周期不只停留在新品曝光阶段。</p>
                <strong>50万+<small>次发送</small></strong>
              </div>
              <figure>
                <Image src={`${assetRoot}/social/animated-sticker-pack-overview.png`} alt="茶话弄与小狗蛇春节动态表情包总览" width={695} height={771} sizes="(max-width: 760px) 100vw, 50vw" />
              </figure>
            </article>
          </div>

          <aside className="sd-ugc-note">
            <p className="sd-label">SOCIAL CONTENT / UGC</p>
            <p>结合春节节点进行官号内容、用户互动与 UGC 扩散，持续强化角色认知与联名参与感。</p>
            <ExternalLink href="https://xhslink.cn/o/A9aXWzdwLD3">查看项目原帖 ↗</ExternalLink>
          </aside>
        </section>

        <section className="sd-section sd-impact" aria-labelledby="sd-impact-title">
          <SectionHeading eyebrow="OFFLINE EVENT + RESULTS / 线下与结果" title="从线上社交场景，进入年轻用户的兴趣现场" number="03" id="sd-impact-title" />

          <div className="sd-offline-intro">
            <p>春节期间进一步将联名带入漫展场景，通过品牌展示、现场互动与产品消费承接，触达更年轻的兴趣人群，让茶饮品牌进入传统门店之外的消费与内容场景。</p>
            <div className="sd-offline-stat">
              <strong>+616.32%</strong>
              <span>漫展活动 4 天实收环比增长</span>
            </div>
          </div>

          <div className="sd-results-grid" aria-label="项目结果">
            {results.map((result) => (
              <div key={result.label}>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </div>
            ))}
          </div>

          <div className="sd-secondary-result">
            <strong>100.3%</strong>
            <p>曝光目标达成率</p>
          </div>

          <p className="sd-results-summary">通过年轻化 IP、春节社交玩法与漫展兴趣场景联动，将一次生肖节点联名延展为兼具社交传播、年轻用户触达与实际消费转化的春节 Campaign。</p>
        </section>
      </article>

      <nav className="detail-next sd-next" aria-label="项目详情导航">
        <Link href="/#top">← 返回全部项目</Link>
        <Link href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</Link>
      </nav>
    </main>
  );
}
