/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors bypass broken Vinext RSC client navigation in production. */
import Image from 'next/image';

const assetRoot = '/assets/projects/feirenzai';

const leadResponsibilities = [
  '「神仙打工人喝神仙奶茶」传播概念策划',
  'IP方沟通',
  '定制动画脚本 / 漫画内容沟通',
  '部分 KOL / KOC 筛选及沟通',
  '主题门店活动策划与推进',
];

const collaborativeResponsibilities = [
  '联名产品及周边传播',
  '社媒内容',
  '门店物料及其他整合传播执行',
];

const customContent = ['联名动画', '联名漫画', '角色传播内容'];

const merchandise = [
  '5款流沙钥匙链',
  '大士小夜灯',
  '2款毛绒玩偶',
  '5款透卡',
  '独家漫画书签',
  'Q版贴纸',
  '亚克力立牌',
  '联名手机壳等限定玩法',
];

const onlineCampaign = [
  '定制动画 / 漫画内容',
  '社媒官宣与角色传播',
  'KOL / KOC 内容合作',
  '用户 UGC 及话题扩散',
];

const offlineCampaign = [
  '主题门店活动',
  '5城21名 COSER 巡游',
  '门店打卡与互动',
  '联名周边及消费场景承接',
];

const results = [
  { value: '1 : 18', label: 'UGC 撬动比' },
  { value: '1万+', label: '用户自发传播发帖' },
  { value: '5城 · 21名', label: 'COSER 线下巡游' },
];

