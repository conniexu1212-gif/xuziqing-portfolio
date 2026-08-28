import Link from 'next/link';
import { notFound } from 'next/navigation';
import FeirenzaiCase from '../../components/projects/FeirenzaiCase';
import PragmataCase from '../../components/projects/PragmataCase';
import PlayStationFrontlineCase from '../../components/projects/PlayStationFrontlineCase';
import SnakeDogCase from '../../components/projects/SnakeDogCase';
import SplitFictionCase from '../../components/projects/SplitFictionCase';
import SummerTeaCase from '../../components/projects/SummerTeaCase';
import VanishingStarlightCase from '../../components/projects/VanishingStarlightCase';
import { getProject, projects } from '../../data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const description = project.slug === 'puppy-snake'
    ? '围绕 2025 蛇年春节节点，以年轻化 IP「小狗蛇」联动红包封面、动态表情包、社媒内容、UGC 与漫展线下活动，拓展品牌年轻消费人群。'
    : project.slug === 'star-ember'
      ? '围绕《星烬·烛耀山海》正式上线，推进 PS5、Steam、WeGame 多平台发行、社媒内容与 Launch Trailer 海外官方渠道发布。'
      : project.overview;
  const title = project.slug === 'puppy-snake'
    ? '茶话弄 × 小狗蛇｜蛇年春节 IP 联名｜XUZIQING'
    : project.slug === 'feirenzai'
    ? '茶话弄 × 非人哉｜XUZIQING'
    : project.slug === 'summer-tea'
      ? '茶话弄｜世界茶·夏日季｜XUZIQING'
      : project.slug === 'star-ember'
        ? '《星烬·烛耀山海》｜Vanishing Starlight｜XUZIQING'
      : `${project.title}｜XUZIQING`;
  const images = project.slug === 'puppy-snake'
    ? [{ url: '/assets/projects/snake-dog/hero/spring-festival-campaign-kv-clean.png', width: 790, height: 1706, alt: '茶话弄与小狗蛇 2025 蛇年春节联名主视觉' }]
    : project.slug === 'feirenzai'
    ? [{ url: '/assets/projects/feirenzai/hero/collaboration-family.png', width: 956, height: 1243, alt: '茶话弄 × 非人哉联名饮品及周边全家福' }]
    : project.slug === 'split-fiction'
    ? [{ url: '/assets/projects/split-fiction/hero/official-kv.jpg', width: 800, height: 800, alt: '《双影奇境》PS5 国行版官方主视觉' }]
    : project.slug === 'playstation-frontline'
      ? [{ url: '/assets/projects/playstation-frontline/content/new-release-ikuma.png', width: 368, height: 521, alt: 'PlayStation 玩家前线 iKUMA 内容封面' }]
      : project.slug === 'summer-tea'
        ? [{ url: '/assets/projects/summer-tea/hero/summer-dream-tropical-duo-kv.jpg', width: 1280, height: 1708, alt: '茶话弄夏梦熏风双杯新品主视觉' }]
        : project.slug === 'star-ember'
          ? [{ url: '/assets/projects/vanishing-starlight/hero/launch-kv.jpg', width: 2091, height: 1170, alt: '《星烬·烛耀山海》现已发售主视觉' }]
          : project.slug === 'pragmata'
            ? [{ url: '/assets/projects/pragmata/hero/hero-character.jpg', width: 750, height: 945, alt: 'PRAGMATA 戴安娜与机甲角色主视觉' }]
        : [];
  return {
    title,
    description,
    openGraph: { title, description, images },
    twitter: { title, description, images },
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

  if (project.slug === 'playstation-frontline') {
    return <PlayStationFrontlineCase project={project} nextProject={nextProject} />;
  }

  if (project.slug === 'feirenzai') {
    return <FeirenzaiCase project={project} nextProject={nextProject} />;
  }

  if (project.slug === 'summer-tea') {
    return <SummerTeaCase project={project} nextProject={nextProject} />;
  }

  if (project.slug === 'puppy-snake') {
    return <SnakeDogCase project={project} nextProject={nextProject} />;
  }

  if (project.slug === 'star-ember') {
    return <VanishingStarlightCase project={project} nextProject={nextProject} />;
  }

  if (project.slug === 'pragmata') {
    return <PragmataCase project={project} />;
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
