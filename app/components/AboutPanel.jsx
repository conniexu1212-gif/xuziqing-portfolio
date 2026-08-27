export default function AboutPanel() {
  return (
    <div className="about-panel">
      <div className="portrait-placeholder" role="img" aria-label="徐子晴个人肖像占位">
        <span>PORTRAIT</span>
        <strong>XQ</strong>
        <small>IMAGE PLACEHOLDER</small>
      </div>
      <div className="about-content">
        <p className="profile-name">XUZIQING</p>
        <p className="profile-role">游戏营销 · 品牌营销 · 内容策划</p>
        <p className="about-lead">
          我拥有游戏发行、消费品牌及内容平台的跨行业市场营销经历，目前主要关注
          <strong>游戏营销、品牌营销与内容策划</strong>。
        </p>
        <dl className="quick-facts">
          <div><dt>教育</dt><dd>上海戏剧学院<br />艺术管理硕士</dd></div>
          <div><dt>经验领域</dt><dd>游戏发行 / 消费品牌 / 内容平台</dd></div>
          <div><dt>核心方向</dt><dd>整合营销 / 内容策略 / 品牌 Campaign / 游戏发行</dd></div>
        </dl>
      </div>
    </div>
  );
}
