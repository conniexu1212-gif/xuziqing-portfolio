import Image from 'next/image';
import Link from 'next/link';

const assetRoot = '/assets/projects/pragmata';

export default function PragmataCase({ nextProject }) {
  return (
    <main className="detail-page prg-page">
      <header className="detail-header prg-header">
        <Link className="wordmark" href="/#top">XUZIQING</Link>
        <Link className="detail-back" href="/#top">← 返回全部项目</Link>
      </header>

      <article className="prg-article">
        <section className="prg-hero" aria-labelledby="prg-hero-title">
          <div className="prg-hero-grid">
            <div className="prg-hero-copy">
              <p className="prg-kicker">PHYSICAL RELEASE / IP SUPERVISION</p>
              <div className="prg-title-group">
                <h1 id="prg-hero-title">PRAGMATA</h1>
                <p>港版 PS5 实体发行 / 周边监修</p>
              </div>
              <dl className="prg-meta">
                <div><dt>类型</dt><dd>商品发行 / IP监修 / 周边开发</dd></div>
                <div><dt>时间</dt><dd>2026.04.16 发售</dd></div>
              </dl>
              <p className="prg-overview">围绕《PRAGMATA》港版 PS5 实体版发售，参与实体商品发行及限定赠品开发，并对接 CAPCOM 推进 IP 规范确认与设计监修。</p>
            </div>

            <figure className="prg-hero-media">
              <Image
                src={`${assetRoot}/hero/hero-character.jpg`}
                alt="PRAGMATA 戴安娜与机甲角色主视觉"
                width={750}
                height={945}
                sizes="(max-width: 760px) 100vw, 52vw"
                priority
              />
            </figure>
          </div>

          <div className="prg-hero-details">
            <div>
              <p className="prg-label">CORE RELEASE / 核心发行内容</p>
              <ul>
                <li>港版 PS5 实体光盘</li>
                <li>港版限定戴安娜角色透卡</li>
              </ul>
            </div>
            <div>
              <p className="prg-label">MY ROLE / 我的职责</p>
              <ul>
                <li>港版 PS5 实体发行协同</li>
                <li>限定透卡赠品开发、周边选品及供应商物料推进</li>
                <li>CAPCOM IP 规范核对及设计稿监修沟通</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="prg-products" aria-labelledby="prg-products-title">
          <div className="prg-section-heading">
            <p>PRODUCT HIGHLIGHTS / 商品亮点</p>
            <h2 id="prg-products-title">实体发行与限定赠品</h2>
          </div>

          <div className="prg-product-layout">
            <figure className="prg-product prg-product-disc">
              <div className="prg-product-frame">
                <Image
                  src={`${assetRoot}/product/ps5-hk-physical-edition.jpg`}
                  alt="PRAGMATA 港版 PS5 实体光盘，售价 HKD 448"
                  width={420}
                  height={442}
                  sizes="(max-width: 760px) 100vw, 46vw"
                />
              </div>
              <figcaption>港版 PS5 实体光盘</figcaption>
            </figure>

            <figure className="prg-product prg-product-bonus">
              <div className="prg-product-frame">
                <Image
                  src={`${assetRoot}/product/limited-bonus-card.jpg`}
                  alt="PRAGMATA 港版独家戴安娜角色限定透卡"
                  width={696}
                  height={483}
                  sizes="(max-width: 760px) 100vw, 43vw"
                />
              </div>
              <figcaption>港版限定戴安娜角色透卡</figcaption>
            </figure>

            <div className="prg-product-video">
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${assetRoot}/video/video-poster.jpg`}
                aria-label="PRAGMATA 港版实体光盘与限定周边展示视频"
              >
                <source src={`${assetRoot}/video/product-showcase.mp4`} type="video/mp4" />
                您的浏览器暂不支持视频播放。
              </video>
            </div>
          </div>
        </section>

        <section className="prg-closing" aria-label="项目总结与项目导航">
          <p>围绕港版 PS5 实体版发售，推进限定透卡赠品、供应商物料及 CAPCOM 监修流程落地，完成实体商品与配套赠品的发行支持。</p>
          <nav aria-label="项目详情导航">
            <Link href="/#top">← 返回全部项目</Link>
            <Link href={`/projects/${nextProject.slug}`}>下一个项目：{nextProject.title} →</Link>
          </nav>
        </section>
      </article>
    </main>
  );
}
