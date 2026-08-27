import Link from 'next/link';
import { heroProjects, projects } from './data/projects';

const experiences = [
  {
    period: '2025.08—2026.07',
    company: '上海星游纪信息技术有限公司',
    role: '市场运营',
    summary: '主机 / PC 游戏发行、内容营销、平台合作、线下活动。',
    tags: ['《双影奇境》', '《星烬·烛耀山海》', 'PRAGMATA', 'PlayStation 玩家前线'],
  },
  {
    period: '2024.03—2025.07',
    company: '茶话弄',
    role: '品牌策划 / CMO 助理',
    summary: '品牌整合营销、IP 联名、品牌策略与 Campaign。',
    tags: ['世界茶·夏日季', '非人哉联名', '小狗蛇联名', '循季而饮'],
  },
  {
    period: '2022.08—2023.03',
    company: '哔哩哔哩',
    role: '内容运营（见习）',
    summary: '热点内容、线上宣传与创作者运营。',
    tags: ['“纣王快乐舞”话题', '舞剧《咏春》线上宣传'],
  },
  {
    period: '2022.08—2023.01',
    company: '蓝色光标',
    role: 'AE / KOL Marketing',
    summary: '达人筛选、Brief、内容沟通与投后复盘。',
    tags: ['快消', '酒类', '金融品牌'],
  },
];

const skillGroups = [
  { number: '01', title: '策略', items: ['整合营销', 'Campaign 策划', '游戏发行营销', '品牌策略'] },
  { number: '02', title: '内容', items: ['内容策略', '社媒策划', '文案', 'PV 创意', '内容复盘'] },
  { number: '03', title: '协作', items: ['平台合作', 'IP / 版权方沟通', '跨部门协同', '供应商沟通'] },
  { number: '04', title: '执行', items: ['线下活动', '电商内容', '项目统筹', '数据复盘'] },
];

function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="#top" aria-label="返回首页顶部">XUZIQING</Link>
      <nav aria-label="主导航">
        <a href="#about">关于我</a>
        <a href="#experience">工作经历</a>
        <a href="#projects">项目经历</a>
        <a href="#skills">个人能力</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy enter">
        <p>PORTFOLIO / 2026</p>
        <h1 id="hero-title">XUZIQING</h1>
        <p className="hero-role">游戏营销 · 品牌营销 · 内容策划</p>
      </div>
      <div className="sticker-field" aria-label="精选项目入口">
        {heroProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`project-sticker sticker-${project.slug}`}
            aria-label={`查看项目：${project.title}`}
            style={{ animationDelay: `${150 + index * 65}ms` }}
          >
            <span className="sticker-index">{project.index}</span>
            <span className="sticker-title">{project.title}</span>
            <span className="sticker-subtitle">{project.subtitle}</span>
            <span className="sticker-cta">查看项目 ↗</span>
          </Link>
        ))}
      </div>
      <a className="scroll-cue" href="#about">向下浏览 ↓</a>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading eyebrow="01 / PROFILE" title="关于我" />
      <div className="about-grid">
        <p className="about-lead">
          我拥有游戏发行、消费品牌及内容平台的跨行业市场营销经历，目前主要关注
          <strong>游戏营销、品牌营销与内容策划</strong>。
        </p>
        <dl className="quick-facts">
          <div><dt>教育</dt><dd>上海戏剧学院<br />艺术管理硕士</dd></div>
          <div><dt>经验领域</dt><dd>游戏发行<br />消费品牌<br />内容平台</dd></div>
          <div><dt>核心方向</dt><dd>整合营销<br />内容策略<br />品牌 Campaign<br />游戏发行</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading eyebrow="02 / EXPERIENCE" title="工作经历" />
      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-row" key={`${item.company}-${item.period}`}>
            <p className="experience-period">{item.period}</p>
            <div>
              <h3>{item.company}</h3>
              <p className="experience-role">{item.role}</p>
            </div>
            <div>
              <p>{item.summary}</p>
              <ul className="tag-list" aria-label={`${item.company}相关项目`}>
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading eyebrow="03 / SELECTED WORK" title="项目经历" />
      <p className="section-intro">不操作首屏也能快速浏览的项目目录。正式图片与完整 Case Study 将在后续素材到位后替换。</p>
      <div className="project-directory">
        {projects.map((project) => (
          <Link className={`directory-card directory-${project.tier}`} href={`/projects/${project.slug}`} key={project.slug}>
            <div className="placeholder-art" role="img" aria-label={`${project.title}项目图片占位`}>
              <span>{project.index}</span>
              <span>IMAGE<br />PLACEHOLDER</span>
            </div>
            <div className="directory-copy">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.overview}</p>
              <span>查看项目 ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading eyebrow="04 / CAPABILITIES" title="个人能力" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <p>{group.number}</p>
            <h3>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p className="footer-title">XUZIQING</p>
      <div>
        <p>CONTACT</p>
        <a href="mailto:yanhee1007@163.com">yanhee1007@163.com ↗</a>
      </div>
      <a className="back-top" href="#top">回到顶部 ↑</a>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
