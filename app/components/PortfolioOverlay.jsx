'use client';

import { useEffect, useRef } from 'react';
import AboutPanel from './AboutPanel.jsx';
import ExperiencePanel from './ExperiencePanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import SkillsPanel from './SkillsPanel.jsx';

const panelConfig = {
  about: { eyebrow: '01 / PROFILE', title: '关于我', component: AboutPanel },
  experience: { eyebrow: '02 / EXPERIENCE', title: '工作经历', component: ExperiencePanel },
  projects: { eyebrow: '03 / SELECTED WORK', title: '项目经历', component: ProjectsPanel },
  skills: { eyebrow: '04 / CAPABILITIES', title: '个人能力', component: SkillsPanel },
};

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function PortfolioOverlay({ activePanel, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const config = panelConfig[activePanel];
  const Panel = config.component;

  useEffect(() => {
    const returnFocusTo = document.activeElement;
    document.body.classList.add('overlay-open');
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll(focusableSelector)];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overlay-open');
      if (returnFocusTo instanceof HTMLElement) returnFocusTo.focus();
    };
  }, [activePanel, onClose]);

  return (
    <div className="overlay-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        className={`portfolio-overlay overlay-${activePanel}`}
        id="portfolio-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-dialog-title"
      >
        <div className="overlay-bar">
          <p>{config.eyebrow}</p>
          <button ref={closeRef} type="button" onClick={onClose} aria-label={`关闭${config.title}面板`}>
            关闭 <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="overlay-scroll">
          <header className="overlay-heading">
            <p>{config.eyebrow}</p>
            <h2 id="portfolio-dialog-title">{config.title}</h2>
          </header>
          <Panel />
        </div>
      </section>
    </div>
  );
}
