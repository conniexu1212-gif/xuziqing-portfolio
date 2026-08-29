/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors bypass broken Vinext RSC client navigation in production. */
import Image from 'next/image';

const assetRoot = '/assets/projects/playstation-frontline/content';
const videoRoot = '/assets/projects/playstation-frontline/video';

const platformLinks = [
  { label: '小红书', href: 'https://www.xiaohongshu.com/user/profile/600e5fe4000000000101d7fa' },
  { label: '抖音', href: 'https://v.douyin.com/KEP5zuqYGHc/' },
  { label: 'Bilibili', href: 'https://space.bilibili.com/105246859' },
];

const responsibilities = [
  '内容框架搭建',
  '日常选题策划',
  '脚本与文案撰写',
  '多平台内容运营',
  '数据复盘与选题调整',
];

const contentTypes = [
  {
    number: '01',
    key: 'new-release',
    category: '新游速报',
    title: 'iKUMA',
    description: '围绕近期新作与玩家关注度较高的游戏快速跟进，通过更适合社媒传播的标题与内容包装提升时效性和点击意愿。',
    image: `${assetRoot}/new-release-ikuma.png`,
    width: 368,
    height: 521,
    alt: 'iKUMA 新游速报内容截图',
    performance: '2.8万点赞',
  },
  {
    number: '02',
    key: 'classic-ip',
    category: '经典 IP',
    title: 'PS4 十年回忆录',
    description: '围绕经典主机作品、周年节点与玩家共同记忆进行盘点和回顾，强化账号与核心主机玩家之间的情绪连接。',
    image: `${assetRoot}/classic-ip-ps4-retrospective.png`,
    width: 366,
    height: 517,
    alt: 'PS4 十年回忆录内容截图',
    performance: '3,142点赞',
  },
  {
    number: '03',
    key: 'industry-figure',
    category: '行业人物',
    title: '宫崎英高',
    description: '从游戏制作人、行业人物与玩家熟悉的话题切入，扩展账号内容维度，并增强人物型内容的可看性。',
    image: `${assetRoot}/industry-miyazaki.png`,
    width: 436,
    height: 675,
    alt: '宫崎英高行业人物内容截图',
    performance: '188点赞',
  },
  {
    number: '04',
    key: 'recommendation',
    category: '游戏推荐',
    title: '2025年PS必玩双人合作游戏（一）',
    description: '围绕明确的游玩场景和玩家需求进行游戏合集与推荐，通过“可直接解决选择问题”的选题提高内容实用性。',
    image: `${assetRoot}/game-recommendation-coop-2025.png`,
    width: 424,
    height: 647,
    alt: '2025 年 PlayStation 必玩双人合作游戏推荐内容截图',
    performance: '687点赞',
  },
];

const representativeVideos = [
  {
    platform: '抖音',
    src: `${videoRoot}/representative-01.mp4`,
    poster: `${videoRoot}/representative-01-poster.jpg`,
    href: 'https://v.douyin.com/AklsCAuwnXM/',
  },
  {
    platform: '抖音',
    src: `${videoRoot}/representative-02.mp4`,
    poster: `${videoRoot}/representative-02-poster.jpg`,
    href: 'https://v.douyin.com/cgcr_3avO3U/',
  },
  {
    platform: '小红书',
    src: `${videoRoot}/representative-03.mp4`,
    poster: `${videoRoot}/representative-03-poster.jpg`,
    href: 'https://xhslink.cn/o/2oM2ZWd5KZD',
  },
];

const platformPerformance = [
  {
    platform: '小红书',
    metrics: [
      ['累计发布', '80篇'],
      ['累计曝光', '112.8万+'],
      ['观看', '17.8万+'],
      ['总互动', '8,143'],
    ],
  },
  {
    platform: '抖音',
    metrics: [
      ['累计播放', '24万+'],
      ['新增粉丝', '+125'],
    ],
  },
  {
    platform: 'Bilibili',
    metrics: [
      ['累计播放', '13.1万+'],
      ['新增粉丝', '+145'],
      ['总互动', '5,340'],
    ],
  },
];

const results = [
  { value: '+145%', label: '小红书粉丝增长' },
  { value: '112.8万+', label: '小红书累计曝光' },
  { value: '24万+', label: '抖音累计播放' },
  { value: '13.1万+', label: 'B站累计播放' },
];

