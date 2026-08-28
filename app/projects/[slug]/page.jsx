import Link from 'next/link';
import { notFound } from 'next/navigation';
import SplitFictionCase from '../../components/projects/SplitFictionCase';
import { getProject, projects } from '../../data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const images = project.slug === 'split-fiction'
    ? [{ url: '/assets/projects/split-fiction/hero/official-kv.jpg', width: 800, height: 800, alt: '《双影奇境》PS5 国行版官方主视觉' }]
    : [];
  return {
    title: `${project.title}｜XUZIQING`,
    description: project.overview,
    openGraph: { title: `${project.title}｜XUZIQING`, description: project.overview, images },
    twitter: { title: `${project.title}｜XUZIQING`, description: project.overview, images },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  if (project.slug === 'split-fiction') {
    return <SplitFictionCase project={project} nextProject={nextProject} />;
  }

  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link className="wordmark" href="/#top">XUZIQING</Link>
        <Link className="detail-back" href="/#top">← 返回首页</Link>
      </header>

      <article>
        <section className="detail-hero">
          <p>{project.index} / {project.category}</p>
          <h1>{project.title}</h1>
          {project.englishTitle && <p className="english-title">{project.englishTitle}</p>}
          <p className="detail-subtitle">{project.subtitle}</p>
        </section>

        <section className="detail-block project-overview" aria-labelledby="overview-title">
          <div className="detail-label"><p>PROJECT OVERVIEW</p><h2 id="overview-title">项目概览</h2></div>
          <dl className="project-meta">
            <div><dt>时间</dt><dd>{project.meta.time}</dd></div>
            <div><dt>品牌 / 产品</dt><dd>{project.meta.product}</dd></div>
            <div><dt>我的角色</dt><dd>{project.meta.role}</dd></div>
            <div><dt>项目类型</dt><dd>{project.meta.type}</dd></div>
          </dl>
        </section>

        <section className="detail-block split-detail" aria-labelledby="background-title">
          <div className="detail-label"><p>CONTEXT</p><h2 id="background-title">项目背景</h2></div>
          <p className="detail-text">{project.background}</p>
        </section>

        <section className="detail-block split-detail" aria-labelledby="work-title">
          <div className="detail-label"><p>MY WORK</p><h2 id="work-title">我的工作内容</h2></div>
          <ol className="numbered-list">
            {project.responsibilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}
          </ol>
        </section>

        <section className="detail-block split-detail" aria-labelledby="action-title">
          <div className="detail-label"><p>ACTIONS</p><h2 id="action-title">核心策略 / 关键动作</h2></div>
          <ul className="detail-bullets">{project.actions.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="detail-block" aria-labelledby="metrics-title">
          <div className="detail-label"><p>RESULTS</p><h2 id="metrics-title">成果数据</h2></div>
          <div className="metrics-grid">{project.metrics.map((item) => <p key={item}>{item}</p>)}</div>
        </section>

        <section className="detail-block media-block" aria-labelledby="video-title">
          <div className="detail-label"><p>VIDEO</p><h2 id="video-title">项目视频</h2></div>
          <div className="video-placeholder" role="img" aria-label={`${project.title}项目视频占位`}>
            <span>▶</span>
            <p>视频素材待补充</p>
            <small>未来支持本地 MP4 / 外部链接，默认不自动播放</small>
          </div>
        </section>

        <section className="detail-block media-block" aria-labelledby="gallery-title">
          <div className="detail-label"><p>GALLERY</p><h2 id="gallery-title">项目图集</h2></div>
          <div className="gallery-placeholder">
            {[1, 2, 3].map((item) => <div key={item} role="img" aria-label={`${project.title}项目图片占位 ${item}`}>0{item}</div>)}
          </div>
        </section>
      </article>

      <nav className="detail-next" aria-label="项目详情导航">
        <Link href="/#top">返回首页</Link>
        <Link href={`/projects/${nextProject.slug}`}>
          下一个项目 →
        </Link>
      </nav>
    </main>
  );
}
