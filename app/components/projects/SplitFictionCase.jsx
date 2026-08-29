import Link from 'next/link';

const timeline = [
  { date: '03.25 — 04.02', label: '项目预热' },
  { date: '04.03', label: '正式发售' },
  { date: '04.03 — 04.12', label: '强力宣发' },
  { date: '04.12 — 04.25', label: '长尾运营' },
  { date: '04.25 — 04.30', label: '五一快闪预热' },
  { date: '04.30 — 05.05', label: '上海美罗城线下快闪' },
  { date: '05.06', label: '活动总结' },
  { date: '05.07 起', label: '节点运营' },
];

const socialMetrics = [
  { platform: 'Bilibili', primary: '播放 11w+', secondary: '互动 1w+' },
  { platform: '抖音', primary: '播放 57.5w+', secondary: '互动 5w+' },
  { platform: '小红书', primary: '阅读 19.3w+', secondary: '互动 1w+' },
  { platform: '微博项目话题', primary: '阅读 5,416.1w+', secondary: '互动 2.5w+' },
];

const socialLinks = [
  { label: '小红书', href: 'https://www.xiaohongshu.com/user/profile/67e3aa1e000000000d009a72' },
  { label: '抖音', href: 'https://v.douyin.com/4erUWLF1UrY/' },
  { label: 'Bilibili', href: 'https://space.bilibili.com/3546984331872266' },
];

const offlineMetrics = [
  { value: '6,000+', label: '累计到场' },
  { value: '1,500+', label: '试玩次数' },
  { value: '23.2w+', label: '活动话题阅读' },
  { value: '459+', label: '话题讨论' },
];

const results = [
  { value: '7,188', label: '首月全平台粉丝' },
  { value: '1.3亿+', label: '首月合作资源曝光' },
  { value: '3亿+', label: '累计阅读 / 播放' },
  { value: '5,416.1w+', label: '微博项目话题阅读' },
  { value: '6,000+', label: '五一快闪到场' },
  { value: '1,500+', label: '线下试玩' },
];

const assetRoot = '/assets/projects/split-fiction';