function ExternalLink({ href, children, className = 'fz-text-link' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, number, id }) {
  return (
    <div className="fz-section-heading">
      <p><span>{number}</span>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function ResponsibilityList({ label, items, collaborative = false }) {
  return (
    <div className={`fz-responsibility-group${collaborative ? ' is-collaborative' : ''}`}>
      <p className="fz-label">{label}</p>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function FeirenzaiCase({ nextProject }) {
  return (
    <main className="detail-page feirenzai-page">
      <header className="detail-header fz-header">
        <a className="wordmark" href="/">XUZIQING</a>
        <a className="detail-back" href="/">← 返回全部项目</a>
      </header>

      <article className="fz-article">
        <section className="fz-hero" aria-labelledby="fz-hero-title">
          <div className="fz-hero-copy">
            <p className="fz-kicker">03 / IP COLLABORATION CASE</p>
            <div>
              <h1 id="fz-hero-title">茶话弄<br />× 非人哉</h1>
              <p className="fz-subtitle">「知兰」IP 联名</p>
            </div>
            <div className="fz-hero-intro">
              <p className="fz-role-line">品牌策划 / IP 联名 / 整合传播</p>
              <p>围绕茶话弄新品「知兰」，结合《非人哉》的神仙世界观与年轻职场人群，策划「神仙打工人喝神仙奶茶」传播概念，并推进定制动画、漫画内容、KOL/KOC传播及主题门店活动落地。</p>
              <ul className="fz-tag-list" aria-label="项目标签">
                {['IP联名', '传播概念', '内容共创', 'KOL/KOC', '线下活动'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>
          <figure className="fz-hero-media">
            <Image
              src={`${assetRoot}/hero/collaboration-family.png`}
              alt="茶话弄 × 非人哉联名饮品及周边全家福"
              width={956}
              height={1243}
              sizes="(max-width: 760px) 100vw, 50vw"
              priority
            />
          </figure>
        </section>

        <section className="fz-section fz-overview" aria-labelledby="fz-overview-title">
          <SectionHeading eyebrow="PROJECT OVERVIEW / 项目概览" title="让新品、角色与职场情绪落在同一个主题里" number="01" id="fz-overview-title" />
          <dl className="fz-meta-grid">
            <div><dt>项目时间</dt><dd>2024.06.07 — 07.24</dd><span>部分周边活动物料：06.07 — 07.04</span></div>
            <div><dt>联名产品</dt><dd>茶话弄「知兰」</dd></div>
            <div><dt>项目类型</dt><dd>品牌策划 / IP 联名 / 整合传播</dd></div>
          </dl>
          <div className="fz-responsibility-layout" aria-label="项目职责">
            <ResponsibilityList label="主导 / LEAD" items={leadResponsibilities} />
            <ResponsibilityList label="协同 / COLLABORATE" items={collaborativeResponsibilities} collaborative />
          </div>
          <div className="fz-big-idea" aria-labelledby="fz-idea-title">
            <div className="fz-big-idea-title">
              <p>BIG IDEA</p>
              <h3 id="fz-idea-title">神仙打工人<br />喝神仙奶茶</h3>
            </div>
            <div className="fz-big-idea-copy">
              <p>核心创意来自年轻职场消费者与《非人哉》神仙打工人设定的结合。</p>
              <p>茶话弄奶茶核心消费群体与年轻职场人高度重合，而《非人哉》中的神仙角色被置于现代工作与生活语境中，本身具有明显的“打工人”共鸣。</p>
              <p>同时，新品「知兰」以兰花香气为产品特色，兰花长期具有清雅与仙意的文化联想。因此将新品、IP设定与职场情绪统一在这一传播主题中。</p>
            </div>
          </div>
        </section>

        <section className="fz-section fz-content" aria-labelledby="fz-content-title">
          <SectionHeading eyebrow="IP CONTENT / 联名内容与周边" title="把角色世界观延伸到新品与消费场景" number="02" id="fz-content-title" />
          <p className="fz-lead fz-content-intro">围绕传播主题，与《非人哉》IP方共同推进定制内容及联名物料，将角色世界观延伸至新品传播和消费场景。</p>
          <div className="fz-content-lists">
            <div>
              <p className="fz-label">定制内容</p>
              <ul>{customContent.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <p className="fz-label">联名周边</p>
              <ul>{merchandise.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <div className="fz-merch-spread">
            <figure>
              <Image src={`${assetRoot}/merch/campaign-material-01.png`} alt="神仙联名周边活动物料：漫画书签与 Q 版贴纸" width={956} height={1280} sizes="(max-width: 760px) 100vw, 48vw" />
              <figcaption><span>01</span>漫画书签 / Q版贴纸等联名玩法</figcaption>
            </figure>
            <figure>
              <Image src={`${assetRoot}/merch/campaign-material-02.png`} alt="神仙联名周边活动物料：亚克力立牌与联名手机壳等限定玩法" width={956} height={1280} sizes="(max-width: 760px) 100vw, 48vw" />
              <figcaption><span>02</span>亚克力立牌 / 联名手机壳等限定玩法</figcaption>
            </figure>
          </div>
        </section>

        <section className="fz-section fz-campaign" aria-labelledby="fz-campaign-title">
          <SectionHeading eyebrow="CAMPAIGN / 线上 × 线下传播" title="从内容共创延伸到真实消费场景" number="03" id="fz-campaign-title" />
          <div className="fz-campaign-intro">
            <p className="fz-lead">围绕联名传播主题，通过官宣内容、IP角色内容、KOL/KOC传播、用户互动及主题门店活动，让联名不只停留在产品包装层面。</p>
            <figure>
              <Image src={`${assetRoot}/campaign/theme-store-interaction.png`} alt="茶话弄 × 非人哉主题门店现场角色互动" width={956} height={1243} sizes="(max-width: 760px) 100vw, 50vw" />
              <figcaption>主题门店 / 现场角色互动</figcaption>
            </figure>
          </div>
          <div className="fz-channel-grid">
            <div>
              <p className="fz-channel-number">01</p>
              <h3>线上</h3>
              <ul>{onlineCampaign.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <p className="fz-channel-number">02</p>
              <h3>线下</h3>
              <ul>{offlineCampaign.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <aside className="fz-animation-link" aria-labelledby="fz-animation-title">
            <div>
              <p className="fz-label">ORIGINAL CONTENT</p>
              <h3 id="fz-animation-title">联名定制动画</h3>
            </div>
            <p>围绕「神仙打工人喝神仙奶茶」传播概念，与IP方沟通并推进定制动画脚本与内容落地。</p>
            <ExternalLink href="https://xhslink.cn/o/3O5O29v77Qe">查看联名定制动画 ↗</ExternalLink>
          </aside>
        </section>

        <section className="fz-section fz-results" aria-labelledby="fz-results-title">
          <SectionHeading eyebrow="RESULTS / 项目结果" title="让联名走向用户自传播与真实互动" number="04" id="fz-results-title" />
          <div className="fz-results-grid">
            {results.map((result, index) => (
              <div key={result.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </div>
            ))}
          </div>
          <p className="fz-results-summary">通过IP内容共创、线上传播与线下场景联动，推动联名从品牌发布进一步转化为用户自传播与真实消费互动。</p>
        </section>
      </article>

      <nav className="detail-next fz-next" aria-label="项目详情导航">
        <a href="/">← 返回全部项目</a>
        <a href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</a>
      </nav>
    </main>
  );
}