function ExternalLink({ href, children, className = 'psf-text-link' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, number, id }) {
  return (
    <div className="psf-section-heading">
      <p><span>{number}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default function PlayStationFrontlineCase({ nextProject }) {
  return (
    <main className="detail-page playstation-frontline-page">
      <header className="detail-header psf-header">
        <a className="wordmark" href="/">XUZIQING</a>
        <a className="detail-back" href="/">← 返回全部项目</a>
      </header>

      <article className="psf-article">
        <section className="psf-hero" aria-labelledby="psf-hero-title">
          <div className="psf-hero-copy">
            <p className="psf-kicker">02 / CONTENT OPERATIONS CASE</p>
            <div>
              <h1 id="psf-hero-title">PlayStation<br />玩家前线</h1>
              <p className="psf-role-line">内容运营 / 社媒策划</p>
            </div>
            <div className="psf-hero-intro">
              <p>面向主机玩家的 To C 游戏内容账号。围绕 PlayStation 生态、主机游戏资讯、热点话题与内容策划，负责账号内容框架搭建、选题规划、脚本文案及数据复盘，并在核心运营期保持高频更新。</p>
              <ul className="psf-tag-list" aria-label="项目标签">
                {['内容运营', '社媒策划', '选题策划', '脚本文案', '数据复盘'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <nav className="psf-platform-links" aria-label="PlayStation 玩家前线平台主页">
                {platformLinks.map((link) => <ExternalLink key={link.label} href={link.href}>{link.label} ↗</ExternalLink>)}
              </nav>
            </div>
          </div>

          <div className="psf-hero-collage" aria-label="PlayStation 玩家前线代表内容拼贴">
            <figure className="psf-collage-primary">
              <Image src={`${assetRoot}/new-release-ikuma.png`} alt="iKUMA 新游速报内容封面" width={368} height={521} sizes="(max-width: 760px) 45vw, 25vw" preload />
            </figure>
            <figure className="psf-collage-secondary">
              <Image src={`${assetRoot}/classic-ip-ps4-retrospective.png`} alt="PS4 十年回忆录内容封面" width={366} height={517} sizes="(max-width: 760px) 41vw, 22vw" />
            </figure>
            <figure className="psf-collage-tertiary">
              <Image src={`${assetRoot}/game-recommendation-coop-2025.png`} alt="2025 年 PlayStation 双人合作游戏推荐内容封面" width={424} height={647} sizes="(max-width: 760px) 39vw, 21vw" />
            </figure>
          </div>
        </section>

        <section className="psf-section psf-overview" aria-labelledby="psf-overview-title">
          <SectionHeading eyebrow="ACCOUNT OVERVIEW / 账号概览" title="让账号从单一资讯走向稳定内容体系" number="01" id="psf-overview-title" />
          <div className="psf-overview-layout">
            <div>
              <p className="psf-label">账号定位</p>
              <p className="psf-lead">面向主机 / PC 游戏玩家的内容账号，以 PlayStation 生态为核心，延伸至新游推荐、经典 IP、行业人物及玩家话题。</p>
            </div>
            <div className="psf-responsibilities">
              <p className="psf-label">我的职责</p>
              <ul>
                {responsibilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="psf-operation-note"><strong>运营节奏</strong>2025.10 起进入核心运营阶段，期间基本保持日更；2026年初因公司运营方向调整，更新频率逐步下降。</p>
        </section>

        <section className="psf-section psf-content-system" aria-labelledby="psf-content-title">
          <SectionHeading eyebrow="CONTENT SYSTEM / 内容框架与代表内容" title="从内容框架到具体选题" number="02" id="psf-content-title" />
          <p className="psf-lead psf-content-intro">结合主机玩家的内容消费习惯，将账号内容逐步整理为四类可持续生产的选题方向，并根据平台反馈持续调整选题与包装方式。</p>
          <div className="psf-content-wall">
            {contentTypes.map((item) => (
              <article className={`psf-content-item psf-content-${item.key}`} key={item.key}>
                <header>
                  <span>{item.number}</span>
                  <h3>{item.category}</h3>
                </header>
                <p>{item.description}</p>
                <figure>
                  <Image src={item.image} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 760px) 100vw, 44vw" />
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.performance}</span>
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
          <div className="psf-representative-media" aria-labelledby="psf-representative-title">
            <div className="psf-media-heading">
              <div>
                <p className="psf-label">VIEW CONTENT</p>
                <h3 id="psf-representative-title">代表内容</h3>
              </div>
              <p>无需离开 Portfolio，即可直接查看部分真实内容。</p>
            </div>
            <div className="psf-media-grid">
              {representativeVideos.map((item, index) => (
                <div className="psf-video-card" key={item.src}>
                  <video
                    className="psf-video-player"
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    aria-label={`${item.platform}代表内容 ${String(index + 1).padStart(2, '0')}`}
                  >
                    <source src={item.src} type="video/mp4" />
                    你的浏览器暂不支持视频播放。
                  </video>
                  <div className="psf-video-meta">
                    <span>{item.platform}</span>
                    <ExternalLink href={item.href}>查看{item.platform}原帖 ↗</ExternalLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="psf-section psf-performance" aria-labelledby="psf-performance-title">
          <SectionHeading eyebrow="PLATFORM PERFORMANCE / 运营结果" title="用数据持续校准内容方向" number="03" id="psf-performance-title" />
          <div className="psf-growth-feature">
            <div>
              <p>小红书粉丝</p>
              <strong>505 <i>→</i> 1,239</strong>
            </div>
            <div>
              <p>粉丝增长</p>
              <strong>+145%</strong>
            </div>
          </div>
          <div className="psf-platform-grid">
            {platformPerformance.map((item, index) => (
              <article key={item.platform}>
                <header><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.platform}</h3></header>
                <dl>
                  {item.metrics.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="psf-section psf-results" aria-labelledby="psf-results-title">
          <SectionHeading eyebrow="RESULTS / 项目结果" title="把持续运营沉淀为可衡量的增长" number="04" id="psf-results-title" />
          <div className="psf-results-grid">
            {results.map((result, index) => (
              <div key={result.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </div>
            ))}
          </div>
          <p className="psf-results-summary">通过账号内容框架搭建与持续运营，将内容从单一资讯发布扩展为新游速报、经典 IP、行业人物及游戏推荐等多个稳定选题方向，并根据内容数据持续调整选题与包装方式。</p>
        </section>
      </article>

      <nav className="detail-next psf-next" aria-label="项目详情导航">
        <a href="/">← 返回全部项目</a>
        <a href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</a>
      </nav>
    </main>
  );
}