function ExternalLink({ href, children, className = 'sf-text-link' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, number, id }) {
  return (
    <div className="sf-section-heading">
      <p><span>{number}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default function SplitFictionCase({ project, nextProject }) {
  return (
    <main className="detail-page split-fiction-page">
      <header className="detail-header sf-header">
        <Link className="wordmark" href="/#top">XUZIQING</Link>
        <Link className="detail-back" href="/#top">← 返回全部项目</Link>
      </header>

      <article className="sf-article">
        <section className="sf-hero" aria-labelledby="sf-hero-title">
          <div className="sf-hero-copy">
            <p className="sf-kicker">01 / INTEGRATED MARKETING CASE</p>
            <div>
              <h1 id="sf-hero-title">《双影奇境》</h1>
              <p className="sf-english-title">SPLIT FICTION</p>
            </div>
            <div className="sf-hero-intro">
              <p className="sf-platform-line">PS5 / PC 国行发行</p>
              <p className="sf-role-line">市场运营｜整合营销</p>
              <p className="sf-hero-description">围绕《双影奇境》国行版上市，从预热、正式发售、强力宣发到长尾运营及五一线下快闪，负责营销排期、社媒内容、平台资源合作、线下活动统筹及部分电商内容。</p>
              <ul className="sf-tag-list" aria-label="项目标签">
                {['游戏发行', '社媒营销', '平台合作', '线下事件', '电商内容'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>
          <figure className="sf-hero-media">
            <img src={`${assetRoot}/hero/official-kv.jpg`} alt="《双影奇境》PS5 国行版官方主视觉" fetchPriority="high" />
          </figure>
        </section>

        <section className="sf-section sf-overview" aria-labelledby="sf-overview-title">
          <SectionHeading eyebrow="PROJECT OVERVIEW / 项目概览" title="一次完整的国行上市传播" number="01" id="sf-overview-title" />
          <div className="sf-overview-grid">
            <div>
              <p>项目周期</p>
              <strong>2026.03.25 — 05.06 核心营销期</strong>
              <span>05.07 起回归节点运营</span>
            </div>
            <div>
              <p>正式发售</p>
              <strong>2026.04.03</strong>
            </div>
            <div>
              <p>发行平台</p>
              <strong>PS5 / PC</strong>
            </div>
            <div>
              <p>我的职责</p>
              <ul>
                <li>营销规划与排期</li>
                <li>社媒内容运营</li>
                <li>平台资源合作</li>
                <li>线下活动策划统筹</li>
                <li>电商内容</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sf-timeline-section" aria-labelledby="sf-timeline-title">
          <div className="sf-timeline-title">
            <p>MARKETING TIMELINE</p>
            <h2 id="sf-timeline-title">发行营销节奏</h2>
          </div>
          <ol className="sf-timeline">
            {timeline.map((item) => (
              <li key={`${item.date}-${item.label}`}>
                <time>{item.date}</time>
                <p>{item.label}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="sf-section sf-release" aria-labelledby="sf-release-title">
          <SectionHeading eyebrow="RELEASE FILM / 发行 PV" title="为正式发售释放核心产品信息" number="02" id="sf-release-title" />
          <div className="sf-release-body">
            <video className="sf-release-video" controls poster={`${assetRoot}/video/release-poster.jpg`} preload="metadata" playsInline aria-label="《双影奇境》国行版发行 PV">
              <source src={`${assetRoot}/video/release-pv.mp4`} type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
            <div className="sf-media-caption">
              <div><p>国行版发行 PV</p><span>作为发行期核心视频内容之一，用于产品信息释放与上市节点传播。</span></div>
              <ExternalLink href="https://b23.tv/WAx5eu4">在 Bilibili 查看 ↗</ExternalLink>
            </div>
          </div>
        </section>

        <section className="sf-section sf-social" aria-labelledby="sf-social-title">
          <SectionHeading eyebrow="SOCIAL MEDIA / 社媒发行运营" title="从 0 到 1 搭建发行期社媒矩阵" number="03" id="sf-social-title" />
          <div className="sf-social-layout">
            <div className="sf-social-main">
              <p className="sf-lead">围绕国行版发售节奏，从 0–1 搭建 B站、抖音、小红书内容矩阵，负责内容规划、选题创意、脚本文案、拍摄制作协同、热点内容及数据复盘，并持续根据不同平台内容生态调整传播方向。</p>
              <div className="sf-feature-stat">
                <strong>7,188</strong>
                <span>首月全平台粉丝</span>
              </div>
              <div className="sf-social-metrics">
                {socialMetrics.map((metric) => (
                  <div key={metric.platform}>
                    <p>{metric.platform}</p>
                    <strong>{metric.primary}</strong>
                    <span>{metric.secondary}</span>
                  </div>
                ))}
              </div>
              <nav className="sf-social-links" aria-label="《双影奇境》社媒账号">
                {socialLinks.map((link) => <ExternalLink key={link.label} href={link.href}>{link.label} ↗</ExternalLink>)}
              </nav>
            </div>
            <aside className="sf-hotspot" aria-labelledby="sf-hotspot-title">
              <div className="sf-hotspot-copy">
                <p>热点内容案例</p>
                <h3 id="sf-hotspot-title">发行期热点短视频</h3>
                <span>发行期热点短视频案例。</span>
              </div>
              <video controls poster={`${assetRoot}/video/hotspot-poster.jpg`} preload="metadata" playsInline aria-label="《双影奇境》发行期热点短视频">
                <source src={`${assetRoot}/video/social-hotspot.mp4`} type="video/mp4" />
                你的浏览器暂不支持视频播放。
              </video>
              <div className="sf-hotspot-result">
                <strong>小红书单条点赞 1,266</strong>
                <ExternalLink href="https://xhslink.cn/o/8s7Uz2ys17f">查看小红书原帖 ↗</ExternalLink>
              </div>
            </aside>
          </div>
        </section>

        <section className="sf-section sf-platforms" aria-labelledby="sf-platforms-title">
          <SectionHeading eyebrow="PLATFORM COLLABORATION / 平台资源合作" title="联动平台资源放大发售节点" number="04" id="sf-platforms-title" />
          <div className="sf-platform-layout">
            <div>
              <p className="sf-lead">对接 WeGame、咪咕快游、华硕大厅、PlayStation 等合作平台，负责投放素材内容制作、资源位沟通及线上宣传活动推进。</p>
              <div className="sf-feature-stat sf-platform-stat"><strong>1.3亿+</strong><span>首月合作资源曝光</span></div>
            </div>
            <ul className="sf-wordmarks" aria-label="合作平台">
              {['PlayStation', 'WeGame', '咪咕快游', '华硕'].map((name) => <li key={name}>{name}</li>)}
            </ul>
          </div>
        </section>

        <section className="sf-section sf-offline" aria-labelledby="sf-offline-title">
          <SectionHeading eyebrow="OFFLINE EVENT / 五一美罗城快闪" title="从线上发行走到线下玩家现场" number="05" id="sf-offline-title" />
          <div className="sf-offline-intro">
            <p className="sf-lead">策划统筹上海美罗城《双影奇境》五一快闪，与 PlayStation 合作，通过实机试玩、挑战赛、COSER 互动及周边售卖等形式，让发行期传播进一步落到真实玩家体验。</p>
            <dl>
              <div><dt>DATE</dt><dd>04.30 — 05.05</dd></div>
              <div><dt>LOCATION</dt><dd>上海美罗城</dd></div>
            </dl>
          </div>
          <div className="sf-offline-metrics">
            {offlineMetrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
          <div className="sf-offline-spread">
            <figure className="sf-photo-entrance"><img src={`${assetRoot}/offline/metro-city-entrance.png`} alt="上海美罗城《双影奇境》五一快闪入口全景" loading="lazy" /><figcaption>快闪入口 / 上海美罗城</figcaption></figure>
            <figure className="sf-photo-interaction"><img src={`${assetRoot}/offline/coser-player-interaction.png`} alt="《双影奇境》COSER 与现场玩家互动" loading="lazy" /><figcaption>COSER 与玩家互动</figcaption></figure>
            <figure className="sf-photo-demo"><img src={`${assetRoot}/offline/player-demo.png`} alt="玩家在《双影奇境》快闪现场试玩" loading="lazy" /><figcaption>现场实机试玩</figcaption></figure>
            <figure className="sf-photo-coser"><img src={`${assetRoot}/offline/coser-duo.png`} alt="《双影奇境》两位角色 COSER 合影" loading="lazy" /><figcaption>双角色 COSER</figcaption></figure>
            <figure className="sf-photo-poster"><img src={`${assetRoot}/offline/mayday-pop-up-poster.png`} alt="《双影奇境》五一快闪官方海报" loading="lazy" /><figcaption>五一快闪官方海报</figcaption></figure>
          </div>
        </section>

        <section className="sf-section sf-commerce" aria-labelledby="sf-commerce-title">
          <SectionHeading eyebrow="COMMERCE / 商品与电商内容" title="联名主机套盒" number="06" id="sf-commerce-title" />
          <p className="sf-lead sf-commerce-copy">参与《双影奇境》国行联名主机套盒开发，负责周边选品、供应商沟通及电商详情页文案，并协同推进商品上线。</p>
          <div className="sf-commerce-grid">
            <figure>
              <div><img src={`${assetRoot}/commerce/ps5-pro-bundle.png`} alt="PlayStation 5 Pro《双影奇境》国行欢乐同行典藏套装" loading="lazy" /></div>
              <figcaption><strong>PlayStation 5 Pro</strong><span>双影奇境国行欢乐同行典藏套装</span></figcaption>
            </figure>
            <figure>
              <div><img src={`${assetRoot}/commerce/ps5-slim-bundle.png`} alt="PlayStation 5 Slim 光驱版《双影奇境》国行欢乐同行典藏套装" loading="lazy" /></div>
              <figcaption><strong>PlayStation 5 Slim 光驱版</strong><span>双影奇境国行欢乐同行典藏套装</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="sf-section sf-results" aria-labelledby="sf-results-title">
          <SectionHeading eyebrow="RESULTS / 项目结果" title="让发行传播沉淀为可衡量的结果" number="07" id="sf-results-title" />
          <div className="sf-results-grid">
            {results.map((result, index) => (
              <div key={result.label} className={index === 0 || index === 3 ? 'is-wide' : ''}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <nav className="detail-next sf-next" aria-label="项目详情导航">
        <Link href="/#top">← 返回全部项目</Link>
        <Link href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</Link>
      </nav>
    </main>
  );
}
