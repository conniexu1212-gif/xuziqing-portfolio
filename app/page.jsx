/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors bypass broken Vinext RSC client navigation in production. */
import PortfolioNav from './components/PortfolioNav.jsx';
import { heroProjects } from './data/projects';

export default function Home() {
  return (
    <main className="home-page" id="top">
      <header className="home-header">
        <a className="wordmark" href="/#top" aria-label="返回首页顶部">XUZIQING</a>
        <PortfolioNav />
      </header>

      <section className="hero-scene" aria-labelledby="hero-title">
        <div className="hero-copy enter">
          <p>PORTFOLIO / 2026</p>
          <h1 id="hero-title">XUZIQING</h1>
          <p className="hero-name-cn">徐子晴</p>
          <p className="hero-role">游戏营销 · 品牌营销 · 内容策划</p>
        </div>

        <div className="sticker-field" aria-label="精选项目入口">
          {heroProjects.map((project, index) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`project-sticker sticker-${project.slug}`}
              aria-label={`查看项目：${project.title}`}
              style={{ animationDelay: `${150 + index * 65}ms` }}
            >
              <span className="sticker-visual">
                <img
                  src={project.heroImage}
                  alt={project.heroAlt}
                  loading="eager"
                  decoding="async"
                  fetchPriority={project.slug === 'split-fiction' ? 'high' : 'auto'}
                />
              </span>
              <span className="sticker-label">
                <span className="sticker-meta">
                  <span className="sticker-title">{project.title}</span>
                  <span className="sticker-subtitle">{project.subtitle}</span>
                </span>
                <span className="sticker-cta" aria-hidden="true">查看项目 ↗</span>
              </span>
            </a>
          ))}
        </div>

        <a className="home-contact" href="mailto:yanhee1007@163.com">
          CONTACT · yanhee1007@163.com ↗
        </a>
      </section>
    </main>
  );
}
