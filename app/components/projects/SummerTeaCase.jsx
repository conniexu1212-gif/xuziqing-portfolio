import Image from 'next/image';
import Link from 'next/link';

const assetRoot = '/assets/projects/summer-tea';

const responsibilities = [
  'Campaign 整体概念',
  '活动玩法设计',
  '小红书 / 抖音话题及内容',
  '舞蹈挑战',
  '达人筛选与沟通',
  '官号内容策划',
  '视频拍摄',
  '编舞 / 编曲合作',
  'KOL / KOC 内容发布及 BGC 拍摄',
];

const mechanisms = [
  {
    title: '线上挑战',
    copy: '使用官方 BGM / 舞蹈动作参与 #夏梦熏风舞蹈挑战。',
  },
  {
    title: '达人启动',
    copy: '对接编舞、编曲及不同内容类型 KOL/KOC，完成首批内容生产与传播启动。',
  },
  {
    title: '官号内容',
    copy: '围绕挑战玩法进行 BGC 拍摄与官号发布，建立统一示范内容。',
  },
  {
    title: '门店承接',
    copy: '通过线下参与、门店优惠等机制承接用户到店与新品体验。',
  },
];

const results = [
  { value: '1亿+', label: '项目总曝光' },
  { value: '543万+', label: '新增人群资产' },
  { value: '10万+', label: '看后直接搜索' },
];

function SectionHeading({ eyebrow, title, number, id }) {
  return (
    <div className="st-section-heading">
      <p><span>{number}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default function SummerTeaCase({ nextProject }) {
  return (
    <main className="detail-page summer-tea-page">
      <header className="detail-header st-header">
        <Link className="wordmark" href="/#top">XUZIQING</Link>
        <Link className="detail-back" href="/#top">← 返回全部项目</Link>
      </header>

      <article className="st-article">
        <section className="st-hero" aria-labelledby="st-hero-title">
          <div className="st-hero-copy">
            <p className="st-kicker">04 / NEW PRODUCT CAMPAIGN</p>
            <div className="st-hero-title">
              <p>茶话弄｜世界茶·夏日季</p>
              <h1 id="st-hero-title">夏梦熏风<br />舞蹈挑战</h1>
            </div>
            <div className="st-hero-intro">
              <p className="st-role-line">新品 Campaign / 社媒互动 / 用户增长</p>
              <p>围绕夏季新品「夏梦熏风」，策划「好喝得想跳舞」传播概念，通过舞蹈通感强化产品的热带风情，并以线上挑战、达人内容和门店互动拓宽美垂等内容赛道人群，持续沉淀品牌用户资产。</p>
              <ul className="st-tag-list" aria-label="项目标签">
                {['新品Campaign', '内容策划', 'UGC玩法', '达人合作', 'BGC拍摄'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>
          <figure className="st-hero-media">
            <Image
              src={`${assetRoot}/hero/summer-dream-tropical-duo-kv.jpg`}
              alt="茶话弄夏梦熏风与夏梦莹酪双杯新品主视觉"
              width={1280}
              height={1708}
              sizes="(max-width: 760px) 100vw, 52vw"
              priority
            />
          </figure>
        </section>

        <section className="st-section st-overview" aria-labelledby="st-overview-title">
          <SectionHeading eyebrow="PROJECT OVERVIEW / 项目概览" title="把新品风味转译为参与式传播" number="01" id="st-overview-title" />
          <dl className="st-meta-grid">
            <div><dt>项目周期</dt><dd>2024.04.25 — 05.18</dd></div>
            <div><dt>活动范围</dt><dd>全国</dd></div>
            <div><dt>主推产品</dt><dd>夏梦熏风</dd></div>
          </dl>

          <div className="st-responsibilities" aria-label="我的职责">
            <p className="st-label">MY ROLE / 我的职责</p>
            <ol>
              {responsibilities.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
              ))}
            </ol>
          </div>

          <div className="st-big-idea" aria-labelledby="st-idea-title">
            <div className="st-big-idea-title">
              <p>BIG IDEA</p>
              <h3 id="st-idea-title">好喝得<br />想跳舞</h3>
            </div>
            <div className="st-big-idea-copy">
              <p>以「舞蹈」作为产品风味的通感表达，将夏梦熏风的热带、轻快与夏日氛围转化为更具参与感的社交内容。</p>
              <ul>
                <li>传递新品热带风情</li>
                <li>拓宽美垂等内容赛道人群</li>
                <li>积累可持续触达的用户资产</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="st-section st-campaign" aria-labelledby="st-campaign-title">
          <SectionHeading eyebrow="CAMPAIGN MECHANISM / 活动机制" title="从内容示范到用户参与，再回到门店体验" number="02" id="st-campaign-title" />
          <div className="st-campaign-layout">
            <figure>
              <Image
                src={`${assetRoot}/campaign/dance-challenge-rules.jpg`}
                alt="好喝得想跳舞：夏梦熏风舞蹈挑战活动规则海报"
                width={1280}
                height={1810}
                sizes="(max-width: 760px) 100vw, 47vw"
              />
              <figcaption>夏梦熏风舞蹈挑战 / 活动规则</figcaption>
            </figure>
            <div className="st-mechanism-list">
              {mechanisms.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
              <p className="st-product-note">以花果、热带与盛夏意象建立新品视觉认知，并将 Campaign 的舞蹈玩法与新品风味表达统一。</p>
            </div>
          </div>
        </section>

        <section className="st-section st-results" aria-labelledby="st-results-title">
          <SectionHeading eyebrow="RESULTS / 项目结果" title="让风味感知转化为扩圈与主动搜索" number="03" id="st-results-title" />
          <div className="st-results-grid">
            {results.map((result, index) => (
              <div key={result.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </div>
            ))}
          </div>
          <p className="st-results-summary">通过舞蹈挑战、达人内容与品牌自制内容协同，将新品风味感知转化为可参与的社交传播，并进一步带动人群扩圈与主动搜索。</p>
        </section>
      </article>

      <nav className="detail-next st-next" aria-label="项目详情导航">
        <Link href="/#top">← 返回全部项目</Link>
        <Link href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</Link>
      </nav>
    </main>
  );
}
