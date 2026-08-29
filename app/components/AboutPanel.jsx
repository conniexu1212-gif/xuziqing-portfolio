/* eslint-disable @next/next/no-img-element -- This portrait is a pre-cropped local WebP with fixed authored dimensions. */

export default function AboutPanel() {
  return (
    <div className="about-panel">
      <figure className="about-portrait">
        <img
          src="/assets/about/xuziqing-portrait.webp"
          alt="徐子晴在海边的半身肖像"
          width="960"
          height="1200"
          loading="eager"
          decoding="async"
        />
        <figcaption>PORTRAIT / XUZIQING</figcaption>
      </figure>

      <header className="about-identity">
        <p className="profile-name">XUZIQING</p>
        <p className="profile-name-cn">徐子晴</p>
        <p className="profile-role">游戏营销 · 品牌营销 · 内容策划</p>
      </header>

      <div className="about-details">
        <div className="about-intro">
          <p>
            拥有游戏发行、消费品牌与内容平台的跨行业市场营销经历，参与过主机 / PC 游戏发行、
            品牌 Campaign、IP 联名、内容运营与线下事件等不同类型项目。
          </p>
          <p>目前希望继续深耕游戏营销、品牌营销及内容策划相关岗位。</p>
        </div>

        <dl className="quick-facts">
          <div>
            <dt>教育背景</dt>
            <dd><strong>上海戏剧学院</strong><span>艺术管理｜硕士研究生</span></dd>
          </div>
          <div>
            <dt>经历领域</dt>
            <dd><strong>游戏发行</strong><span>消费品牌 · 内容平台</span></dd>
          </div>
          <div>
            <dt>核心方向</dt>
            <dd><strong>整合营销 · 内容策略</strong><span>品牌 Campaign · 游戏发行</span></dd>
          </div>
        </dl>

        <div className="about-summary">
          <section aria-labelledby="about-experience-title">
            <p className="about-section-label" id="about-experience-title">近期经历</p>
            <ol className="about-experience-list">
              <li>
                <time>2025.08 — 2026.07</time>
                <div><strong>上海星游纪信息技术有限公司</strong><span>市场运营</span></div>
              </li>
              <li>
                <time>2024.03 — 2025.07</time>
                <div><strong>茶话弄</strong><span>品牌策划 / CMO 助理</span></div>
              </li>
            </ol>
          </section>

          <section aria-labelledby="about-strengths-title">
            <p className="about-section-label" id="about-strengths-title">工作侧重</p>
            <ul className="about-strengths">
              <li>从策略到执行的项目统筹</li>
              <li>游戏 / 品牌跨行业经验</li>
              <li>社媒内容与 Campaign 策划</li>
              <li>多平台 / 多团队协作</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
