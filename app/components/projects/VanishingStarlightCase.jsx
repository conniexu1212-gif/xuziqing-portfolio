/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors bypass broken Vinext RSC client navigation in production. */
import Image from 'next/image';

const assetRoot = '/assets/projects/vanishing-starlight';

const responsibilities = [
  'Steam / WeGame / PlayStation 商店页面筹备',
  '多平台上线沟通',
  '社媒内容策划',
  '发行 PV 策划',
  'PlayStation 海外官方资源推进',
];

const launchTimeline = [
  { date: '03.12 起', label: '上线前持续宣发' },
  { date: '03.25', label: '预热直播' },
  { date: '03.26', label: '正式发售' },
];

function SectionHeading({ eyebrow, title, number, id }) {
  return (
    <div className="vs-section-heading">
      <p><span>{number}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="vs-external-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function VanishingStarlightCase({ nextProject }) {
  return (
    <main className="detail-page vs-page">
      <header className="detail-header vs-header">
        <a className="wordmark" href="/">XUZIQING</a>
        <a className="detail-back" href="/">← 返回全部项目</a>
      </header>

      <article className="vs-article">
        <section className="vs-hero" aria-labelledby="vs-hero-title">
          <div className="vs-hero-copy">
            <p className="vs-kicker">06 / GAME PUBLISHING</p>
            <div className="vs-hero-title">
              <p>VANISHING STARLIGHT</p>
              <h1 id="vs-hero-title">《星烬·烛耀山海》</h1>
            </div>
            <div className="vs-hero-intro">
              <p className="vs-role-line">PS5 / PC 多平台发行</p>
              <p className="vs-work-type">发行运营 / 内容策划</p>
              <p>围绕国产独立游戏《星烬·烛耀山海》正式上线，负责 Steam、WeGame 与 PlayStation 商店页面筹备及上线沟通，并推进社媒内容与发行 PV 策划，推动 Launch Trailer 获得 PlayStation 海外官方 YouTube 账号发布。</p>
              <ul className="vs-tag-list" aria-label="项目标签">
                {['游戏发行', '多平台上线', '商店页面', '内容策划', 'PV策划'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>
          <figure className="vs-hero-media">
            <Image
              src={`${assetRoot}/hero/launch-kv.jpg`}
              alt="《星烬·烛耀山海》现已发售主视觉，展示 PS5、Steam 与 WeGame 平台"
              width={2091}
              height={1170}
              sizes="(max-width: 760px) 100vw, 59vw"
              priority
            />
          </figure>
        </section>

        <section className="vs-section vs-overview" aria-labelledby="vs-overview-title">
          <SectionHeading eyebrow="PROJECT OVERVIEW / 项目概览" title="围绕正式发售，完成多平台发行协同" number="01" id="vs-overview-title" />

          <dl className="vs-meta-grid">
            <div><dt>正式上线</dt><dd>2026.03.26</dd></div>
            <div><dt>核心宣发期</dt><dd>2026.03.12 起</dd></div>
            <div><dt>发行平台</dt><dd>PS5 / Steam / WeGame</dd></div>
          </dl>

          <div className="vs-role-layout" aria-label="我的职责">
            <p className="vs-label">MY ROLE / 我的职责</p>
            <ul>
              {responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="vs-timeline" aria-label="发行节奏">
            <p className="vs-label">LAUNCH RHYTHM / 发行节奏</p>
            <dl>
              {launchTimeline.map((item) => (
                <div key={item.date}>
                  <dt>{item.date}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="vs-section vs-content" aria-labelledby="vs-content-title">
          <SectionHeading eyebrow="CONTENT / 发行内容" title="让发售节点之外，持续有内容可沟通" number="02" id="vs-content-title" />

          <div className="vs-official-accounts" aria-label="官方账号">
            <p className="vs-label">OFFICIAL ACCOUNTS / 官方账号</p>
            <div>
              <ExternalLink href="https://www.xiaohongshu.com/user/profile/682e85bf000000000a03ce45?xsec_token=ABA3lZJjDqQ2YTUYoQH0Zt4HWwf3ryzw2TTp_c8HtmbuM%3D&xsec_source=pc_search">小红书 ↗</ExternalLink>
              <ExternalLink href="https://space.bilibili.com/3546617927961218?spm_id_from=333.337.0.0">Bilibili ↗</ExternalLink>
            </div>
          </div>

          <div className="vs-content-spread">
            <article className="vs-live-story">
              <figure>
                <Image
                  src={`${assetRoot}/content/prelaunch-live.jpg`}
                  alt="《星烬·烛耀山海》2026年3月25日山海世界探索直播海报"
                  width={1170}
                  height={1540}
                  sizes="(max-width: 760px) 100vw, 44vw"
                />
              </figure>
              <div>
                <p className="vs-label">PRE-LAUNCH LIVE / 2026.03.25</p>
                <h3>上线预热直播</h3>
                <p>正式上线前通过玩法介绍、实机展示及福利内容进行预热直播，为 3 月 26 日正式发售承接关注。</p>
              </div>
            </article>

            <div className="vs-social-stories">
              <article>
                <figure>
                  <Image
                    src={`${assetRoot}/content/social-nvjie.jpg`}
                    alt="《星烬·烛耀山海》角色女孑社媒海报"
                    width={1170}
                    height={1543}
                    sizes="(max-width: 760px) 100vw, 34vw"
                  />
                </figure>
                <p className="vs-label">SOCIAL CONTENT / 女孑</p>
              </article>
              <article>
                <figure>
                  <Image
                    src={`${assetRoot}/content/social-emotes.jpg`}
                    alt="《星烬·烛耀山海》不眠宝宝表情库社媒视觉"
                    width={1169}
                    height={1546}
                    sizes="(max-width: 760px) 100vw, 30vw"
                  />
                </figure>
                <p className="vs-label">SOCIAL CONTENT / 不眠宝宝表情库</p>
              </article>
              <p className="vs-social-summary">围绕角色、游戏世界观及玩家沟通制作不同类型的发行期社媒内容，在发售节点之外持续补充角色与世界观内容。</p>
            </div>
          </div>
        </section>

        <section className="vs-section vs-release" aria-labelledby="vs-release-title">
          <SectionHeading eyebrow="RELEASE PV + RESULT / 发行与结果" title="Launch Trailer 登陆 PlayStation 海外官方频道" number="03" id="vs-release-title" />

          <div className="vs-release-intro">
            <p>推动《Vanishing Starlight》Launch Trailer 获得 PlayStation 官方 YouTube 发布，让国产独立游戏的发行内容进入海外主机玩家渠道。</p>
            <div className="vs-result">
              <strong>3.8万+</strong>
              <span>PlayStation 官方 YouTube<br />Launch Trailer 播放</span>
            </div>
          </div>

          <div className="vs-video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster={`${assetRoot}/hero/launch-kv.jpg`}
            >
              <source src={`${assetRoot}/video/launch-trailer.mp4`} type="video/mp4" />
              您的浏览器暂不支持视频播放。
            </video>
          </div>

          <div className="vs-release-footer">
            <div>
              <p className="vs-platform-result">PS5 / Steam / WeGame</p>
              <p>多平台正式上线</p>
            </div>
            <ExternalLink href="https://www.youtube.com/watch?v=sUZQDofWyzk">在 YouTube 查看 ↗</ExternalLink>
          </div>

          <p className="vs-results-summary">完成多平台商店页面、上线沟通与发行内容推进，并推动 Launch Trailer 获得 PlayStation 海外官方渠道发布，为国产独立游戏增加海外主机用户触达。</p>
        </section>
      </article>

      <nav className="detail-next vs-next" aria-label="项目详情导航">
        <a href="/">← 返回全部项目</a>
        <a href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</a>
      </nav>
    </main>
  );
}
