import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const [sparks, setSparks] = useState([]);
  const [visibleStations, setVisibleStations] = useState([]);
  const [activeStage, setActiveStage] = useState(null);

  useEffect(() => {
    const s = Array.from({length: 18}, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    }));
    setSparks(s);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleStations(prev => [...prev, entry.target.dataset.station]);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('[data-station]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeStage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveStage(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeStage]);

  const handleSliderMove = (e) => {
    if (!dragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  const principles = [
    { n: '01', title: 'Clarity', desc: 'Every sentence earns its place. Developers find what they need without reading twice.' },
    { n: '02', title: 'Accuracy', desc: 'Every code example runs. Every endpoint path exists. No guessing.' },
    { n: '03', title: 'Consistency', desc: 'Same terminology, same structure, same voice across every page.' },
    { n: '04', title: 'Maintainability', desc: 'Docs live in version control. Updates ship with the code that changes them.' },
    { n: '05', title: 'Discoverability', desc: 'Organized around what developers want to accomplish, not how the API was built.' },
    { n: '06', title: 'Scalability', desc: 'Systems that work for one endpoint work for one hundred.' },
    { n: '07', title: 'Developer Experience', desc: 'First API call in under five minutes. That is the benchmark.' },
  ];

  const stations = [
    { id: 'api', title: 'API Documentation', desc: 'Complete reference docs, getting started guides, code examples in multiple languages, and OpenAPI specifications — built to the standard set by Stripe and Twilio.', tag: 'Most Requested' },
    { id: 'portal', title: 'Developer Portals', desc: 'End-to-end documentation systems with navigation, search, versioning, and deployment. Built on Docusaurus and deployed to GitHub Pages or Netlify — free forever.', tag: null },
    { id: 'sop', title: 'SOP & Process Documentation', desc: 'Standard operating procedures for documentation workflows. Research SOPs, review checklists, delivery pipelines, and quality assurance frameworks.', tag: null },
    { id: 'kb', title: 'Knowledge Bases', desc: 'Structured content systems for technical knowledge — organized, searchable, and maintainable by teams without a dedicated writer.', tag: null },
  ];

  const arsenal = [
    { name: 'API Reference Template', desc: 'Endpoint docs, parameter tables, code examples', tier: 'Pro' },
    { name: 'Getting Started Guide', desc: 'First API call in 5 minutes', tier: 'Starter' },
    { name: 'OpenAPI YAML Template', desc: 'Machine-readable spec, human-readable docs', tier: 'Pro' },
    { name: 'SOP Template Pack', desc: 'Research, review, publish, maintain', tier: 'Enterprise' },
    { name: 'Error Code Reference', desc: 'Every status, every fix, every resolution', tier: 'Starter' },
    { name: 'Authentication Guide', desc: 'Bearer tokens, OAuth, API keys', tier: 'Pro' },
    { name: 'Webhook Documentation', desc: 'Events, delivery, signatures, retries', tier: 'Pro' },
    { name: 'Changelog Template', desc: 'Versioned releases, breaking changes', tier: 'Starter' },
    { name: 'Migration Guide', desc: 'v1 to v2, clean and complete', tier: 'Enterprise' },
    { name: 'Style Guide Template', desc: 'Terminology, voice, formatting rules', tier: 'Enterprise' },
  ];

  const tierColors = { Starter: '#22c55e', Pro: '#f97316', Enterprise: '#7c3aed' };

  const pipelineStages = [
    {
      n: '01',
      title: 'Requirements Gathering',
      desc: 'We collaborate with your team to understand goals, audience, and scope through kick-off meetings, forms, and stakeholder alignment.',
      image: '/img/pipeline/step-01.png',
    },
    {
      n: '02',
      title: 'Research & Analysis',
      desc: 'We collect and analyze technical information from all available sources to build a complete understanding.',
      image: '/img/pipeline/step-02.png',
    },
    {
      n: '03',
      title: 'Content Planning',
      desc: 'We structure information, define the documentation outline, and plan the best way to communicate it.',
      image: '/img/pipeline/step-03.png',
    },
    {
      n: '04',
      title: '7Forge — The Forge',
      desc: '7Forge Technical Writing is the human in the loop — crafting clear, accurate, and developer-friendly documentation with expertise, review, and the right tools.',
      image: '/img/pipeline/step-04.png',
    },
    {
      n: '05',
      title: 'Review & Feedback',
      desc: 'We review for accuracy, clarity, and completeness with internal checks and your feedback to ensure everything is right.',
      image: '/img/pipeline/step-05.png',
    },
    {
      n: '06',
      title: 'Publish & Deliver',
      desc: 'We format, publish, and deliver your documentation in the right platforms and formats — ready for your users.',
      image: '/img/pipeline/step-06.png',
    },
    {
      n: '07',
      title: 'Maintain & Improve',
      desc: 'We continuously update and improve documentation as your product evolves and your users grow.',
      image: '/img/pipeline/step-07.png',
    },
  ];

  return (
    <Layout title="7Forge Technical Writing" description="Forging Technical Documentation That Developers Actually Use">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');

        .forge-page * { box-sizing: border-box; }
        .forge-page {
          --fg-950: #0d0d12;
          --fg-900: #111827;
          --fg-800: #1f2937;
          --fg-700: #374151;
          --fg-50: #f9fafb;
          --fg-400: #9ca3af;
          --fg-500: #6b7280;
          --fg-600: #4b5563;
          font-family: 'Inter', sans-serif;
          background: var(--fg-900);
        }
        html[data-theme='light'] .forge-page {
          --fg-950: #ffffff;
          --fg-900: #f8fafc;
          --fg-800: #f1f5f9;
          --fg-700: #e2e8f0;
          --fg-50: #0f172a;
          --fg-400: #475569;
          --fg-500: #64748b;
          --fg-600: #94a3b8;
        }

        /* HERO */
        .forge-hero {
          min-height: 100vh;
          background: var(--fg-950);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }
        .forge-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .forge-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(transparent, var(--fg-900));
          pointer-events: none;
        }

        .forge-spark {
          position: absolute;
          border-radius: 50%;
          background: #f97316;
          pointer-events: none;
          animation: sparkFloat linear infinite;
          opacity: 0;
        }
        @keyframes sparkFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-120px) scale(0); opacity: 0; }
        }

        /* LOGO */
        .forge-hero-logo {
          width: 120px;
          height: auto;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 0 20px rgba(249,115,22,0.3));
        }

        .forge-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }
        .forge-eyebrow::before { content: '// '; opacity: 0.5; }

        .forge-h1 {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 900;
          line-height: 1.08;
          color: var(--fg-50);
          margin: 0 0 28px;
          letter-spacing: -2px;
          position: relative;
          z-index: 1;
          max-width: 900px;
        }
        .forge-h1 em {
          font-style: normal;
          color: #f97316;
          position: relative;
        }
        .forge-h1 em::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0; right: 0;
          height: 3px;
          background: #f97316;
          opacity: 0.4;
          border-radius: 2px;
        }

        .forge-sub {
          font-size: 18px;
          color: var(--fg-400);
          max-width: 580px;
          line-height: 1.7;
          margin: 0 auto 48px;
          position: relative;
          z-index: 1;
        }

        /* PIPELINE */
        .forge-pipeline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          margin: 48px auto 56px;
          max-width: 960px;
          position: relative;
          z-index: 1;
        }

        .pipe-input {
          background: var(--fg-800);
          border: 1px solid #f97316;
          border-radius: 8px;
          padding: 10px 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--fg-400);
          text-align: center;
          min-width: 90px;
          cursor: pointer;
          margin: 0;
          transition: box-shadow 0.25s ease, transform 0.2s ease, border-color 0.25s ease;
        }
        .pipe-input:hover,
        .pipe-input:focus-visible {
          background: #2a2f3d;
          border-color: #f97316;
          color: #fed7aa;
          box-shadow: 0 0 20px rgba(249,115,22,0.6), 0 0 6px rgba(249,115,22,0.8);
          transform: translateY(-2px);
          outline: none;
        }

        .pipe-arrow {
          color: var(--fg-700);
          font-size: 16px;
          padding: 0 2px;
          flex-shrink: 0;
        }

        .pipe-forge {
          background: linear-gradient(135deg, #7c2d12, #9a3412, #c2410c);
          border: 2px solid #f97316;
          border-radius: 12px;
          padding: 16px 28px;
          text-align: center;
          box-shadow: 0 0 40px rgba(249,115,22,0.4), inset 0 0 20px rgba(249,115,22,0.1);
          animation: forgePulse 2s ease-in-out infinite;
          min-width: 120px;
          cursor: pointer;
          margin: 0;
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .pipe-forge:hover,
        .pipe-forge:focus-visible {
          box-shadow: 0 0 70px rgba(249,115,22,0.8), inset 0 0 24px rgba(249,115,22,0.2);
          transform: translateY(-2px);
          outline: none;
        }
        @keyframes forgePulse {
          0%, 100% { box-shadow: 0 0 40px rgba(249,115,22,0.4); }
          50% { box-shadow: 0 0 70px rgba(249,115,22,0.7); }
        }
        .pipe-forge-bar {
          width: 32px;
          height: 3px;
          background: #f97316;
          margin: 0 auto 6px;
          border-radius: 2px;
          box-shadow: 0 0 8px #f97316;
        }
        .pipe-forge-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #fed7aa;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .pipe-output {
          background: linear-gradient(135deg, var(--fg-900), var(--fg-800));
          border: 1px solid #f97316;
          border-radius: 8px;
          padding: 10px 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #fed7aa;
          text-align: center;
          min-width: 90px;
          cursor: pointer;
          margin: 0;
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .pipe-output:hover,
        .pipe-output:focus-visible {
          background: linear-gradient(135deg, #1a2030, #2a2f3d);
          box-shadow: 0 0 20px rgba(249,115,22,0.6), 0 0 6px rgba(249,115,22,0.8);
          transform: translateY(-2px);
          outline: none;
        }

        .forge-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .forge-btn-primary {
          background: #f97316;
          color: #fff !important;
          padding: 16px 36px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none !important;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }
        .forge-btn-primary:hover { background: #ea6c0a; transform: translateY(-1px); }
        .forge-btn-ghost {
          border: 1.5px solid var(--fg-700);
          color: var(--fg-400) !important;
          padding: 16px 36px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none !important;
          transition: all 0.2s;
        }
        .forge-btn-ghost:hover { border-color: #f97316; color: #f97316 !important; }

        /* SECTIONS */
        .forge-section { padding: 100px 24px; }
        .forge-section-dark { background: var(--fg-950); }
        .forge-section-mid { background: var(--fg-900); }

        .forge-container { max-width: 1100px; margin: 0 auto; }

        .forge-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #f97316;
          display: block;
          margin-bottom: 16px;
        }

        .forge-h2 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          color: var(--fg-50);
          letter-spacing: -1px;
          margin: 0 0 16px;
          line-height: 1.1;
        }

        .forge-lead {
          font-size: 17px;
          color: var(--fg-500);
          line-height: 1.7;
          max-width: 560px;
          margin: 0 0 56px;
        }

        /* FOUNDER */
        .forge-vision-text {
          font-size: 20px;
          color: #d1d5db;
          line-height: 1.8;
          max-width: 700px;
          border-left: 3px solid #f97316;
          padding-left: 24px;
          margin: 0 0 48px;
        }

        .forge-founder {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          background: var(--fg-800);
          border: 1px solid var(--fg-700);
          border-left: 3px solid #f97316;
          border-radius: 10px;
          padding: 28px;
          max-width: 600px;
        }
        .forge-avatar {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #f97316, #c2410c);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13px;
          color: white;
          flex-shrink: 0;
          font-family: 'JetBrains Mono', monospace;
        }
        .forge-founder-name { font-weight: 700; color: var(--fg-50); font-size: 16px; margin: 0 0 3px; }
        .forge-founder-role { color: #f97316; font-size: 11px; font-weight: 600; margin: 0 0 10px; font-family: 'JetBrains Mono', monospace; letter-spacing: 1px; text-transform: uppercase; }
        .forge-founder-bio { color: var(--fg-500); font-size: 14px; line-height: 1.6; margin: 0; }
        .forge-founder-creds { margin: 14px 0 0; }
        .forge-cred-badge {
          display: inline-block;
          background: rgba(249,115,22,0.12);
          color: #f97316;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
          padding: 5px 12px;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
        }
        .forge-founder-social { display: flex; gap: 10px; margin-top: 14px; }
        .forge-social-link {
          font-size: 12px;
          color: var(--fg-500);
          text-decoration: none !important;
          font-family: 'JetBrains Mono', monospace;
          border: 1px solid var(--fg-700);
          padding: 6px 14px;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .forge-social-link:hover { color: #f97316 !important; border-color: #f97316; }

        /* STATIONS */
        .forge-stations { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 48px; }
        .forge-station {
          background: var(--fg-900);
          border: 1px solid var(--fg-800);
          border-radius: 10px;
          padding: 40px 36px;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(20px);
          position: relative;
          overflow: hidden;
        }
        .forge-station.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .forge-station-bar {
          width: 3px;
          height: 0;
          background: #f97316;
          position: absolute;
          top: 0; left: 0;
          transition: height 0.4s ease;
        }
        .forge-station:hover .forge-station-bar { height: 100%; }
        .forge-station:hover { background: #151c27; border-color: var(--fg-700); }
        .forge-station-icon-box {
          width: 48px;
          height: 48px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .forge-station-icon-line {
          width: 20px;
          height: 3px;
          background: #f97316;
          border-radius: 2px;
          box-shadow: 0 0 8px #f97316;
        }
        .forge-station-tag {
          display: inline-block;
          background: rgba(249,115,22,0.15);
          color: #f97316;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 12px;
          font-family: 'JetBrains Mono', monospace;
        }
        .forge-station h3 { font-size: 22px; font-weight: 700; color: var(--fg-50); margin: 0 0 12px; }
        .forge-station p { color: var(--fg-500); font-size: 15px; line-height: 1.7; margin: 0; }

        /* PRINCIPLES */
        .forge-principles { display: grid; gap: 0; }
        .forge-principle {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid var(--fg-800);
        }
        .forge-principle:last-child { border-bottom: none; }
        .forge-principle-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #f97316;
          font-weight: 700;
          flex-shrink: 0;
          width: 28px;
          margin-top: 2px;
        }
        .forge-principle-title { font-size: 18px; font-weight: 700; color: var(--fg-50); margin: 0 0 6px; }
        .forge-principle-desc { color: var(--fg-500); font-size: 14px; line-height: 1.6; margin: 0; }

        /* TIMELINE / PIPELINE BLOCKS */
        .forge-timeline {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          position: relative;
          margin-top: 56px;
        }
        .forge-timeline::before {
          content: '';
          position: absolute;
          top: 44px;
          left: 8%;
          right: 8%;
          height: 1px;
          background: linear-gradient(90deg, var(--fg-800), #f97316, var(--fg-800));
          z-index: 0;
        }
        .forge-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 130px;
          text-align: center;
          position: relative;
          z-index: 1;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          padding: 16px 10px;
          font-family: inherit;
          color: inherit;
        }
        .forge-step-clickable {
          cursor: pointer;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }
        .forge-step-clickable:hover,
        .forge-step-clickable:focus-visible {
          border-color: #f97316;
          background: rgba(249,115,22,0.05);
          box-shadow: 0 0 16px rgba(249,115,22,0.35), 0 0 32px rgba(249,115,22,0.15);
          transform: translateY(-3px);
          outline: none;
        }
        .forge-step-dot {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--fg-950);
          border: 1px solid var(--fg-700);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--fg-500);
          transition: all 0.3s;
        }
        .forge-step-clickable:hover .forge-step-dot {
          border-color: #f97316;
          color: #f97316;
          box-shadow: 0 0 20px rgba(249,115,22,0.3);
        }
        .forge-step-label { font-size: 13px; font-weight: 600; color: var(--fg-400); }
        .forge-step-desc { font-size: 11px; color: var(--fg-600); line-height: 1.5; max-width: 110px; }
        .forge-step-hint {
          font-size: 10px;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.5px;
          color: #f97316;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .forge-step-clickable:hover .forge-step-hint { opacity: 1; }

        /* PIPELINE MODAL */
        .forge-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
          animation: forgeModalFadeIn 0.2s ease;
        }
        @keyframes forgeModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .forge-modal-content {
          position: relative;
          background: var(--fg-900);
          border-radius: 14px;
          max-width: 720px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid rgba(249,115,22,0.4);
          box-shadow: 0 0 50px rgba(249,115,22,0.25);
          animation: forgeModalSlideUp 0.25s ease;
        }
        @keyframes forgeModalSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .forge-modal-close {
          position: absolute;
          top: 12px;
          right: 14px;
          background: rgba(0,0,0,0.4);
          border: 1px solid var(--fg-700);
          border-radius: 50%;
          width: 34px;
          height: 34px;
          font-size: 20px;
          line-height: 1;
          color: #fff;
          cursor: pointer;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .forge-modal-close:hover { border-color: #f97316; color: #f97316; }
        .forge-modal-image-wrap {
          width: 100%;
          background: var(--fg-950);
          border-radius: 14px 14px 0 0;
          overflow: hidden;
        }
        .forge-modal-image { width: 100%; display: block; object-fit: cover; }
        .forge-modal-body { padding: 28px 32px 36px; }
        .forge-modal-step {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 10px;
        }
        .forge-modal-title { font-size: 26px; font-weight: 800; color: var(--fg-50); margin: 0 0 14px; letter-spacing: -0.5px; }
        .forge-modal-desc { color: var(--fg-400); font-size: 15px; line-height: 1.7; margin: 0; }

        /* ARSENAL */
        .forge-arsenal {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .forge-tool {
          background: var(--fg-900);
          border: 1px solid var(--fg-800);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.2s;
        }
        .forge-tool:hover {
          border-color: #f97316;
          background: #151c27;
          transform: translateX(4px);
        }
        .forge-tool-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .forge-tool-name { font-weight: 600; color: var(--fg-50); font-size: 14px; margin: 0 0 3px; }
        .forge-tool-desc { font-size: 12px; color: var(--fg-500); margin: 0; }
        .forge-tool-tier {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        /* BEFORE AFTER */
        .forge-slider-wrap {
          position: relative;
          height: 340px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--fg-700);
          cursor: ew-resize;
          user-select: none;
        }
        .forge-before {
          position: absolute;
          inset: 0;
          background: #0d0d12;
          padding: 32px;
          font-family: 'JetBrains Mono', monospace;
          overflow: hidden;
        }
        .forge-side-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-family: 'JetBrains Mono', monospace;
        }
        .forge-raw-line { font-size: 13px; color: #374151; line-height: 1.8; }
        .forge-raw-line.hl { color: #6b7280; }
        .forge-after {
          position: absolute;
          inset: 0;
          background: #0d1117;
          padding: 32px;
          overflow: hidden;
          clip-path: inset(0 0 0 var(--clip));
        }
        .forge-doc-line { font-size: 12px; line-height: 1.7; font-family: 'JetBrains Mono', monospace; }
        .forge-divider { height: 1px; background: #1f2937; margin: 8px 0; }
        .forge-slider-handle {
          position: absolute;
          top: 0; bottom: 0;
          width: 2px;
          background: #f97316;
          box-shadow: 0 0 16px rgba(249,115,22,0.8);
          z-index: 10;
          transform: translateX(-50%);
        }
        .forge-slider-knob {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 32px; height: 32px;
          background: #f97316;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 13px;
          box-shadow: 0 0 16px rgba(249,115,22,0.6);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        .forge-slider-hint {
          text-align: center;
          margin-top: 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--fg-600);
          letter-spacing: 1px;
        }

        /* PRICING */
        .forge-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 56px; }
        .forge-anvil {
          background: var(--fg-950);
          border: 1px solid var(--fg-800);
          padding: 40px 32px;
          position: relative;
          transition: all 0.3s;
        }
        .forge-anvil:hover { border-color: var(--fg-700); background: #0f1420; }
        .forge-anvil-featured { border-color: #f97316; background: #0f0c08; }
        .forge-anvil-featured:hover { border-color: #f97316; }
        .forge-anvil-badge {
          position: absolute;
          top: -1px; left: 50%;
          transform: translateX(-50%);
          background: #f97316;
          color: white;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 16px;
          font-family: 'JetBrains Mono', monospace;
        }
        .forge-anvil-visual {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
          align-items: flex-end;
          height: 32px;
        }
        .forge-anvil-bar {
          width: 8px;
          background: var(--fg-800);
          border-radius: 2px;
          transition: background 0.3s;
        }
        .forge-anvil:hover .forge-anvil-bar,
        .forge-anvil-featured .forge-anvil-bar { background: #f97316; }
        .forge-anvil-name { font-size: 11px; font-weight: 700; color: var(--fg-500); letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px; font-family: 'JetBrains Mono', monospace; }
        .forge-anvil-price { font-size: 48px; font-weight: 800; color: var(--fg-50); letter-spacing: -2px; margin: 0 0 4px; line-height: 1; }
        .forge-anvil-price span { font-size: 14px; color: var(--fg-500); font-weight: 400; letter-spacing: 0; }
        .forge-anvil-price-soon { font-size: 30px; }
        .forge-anvil-sub { font-size: 13px; color: var(--fg-600); margin: 0 0 24px; }
        .forge-anvil ul { list-style: none; padding: 0; margin: 0 0 32px; border-top: 1px solid var(--fg-800); padding-top: 20px; }
        .forge-anvil li { font-size: 13px; color: var(--fg-400); padding: 7px 0; border-bottom: 1px solid var(--fg-900); display: flex; gap: 10px; align-items: flex-start; line-height: 1.4; }
        .forge-anvil-tick { color: #f97316; flex-shrink: 0; font-weight: 700; font-family: 'JetBrains Mono', monospace; font-size: 12px; margin-top: 1px; }
        .forge-anvil-btn {
          display: block;
          text-align: center;
          padding: 14px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none !important;
          transition: all 0.2s;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 1px;
        }
        .btn-outline { border: 1px solid var(--fg-700); color: var(--fg-400) !important; }
        .btn-outline:hover { border-color: #f97316; color: #f97316 !important; }
        .btn-fill { background: #f97316; color: white !important; }
        .btn-fill:hover { background: #ea6c0a; }

        /* FINAL CTA */
        .forge-final {
          background: linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%);
          padding: 100px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .forge-final-glow {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(249,115,22,0.15);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          pointer-events: none;
        }
        .forge-final h2 { font-size: clamp(32px, 5vw, 52px); font-weight: 900; color: #fff; letter-spacing: -2px; margin: 0 0 16px; position: relative; z-index: 1; }
        .forge-final p { color: rgba(255,255,255,0.75); font-size: 18px; margin: 0 0 40px; position: relative; z-index: 1; }
        .forge-final-btn {
          display: inline-block;
          background: #fff;
          color: #c2410c !important;
          padding: 18px 48px;
          border-radius: 6px;
          font-weight: 800;
          font-size: 16px;
          text-decoration: none !important;
          position: relative; z-index: 1;
          transition: all 0.2s;
        }
        .forge-final-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }

        @media (max-width: 768px) {
          .forge-stations { grid-template-columns: 1fr; }
          .forge-arsenal { grid-template-columns: 1fr; }
          .forge-pricing-grid { grid-template-columns: 1fr; }
          .forge-timeline { flex-direction: column; gap: 24px; }
          .forge-timeline::before { display: none; }
          .forge-founder { flex-direction: column; }
        }
      `}</style>

      <div className="forge-page">

        {/* HERO */}
        <section className="forge-hero">
          {sparks.map(s => (
            <div key={s.id} className="forge-spark" style={{
              left:`${s.left}%`, bottom:`${10+Math.random()*30}%`,
              width:s.size, height:s.size,
              animationDelay:`${s.delay}s`, animationDuration:`${s.duration}s`,
            }}/>
          ))}

          <img
            src="/img/7forge-logo.png"
            alt="7Forge Technical Writing"
            className="forge-hero-logo"
          />

          <span className="forge-eyebrow">API Documentation Operating System</span>

          <h1 className="forge-h1">
            Forging Technical Documentation<br/>
            <em>Developers Actually Use</em>
          </h1>

          <p className="forge-sub">
            We transform complex APIs, software systems, and engineering knowledge
            into clear documentation that accelerates adoption and eliminates support overhead.
          </p>

          <div className="forge-pipeline">
            {['API Specs','Source Code','SME Interviews'].map((item,i) => (
              <React.Fragment key={i}>
                <button
                  type="button"
                  className="pipe-input"
                  onClick={() => setActiveStage(pipelineStages[i])}
                >
                  {item}
                </button>
                <span className="pipe-arrow">&#8594;</span>
              </React.Fragment>
            ))}
            <button
              type="button"
              className="pipe-forge"
              onClick={() => setActiveStage(pipelineStages[3])}
            >
              <div className="pipe-forge-bar"/>
              <span className="pipe-forge-label">7Forge</span>
            </button>
            <span className="pipe-arrow" style={{color:'#f97316'}}>&#8594;</span>
            {['API Docs','Dev Portals','SDK Guides'].map((item,i) => (
              <React.Fragment key={i}>
                <button
                  type="button"
                  className="pipe-output"
                  onClick={() => setActiveStage(pipelineStages[4 + i])}
                >
                  {item}
                </button>
                {i < 2 && <span className="pipe-arrow" style={{color:'#f97316'}}>+</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="forge-ctas">
            <a className="forge-btn-primary" href="#services">Explore the System</a>
            <a className="forge-btn-ghost" href="#pricing">View Pricing</a>
          </div>
        </section>

        {/* VISION + FOUNDER */}
        <section className="forge-section forge-section-mid">
          <div className="forge-container">
            <span className="forge-label">// vision</span>
            <h2 className="forge-h2">Why 7Forge Exists</h2>
            <blockquote className="forge-vision-text">
              At 7Forge, we believe technical writing is one of the most powerful and underrated
              skills in the modern economy. We exist to change that by giving every writer,
              freelancer, agency, and company the systems, templates, and knowledge to document
              technology with confidence, clarity, and credibility.
            </blockquote>
            <div className="forge-founder">
              <div className="forge-avatar">SUR</div>
              <div>
                <p className="forge-founder-name">Sabeh Ur Rehman</p>
                <p className="forge-founder-role">// Founder, 7Forge Technical Writing</p>
                <p className="forge-founder-bio">
                  Technical writer, agency owner, and educator based in Texas.
                  Building the future of API documentation one system at a time.
                </p>
                <div className="forge-founder-creds">
                  <span className="forge-cred-badge">Certified Technical Writer — Technical Writer HQ</span>
                </div>
                <div className="forge-founder-social">
                  <a href="https://www.youtube.com/channel/UClGBfS-XWqxpOaMt1ffA73w" target="_blank" rel="noopener noreferrer" className="forge-social-link" aria-label="YouTube">YouTube</a>
                  <a href="https://www.instagram.com/7forgetechwriting?igsh=MWdibTI0MDJydDRjOQ==" target="_blank" rel="noopener noreferrer" className="forge-social-link" aria-label="Instagram">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORGE STATIONS */}
        <section className="forge-section forge-section-dark" id="services">
          <div className="forge-container">
            <span className="forge-label">// services</span>
            <h2 className="forge-h2">The Forge Stations</h2>
            <p className="forge-lead">Four specializations. One operating system.</p>
            <div className="forge-stations">
              {stations.map((s,i) => (
                <div
                  key={s.id}
                  className={`forge-station ${visibleStations.includes(s.id)?'visible':''}`}
                  data-station={s.id}
                  style={{transitionDelay:`${i*0.1}s`}}
                >
                  <div className="forge-station-bar"/>
                  <div className="forge-station-icon-box">
                    <div className="forge-station-icon-line"/>
                  </div>
                  {s.tag && <span className="forge-station-tag">{s.tag}</span>}
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="forge-section forge-section-mid">
          <div className="forge-container">
            <span className="forge-label">// before and after</span>
            <h2 className="forge-h2">This Is What the Forge Does</h2>
            <p className="forge-lead">Drag the slider to see raw API notes transformed into production-ready documentation.</p>
            <div
              ref={sliderRef}
              className="forge-slider-wrap"
              onMouseMove={handleSliderMove}
              onMouseDown={()=>setDragging(true)}
              onMouseUp={()=>setDragging(false)}
              onMouseLeave={()=>setDragging(false)}
              onTouchMove={handleSliderMove}
              onTouchStart={()=>setDragging(true)}
              onTouchEnd={()=>setDragging(false)}
            >
              <div className="forge-before">
                <div className="forge-side-label" style={{color:'#4b5563'}}>// raw — before 7Forge</div>
                {['POST /messages','- sends message','- need auth','- returns id maybe','- content required','- priority field (???)','- errors: 400, 401, 429','- rate limit = 100/min','// TODO: document properly'].map((l,i)=>(
                  <div key={i} className={`forge-raw-line${i===0?' hl':''}`}>{l}</div>
                ))}
              </div>
              <div className="forge-after" style={{'--clip':`${sliderPos}%`}}>
                <div className="forge-side-label" style={{color:'#f97316'}}>// forged — production ready</div>
                <div className="forge-doc-line" style={{color:'#f97316',fontWeight:'700'}}>POST /v1/messages</div>
                <div className="forge-doc-line" style={{color:'#9ca3af'}}>Send a message and return a tracking ID.</div>
                <div className="forge-divider"/>
                <div className="forge-doc-line" style={{color:'#6b7280'}}>Auth  Bearer token required</div>
                <div className="forge-doc-line" style={{color:'#6b7280'}}>Rate  100 requests per minute</div>
                <div className="forge-divider"/>
                <div className="forge-doc-line" style={{color:'#22c55e'}}>content   string   required   Max 1000 chars</div>
                <div className="forge-doc-line" style={{color:'#9ca3af'}}>priority  string   optional   high | normal | low</div>
                <div className="forge-divider"/>
                <div className="forge-doc-line" style={{color:'#f97316'}}>201  Message sent  returns id, status, created_at</div>
                <div className="forge-doc-line" style={{color:'#6b7280'}}>400  missing_content   Add content field</div>
                <div className="forge-doc-line" style={{color:'#6b7280'}}>401  unauthorized      Check your API key</div>
                <div className="forge-doc-line" style={{color:'#6b7280'}}>429  rate_exceeded     Retry-After: 30s</div>
              </div>
              <div className="forge-slider-handle" style={{left:`${sliderPos}%`}}>
                <div className="forge-slider-knob">&#8596;</div>
              </div>
            </div>
            <p className="forge-slider-hint">drag to compare</p>
          </div>
        </section>

        {/* SEVEN PRINCIPLES */}
        <section className="forge-section forge-section-dark">
          <div className="forge-container">
            <span className="forge-label">// principles</span>
            <h2 className="forge-h2">The Seven Principles of Great API Documentation</h2>
            <p className="forge-lead">Every template, workflow, and deliverable in 7Forge is built on these foundations.</p>
            <div className="forge-principles">
              {principles.map(p => (
                <div key={p.n} className="forge-principle">
                  <span className="forge-principle-num">{p.n}</span>
                  <div>
                    <p className="forge-principle-title">{p.title}</p>
                    <p className="forge-principle-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE / PIPELINE STAGES */}
        <section className="forge-section forge-section-mid">
          <div className="forge-container">
            <span className="forge-label">// process</span>
            <h2 className="forge-h2">How Every Project Is Forged</h2>
            <p className="forge-lead">Click any stage to see it in detail.</p>
            <div className="forge-timeline">
              {pipelineStages.map(stage=>(
                <button
                  key={stage.n}
                  type="button"
                  className="forge-step forge-step-clickable"
                  onClick={() => setActiveStage(stage)}
                >
                  <div className="forge-step-dot">{stage.n}</div>
                  <span className="forge-step-label">{stage.title}</span>
                  <span className="forge-step-hint">View details &rarr;</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARSENAL */}
        <section className="forge-section forge-section-dark">
          <div className="forge-container">
            <span className="forge-label">// templates</span>
            <h2 className="forge-h2">The Documentation Arsenal</h2>
            <p className="forge-lead">Every template forged for API documentation. Plug in your API. Ship professional docs.</p>
            <div className="forge-arsenal">
              {arsenal.map((tool,i)=>(
                <div key={i} className="forge-tool">
                  <div className="forge-tool-dot" style={{background:tierColors[tool.tier],boxShadow:`0 0 8px ${tierColors[tool.tier]}`}}/>
                  <div>
                    <p className="forge-tool-name">{tool.name}</p>
                    <p className="forge-tool-desc">{tool.desc}</p>
                  </div>
                  <span className="forge-tool-tier" style={{background:`${tierColors[tool.tier]}18`,color:tierColors[tool.tier]}}>
                    {tool.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="forge-section forge-section-mid" id="pricing">
          <div className="forge-container">
            <span className="forge-label">// pricing</span>
            <h2 className="forge-h2">Choose Your Forge</h2>
            <p className="forge-lead">Three tiers. One system. Every deliverable built to the standard set by Stripe, Twilio, and GitHub.</p>
            <div className="forge-pricing-grid">

              <div className="forge-anvil">
                <div className="forge-anvil-visual">
                  <div className="forge-anvil-bar" style={{height:'40%'}}/>
                  <div className="forge-anvil-bar" style={{height:'60%'}}/>
                  <div className="forge-anvil-bar" style={{height:'80%'}}/>
                </div>
                <p className="forge-anvil-name">Forge Starter</p>
                <p className="forge-anvil-price forge-anvil-price-soon">Coming Soon</p>
                <p className="forge-anvil-sub">For beginners and learners</p>
                <ul>
                  {['API reference template','Getting started guide','Authentication guide','Error code reference','GitBook setup guide','Basic workflow documentation'].map((item,i)=>(
                    <li key={i}><span className="forge-anvil-tick">&#x2192;</span>{item}</li>
                  ))}
                </ul>
                <a className="forge-anvil-btn btn-outline" href="https://gumroad.com" target="_blank" rel="noopener noreferrer">Get Starter</a>
              </div>

              <div className="forge-anvil forge-anvil-featured">
                <div className="forge-anvil-badge">Most Popular</div>
                <div className="forge-anvil-visual">
                  <div className="forge-anvil-bar" style={{height:'50%'}}/>
                  <div className="forge-anvil-bar" style={{height:'75%'}}/>
                  <div className="forge-anvil-bar" style={{height:'100%'}}/>
                  <div className="forge-anvil-bar" style={{height:'75%'}}/>
                  <div className="forge-anvil-bar" style={{height:'50%'}}/>
                </div>
                <p className="forge-anvil-name">Forge Pro</p>
                <p className="forge-anvil-price forge-anvil-price-soon">Coming Soon</p>
                <p className="forge-anvil-sub">For freelancers and SaaS teams</p>
                <ul>
                  {['Everything in Starter','Full workflow system','GitHub and OpenAPI examples','Docs-as-code structure','Industry workflow simulations','NotiFlow GitHub repo structure','Postman collection included','Review systems and SOPs'].map((item,i)=>(
                    <li key={i}><span className="forge-anvil-tick">&#x2192;</span>{item}</li>
                  ))}
                </ul>
                <a className="forge-anvil-btn btn-fill" href="https://gumroad.com" target="_blank" rel="noopener noreferrer">Get Pro</a>
              </div>

              <div className="forge-anvil">
                <div className="forge-anvil-visual">
                  <div className="forge-anvil-bar" style={{height:'60%'}}/>
                  <div className="forge-anvil-bar" style={{height:'80%'}}/>
                  <div className="forge-anvil-bar" style={{height:'100%'}}/>
                  <div className="forge-anvil-bar" style={{height:'100%'}}/>
                  <div className="forge-anvil-bar" style={{height:'80%'}}/>
                  <div className="forge-anvil-bar" style={{height:'60%'}}/>
                </div>
                <p className="forge-anvil-name">Forge Enterprise</p>
                <p className="forge-anvil-price forge-anvil-price-soon">Coming Soon</p>
                <p className="forge-anvil-sub">For agencies and companies</p>
                <ul>
                  {['Everything in Pro','Full operational system','Client onboarding templates','QA systems and checklists','AI workflow documentation','Team structure systems','Complete NotiFlow system','Style guide and governance'].map((item,i)=>(
                    <li key={i}><span className="forge-anvil-tick">&#x2192;</span>{item}</li>
                  ))}
                </ul>
                <a className="forge-anvil-btn btn-outline" href="https://gumroad.com" target="_blank" rel="noopener noreferrer">Get Enterprise</a>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="forge-final">
          <div className="forge-final-glow"/>
          <div className="forge-container">
            <h2>Ready to Enter the Forge?</h2>
            <p>Join the writers, freelancers, and agencies building documentation that developers actually use.</p>
            <a className="forge-final-btn" href="#pricing">Start Forging Today</a>
          </div>
        </section>

      </div>

      {/* PIPELINE STAGE MODAL */}
      {activeStage && (
        <div
          className="forge-modal-overlay"
          onClick={() => setActiveStage(null)}
          role="presentation"
        >
          <div
            className="forge-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pipeline-modal-title"
          >
            <button
              className="forge-modal-close"
              onClick={() => setActiveStage(null)}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>

            <div className="forge-modal-image-wrap">
              <img
                src={activeStage.image}
                alt={activeStage.title}
                className="forge-modal-image"
              />
            </div>

            <div className="forge-modal-body">
              <span className="forge-modal-step">Step {activeStage.n}</span>
              <h3 id="pipeline-modal-title" className="forge-modal-title">
                {activeStage.title}
              </h3>
              <p className="forge-modal-desc">{activeStage.desc}</p>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
}
