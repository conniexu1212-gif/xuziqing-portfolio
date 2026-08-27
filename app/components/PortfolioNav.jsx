'use client';

import { useState } from 'react';
import PortfolioOverlay from './PortfolioOverlay.jsx';

const panels = [
  { id: 'about', label: '关于我', mobileLabel: '关于我' },
  { id: 'experience', label: '工作经历', mobileLabel: '经历' },
  { id: 'projects', label: '项目经历', mobileLabel: '项目' },
  { id: 'skills', label: '个人能力', mobileLabel: '能力' },
];

function NavButtons({ mobile, activePanel, openPanel }) {
  return panels.map((panel, index) => (
    <button
      type="button"
      key={panel.id}
      className={activePanel === panel.id ? 'is-active' : undefined}
      aria-expanded={activePanel === panel.id}
      aria-controls="portfolio-dialog"
      onClick={() => openPanel(panel.id)}
    >
      <span className="nav-number">0{index + 1}</span>
      <span>{mobile ? panel.mobileLabel : panel.label}</span>
    </button>
  ));
}

export default function PortfolioNav() {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <>
      <nav className="portfolio-nav desktop-nav" aria-label="作品集导航">
        <NavButtons activePanel={activePanel} openPanel={setActivePanel} />
      </nav>
      <nav className="portfolio-nav mobile-dock" aria-label="作品集导航">
        <NavButtons mobile activePanel={activePanel} openPanel={setActivePanel} />
      </nav>
      {activePanel && (
        <PortfolioOverlay activePanel={activePanel} onClose={() => setActivePanel(null)} />
      )}
    </>
  );
}
