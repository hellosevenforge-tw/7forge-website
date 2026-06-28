import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const [sparks, setSparks] = useState([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    setSparks(Array.from({length:16},(_,i)=>({
      id:i, left:Math.random()*100,
      delay:Math.random()*3, dur:1.5+Math.random()*2, size:2+Math.random()*4
    })));
  },[]);

  useEffect(()=>{
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) setVisible(v=>({...v,[e.target.dataset.id]:true}));
      });
    },{threshold:0.15});
    document.querySelectorAll('[data-id]').forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);

  const handleMove = e=>{
    if(!dragging||!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const cx = e.touches?e.touches[0].clientX:e.clientX;
    setSliderPos(Math.max(5,Math.min(95,((cx-rect.left)/rect.width)*100)));
  };

  const who = [
    {title:'Beginners', desc:'Just discovered technical writing and want to learn the right way from day one.'},
    {title:'Freelancers', desc:'Landing clients and delivering professional API documentation projects.'},
    {title:'Agencies', desc:'Managing multiple clients with a scalable, repeatable documentation system.'},
    {title:'Startups', desc:'Building your first API docs without a full documentation team.'},
    {title:'Companies', desc:'Establishing documentation standards across teams and products.'},
    {title:'Learners', desc:'Exploring technical writing as a career with a structured starting point.'},
  ];

  const stations = [
    {id:'s1',title:'API Documentation',desc:'Complete reference docs, getting started guides, code examples in multiple languages, and OpenAPI specifications built to the standard set by Stripe and Twilio.',tag:'Most Requested'},
    {id:'s2',title:'Developer Portals',desc:'End-to-end documentation systems with navigation, search, versioning, and deployment. Built on Docusaurus and deployed to GitHub Pages or Netlify — free forever.',tag:null},
    {id:'s3',title:'SOP & Process Documentation',desc:'Standard operating procedures for documentation workflows. Research SOPs, review checklists, delivery pipelines, and quality assurance frameworks.',tag:null},
    {id:'s4',title:'Knowledge Bases',desc:'Structured content systems for technical knowledge — organized, searchable, and maintainable by teams without a dedicated writer.',tag:null},
  ];

  const principles = [
    {n:'01',title:'Clarity',desc:'Every sentence earns its place. Developers find what they need without reading twice.'},
    {n:'02',title:'Accuracy',desc:'Every code example runs. Every endpoint path exists. No guessing.'},
    {n:'03',title:'Consistency',desc:'Same terminology, same structure, same voice across every page.'},
    {n:'04',title:'Maintainability',desc:'Docs live in version control. Updates ship with the code that changes them.'},
    {n:'05',title:'Discoverability',desc:'Organized around what developers want to accomplish, not how the API was built.'},
    {n:'06',title:'Scalability',desc:'Systems that work for one endpoint work for one hundred.'},
    {n:'07',title:'Developer Experience',desc:'First API call in under five minutes. That is the benchmark.'},
  ];

  const arsenal = [
    {name:'API Reference Template',desc:'Endpoint docs, parameter tables, code examples',tier:'Pro'},
    {name:'Getting Started Guide',desc:'First API call in 5 minutes',tier:'Starter'},
    {name:'OpenAPI YAML Template',desc:'Machine-readable spec, human-readable docs',tier:'Pro'},
    {name:'SOP Template Pack',desc:'Research, review, publish, maintain',tier:'Enterprise'},
    {name:'Error Code Reference',desc:'Every status, every fix, every resolution',tier:'Starter'},
    {name:'Authentication Guide',desc:'Bearer tokens, OAuth, API keys',tier:'Pro'},
    {name:'Webhook Documentation',desc:'Events, delivery, signatures, retries',tier:'Pro'},
    {name:'Changelog Template',desc:'Versioned releases, breaking changes',tier:'Starter'},
    {name:'Migration Guide',desc:'v1 to v2, clean and complete',tier:'Enterprise'},
    {name:'Style Guide Template',desc:'Terminology, voice, formatting rules',tier:'Enterprise'},
  ];

  const tc = {Starter:'#22c55e',Pro:'#f97316',Enterprise:'#7c3aed'};

  return (
    <Layout title="7Forge Technical Writing" description="Forging Technical Documentation That Developers Actually Use">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');
        .fp{font-family:'Inter',sans-serif;background:#111827;color:#f9fafb;}
        .fp *{box-sizing:border-box;}

        /* HERO */
        .hero{min-height:100vh;background:#0d0d12;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px;position:relative;overflow:hidden;}
        .hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;}
        .hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:180px;background:linear-gradient(transparent,#111827);pointer-events:none;}
        .spark{position:absolute;border-radius:50%;background:#f97316;pointer-events:none;animation:sparkUp linear infinite;opacity:0;}
        @keyframes sparkUp{0%{transform:translateY(0) scale(1);opacity:.7;}100%{transform:translateY(-120px) scale(0);opacity:0;}}
        .hero-logo{width:100px;height:auto;margin:0 auto 28px;position:relative;z-index:1;filter:drop-shadow(0 0 16px rgba(249,115,22,0.25));}
        .eyebrow{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#f97316;margin-bottom:20px;position:relative;z-index:1;}
        .eyebrow::before{content:'// ';opacity:.5;}
        .h1{font-size:clamp(32px,5.5vw,68px);font-weight:900;line-height:1.08;color:#f9fafb;margin:0 0 24px;letter-spacing:-2px;position:relative;z-index:1;max-width:860px;}
        .h1 em{font-style:normal;color:#f97316;}
        .sub{font-size:17px;color:#9ca3af;max-width:540px;line-height:1.7;margin:0 auto 40px;position:relative;z-index:1;}
        .pipeline{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:6px;margin:0 auto 40px;max-width:940px;position:relative;z-index:1;}
        .pi{background:#1f2937;border:1px solid #374151;border-radius:7px;padding:8px 12px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#9ca3af;}
        .pa{color:#374151;font-size:14px;}
        .pf{background:#7c2d12;border:2px solid #f97316;border-radius:10px;padding:14px 22px;text-align:center;animation:fp 2s ease-in-out infinite;}
        @keyframes fp{0%,100%{box-shadow:0 0 30px rgba(249,115,22,.35);}50%{box-shadow:0 0 60px rgba(249,115,22,.65);}}
        .pf-bar{width:24px;height:3px;background:#f97316;margin:0 auto 5px;border-radius:2px;}
        .pf-lbl{font-family:'JetBrains Mono',monospace;font-size:9px;color:#fed7aa;letter-spacing:3px;text-transform:uppercase;font-weight:700;}
        .po{background:#111827;border:1px solid #f97316;border-radius:7px;padding:8px 12px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#fed7aa;}
        .ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;}
        .bp{background:#f97316;color:#fff!important;padding:14px 32px;border-radius:6px;font-weight:700;font-size:14px;text-decoration:none!important;transition:all .2s;}
        .bp:hover{background:#ea6c0a;transform:translateY(-1px);}
        .bg{border:1.5px solid #374151;color:#9ca3af!important;padding:14px 32px;border-radius:6px;font-weight:600;font-size:14px;text-decoration:none!important;transition:all .2s;}
        .bg:hover{border-color:#f97316;color:#f97316!important;}

        /* SECTIONS */
        .sec{padding:88px 24px;}
        .dark{background:#0d0d12;}
        .mid{background:#111827;}
        .con{max-width:1100px;margin:0 auto;}
        .lbl{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#f97316;display:block;margin-bottom:14px;}
        .h2{font-size:clamp(26px,3.5vw,46px);font-weight:800;color:#f9fafb;letter-spacing:-1px;margin:0 0 14px;line-height:1.1;}
        .lead{font-size:16px;color:#6b7280;line-height:1.7;margin:0 0 48px;max-width:520px;}

        /* VISION */
        .vq{font-size:19px;color:#d1d5db;line-height:1.8;border-left:3px solid #f97316;padding-left:22px;margin:0 0 36px;max-width:680px;}
        .fc{display:flex;gap:20px;align-items:flex-start;background:#1f2937;border:1px solid #374151;border-left:3px solid #f97316;border-radius:10px;padding:24px;max-width:520px;}
        .fav{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#f97316,#c2410c);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:11px;color:white;font-family:'JetBrains Mono',monospace;flex-shrink:0;}
        .fn{font-weight:700;color:#f9fafb;font-size:15px;margin:0 0 3px;}
        .fr{color:#f97316;font-size:9px;letter-spacing:1px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;margin:0 0 8px;}
        .fb{color:#6b7280;font-size:13px;line-height:1.6;margin:0;}

        /* WHO */
        .who-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        .who-card{background:#1f2937;border:1px solid #1f2937;border-radius:10px;padding:22px;transition:all .2s;}
        .who-card:hover{border-color:#374151;background:#222b3a;}
        .who-num{font-family:'JetBrains Mono',monospace;font-size:9px;color:#f97316;font-weight:700;margin-bottom:8px;letter-spacing:1px;}
        .who-title{font-size:15px;font-weight:700;color:#f9fafb;margin:0 0 6px;}
        .who-desc{font-size:12px;color:#6b7280;line-height:1.6;margin:0;}

        /* STATIONS */
        .stations{display:grid;grid-template-columns:1fr 1fr;gap:2px;}
        .stn{background:#111827;border:1px solid #1f2937;padding:44px 36px;position:relative;overflow:hidden;transition:background .2s,border-color .2s;}
        .stn:hover{background:#131d2a;border-color:#374151;}
        .stn-bar{position:absolute;top:0;left:0;width:3px;height:0;background:#f97316;transition:height .35s;}
        .stn:hover .stn-bar{height:100%;}
        .stn-icon{width:42px;height:42px;background:rgba(249,115,22,.08);border:1px solid rgba(249,115,22,.18);border-radius:9px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
        .stn-line{width:16px;height:3px;background:#f97316;border-radius:2px;}
        .stn-tag{display:inline-block;background:rgba(249,115,22,.13);color:#f97316;font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:2px 9px;border-radius:20px;margin-bottom:10px;font-family:'JetBrains Mono',monospace;}
        .stn h3{font-size:20px;font-weight:700;color:#f9fafb;margin:0 0 10px;}
        .stn p{color:#6b7280;font-size:14px;line-height:1.7;margin:0;}
        .stn-anim{opacity:0;transform:translateY(16px);transition:opacity .45s ease,transform .45s ease;}
        .stn-anim.vis{opacity:1;transform:translateY(0);}

        /* WORKFLOW IMAGE */
        .img-sec{padding:88px 24px;text-align:center;}
        .full-img{width:100%;max-width:1000px;border-radius:12px;display:block;margin:0 auto;}
        .img-cap{font-size:13px;color:#6b7280;margin-top:16px;max-width:560px;margin-left:auto;margin-right:auto;}

        /* BEFORE AFTER */
        .sw{position:relative;height:320px;border-radius:12px;overflow:hidden;border:1px solid #374151;cursor:ew-resize;user-select:none;}
        .sb{position:absolute;inset:0;background:#0d0d12;padding:28px;font-family:'JetBrains Mono',monospace;overflow:hidden;}
        .sa{position:absolute;inset:0;background:#0a0f18;padding:28px;overflow:hidden;clip-path:inset(0 0 0 var(--clip));}
        .slbl{font-size:9px;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:block;font-family:'JetBrains Mono',monospace;}
        .rl{font-size:11px;color:#374151;line-height:1.9;}
        .rl.hi{color:#6b7280;}
        .dl{font-size:11px;line-height:1.8;font-family:'JetBrains Mono',monospace;}
        .sdiv{height:1px;background:#1f2937;margin:6px 0;}
        .shdl{position:absolute;top:0;bottom:0;width:2px;background:#f97316;box-shadow:0 0 14px rgba(249,115,22,.8);transform:translateX(-50%);z-index:10;}
        .sknb{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:30px;height:30px;background:#f97316;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:700;}
        .shint{text-align:center;margin-top:14px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#4b5563;letter-spacing:1px;}

        /* PRINCIPLES */
        .prin{display:flex;gap:20px;align-items:flex-start;padding:24px 0;border-bottom:1px solid #1f2937;}
        .prin:last-child{border-bottom:none;}
        .pn{font-family:'JetBrains Mono',monospace;font-size:11px;color:#f97316;font-weight:700;flex-shrink:0;width:24px;margin-top:2px;}
        .pt{font-size:16px;font-weight:700;color:#f9fafb;margin:0 0 5px;}
        .pd{font-size:13px;color:#6b7280;line-height:1.6;margin:0;}

        /* TIMELINE */
        .tl{display:flex;justify-content:space-between;margin-top:48px;position:relative;}
        .tl::before{content:'';position:absolute;top:20px;left:8%;right:8%;height:1px;background:linear-gradient(90deg,#1f2937,#f97316,#1f2937);}
        .ts{display:flex;flex-direction:column;align-items:center;gap:12px;flex:1;text-align:center;position:relative;z-index:1;}
        .td{width:40px;height:40px;border-radius:50%;background:#0d0d12;border:1px solid #374151;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b7280;transition:all .2s;}
        .td:hover{border-color:#f97316;color:#f97316;box-shadow:0 0 14px rgba(249,115,22,.3);}
        .tl2{font-size:11px;font-weight:600;color:#9ca3af;}
        .td2{font-size:10px;color:#4b5563;line-height:1.4;max-width:72px;}

        /* ARSENAL */
        .ar{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        .at{display:flex;align-items:center;gap:12px;background:#0d0d12;border:1px solid #1f2937;border-radius:7px;padding:16px;transition:all .2s;}
        .at:hover{border-color:#f97316;background:#0f1420;transform:translateX(3px);}
        .adot{width:7px;height:7px;border-radius:50%;flex-shrink:0;}
        .an{font-weight:600;color:#f9fafb;font-size:13px;margin:0 0 2px;}
        .ades{font-size:11px;color:#6b7280;margin:0;}
        .atier{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:2px 7px;border-radius:3px;flex-shrink:0;}

        /* PRICING */
        .pg{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-top:48px;}
        .av{background:#0d0d12;border:1px solid #1f2937;padding:36px 28px;position:relative;transition:all .2s;}
        .av:hover{border-color:#374151;background:#0f1420;}
        .avf{border-color:#f97316;background:#0f0c08;}
        .avf:hover{border-color:#f97316;}
        .avbg{position:absolute;top:-1px;left:50%;transform:translateX(-50%);background:#f97316;color:white;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:3px 14px;font-family:'JetBrains Mono',monospace;}
        .avv{display:flex;gap:3px;margin-bottom:18px;align-items:flex-end;height:22px;}
        .avb{width:6px;background:#1f2937;border-radius:2px;transition:background .2s;}
        .av:hover .avb,.avf .avb{background:#f97316;}
        .avn{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:#6b7280;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px;}
        .avp{font-size:42px;font-weight:800;color:#f9fafb;letter-spacing:-2px;line-height:1;margin:0 0 4px;}
        .avp span{font-size:12px;color:#6b7280;font-weight:400;letter-spacing:0;}
        .avs{font-size:11px;color:#4b5563;margin:0 0 18px;}
        .av ul{list-style:none;padding:0;margin:0 0 24px;border-top:1px solid #1f2937;padding-top:16px;}
        .av li{font-size:11px;color:#9ca3af;padding:6px 0;border-bottom:1px solid #111827;display:flex;gap:8px;align-items:flex-start;line-height:1.4;}
        .tick{color:#f97316;font-family:'JetBrains Mono',monospace;font-size:10px;flex-shrink:0;margin-top:1px;}
        .abt{display:block;text-align:center;padding:12px;border-radius:5px;font-weight:700;font-size:11px;font-family:'JetBrains Mono',monospace;letter-spacing:1px;text-decoration:none!important;text-transform:uppercase;transition:all .2s;}
        .abo{border:1px solid #374151;color:#9ca3af!important;}
        .abo:hover{border-color:#f97316;color:#f97316!important;}
        .abf{background:#f97316;color:white!important;}
        .abf:hover{background:#ea6c0a;}

        /* FINAL */
        .fc2{background:linear-gradient(135deg,#7c2d12,#c2410c);padding:88px 24px;text-align:center;position:relative;overflow:hidden;}
        .fc2-glow{position:absolute;width:350px;height:350px;border-radius:50%;background:rgba(249,115,22,.12);top:50%;left:50%;transform:translate(-50%,-50%);filter:blur(60px);pointer-events:none;}
        .fc2 h2{font-size:clamp(28px,4vw,48px);font-weight:900;color:#fff;letter-spacing:-1.5px;margin:0 0 12px;position:relative;z-index:1;}
        .fc2 p{color:rgba(255,255,255,.75);font-size:16px;margin:0 0 32px;position:relative;z-index:1;}
        .fb2{display:inline-block;background:#fff;color:#c2410c!important;padding:16px 44px;border-radius:6px;font-weight:800;font-size:14px;text-decoration:none!important;position:relative;z-index:1;transition:all .2s;}
        .fb2:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3);}

        @media(max-width:768px){
          .who-grid{grid-template-columns:1fr 1fr;}
          .stations{grid-template-columns:1fr;}
          .ar{grid-template-columns:1fr;}
          .pg{grid-template-columns:1fr;}
          .tl{flex-direction:column;gap:20px;}
          .tl::before{display:none;}
          .fc{flex-direction:column;}
        }
      `}</style>

      <div className="fp">

        {/* HERO */}
        <section className="hero">
          {sparks.map(s=>(
            <div key={s.id} className="spark" style={{left:`${s.left}%`,bottom:`${10+Math.random()*25}%`,width:s.size,height:s.size,animationDelay:`${s.delay}s`,animationDuration:`${s.dur}s`}}/>
          ))}
          <img src="/img/7forge-logo.png" alt="7Forge Technical Writing" className="hero-logo"/>
          <span className="eyebrow">API Documentation Operating System</span>
          <h1 className="h1">Forging Technical Documentation<br/><em>Developers Actually Use</em></h1>
          <p className="sub">We transform complex APIs, software systems, and engineering knowledge into clear documentation that accelerates adoption and eliminates support overhead.</p>
          <div className="pipeline">
            {['API Specs','Source Code','SME Interviews'].map((x,i)=>(
              <React.Fragment key={i}><div className="pi">{x}</div><span className="pa">&#8594;</span></React.Fragment>
            ))}
            <div className="pf"><div className="pf-bar"/><div className="pf-lbl">7Forge</div></div>
            <span className="pa" style={{color:'#f97316'}}>&#8594;</span>
            {['API Docs','Dev Portals','SDK Guides'].map((x,i)=>(
              <React.Fragment key={i}><div className="po">{x}</div>{i<2&&<span className="pa" style={{color:'#f97316'}}>+</span>}</React.Fragment>
            ))}
          </div>
          <div className="ctas">
            <Link className="bp" to="/docs/introduction">Explore the System</Link>
            <a className="bg" href="#pricing">View Pricing</a>
          </div>
        </section>

        {/* VISION + FOUNDER */}
        <section className="sec mid">
          <div className="con">
            <span className="lbl">// vision</span>
            <h2 className="h2">Why 7Forge Exists</h2>
            <blockquote className="vq">
              At 7Forge, we believe technical writing is one of the most powerful and underrated skills in the modern economy. We exist to change that by giving every writer, freelancer, agency, and company the systems, templates, and knowledge to document technology with confidence, clarity, and credibility.
            </blockquote>
            <div className="fc">
              <div className="fav">SUR</div>
              <div>
                <p className="fn">Sabeh Ur Rehman</p>
                <p className="fr">// Founder, 7Forge Technical Writing</p>
                <p className="fb">Technical writer, agency owner, and educator based in Texas. Building the future of API documentation one system at a time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="sec dark">
          <div className="con">
            <span className="lbl">// who it is for</span>
            <h2 className="h2">Built for Everyone in Technical Writing</h2>
            <p className="lead">Whether you are just starting out or running an agency — 7Forge gives you the system you need.</p>
            <div className="who-grid">
              {who.map((w,i)=>(
                <div key={i} className="who-card">
                  <div className="who-num">0{i+1}</div>
                  <div className="who-title">{w.title}</div>
                  <div className="who-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORGE STATIONS */}
        <section className="sec mid" style={{padding:'88px 0'}}>
          <div className="con" style={{padding:'0 24px',marginBottom:'40px'}}>
            <span className="lbl">// services</span>
            <h2 className="h2">The Forge Stations</h2>
            <p className="lead" style={{marginBottom:0}}>Four specializations. One operating system.</p>
          </div>
          <div className="stations">
            {stations.map((s,i)=>(
              <div key={s.id} className={`stn stn-anim${visible[s.id]?' vis':''}`} data-id={s.id} style={{transitionDelay:`${i*.1}s`}}>
                <div className="stn-bar"/>
                <div className="stn-icon"><div className="stn-line"/></div>
                {s.tag&&<span className="stn-tag">{s.tag}</span>}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW IMAGE */}
        <section className="img-sec dark">
          <div className="con">
            <span className="lbl">// core workflow</span>
            <h2 className="h2">How Professional API Documentation Works</h2>
            <p className="lead" style={{margin:'0 auto 36px',textAlign:'center',maxWidth:'540px'}}>Every section of 7Forge maps to a stage in this workflow. You always know where you are, what you are doing, and where the work goes next.</p>
            <img src="/img/workflow-diagram.png" alt="API Documentation Workflow from Developer to Client" className="full-img"/>
            <p className="img-cap">Developer to API Spec to Technical Writer to Review to GitHub to Publishing to Client</p>
          </div>
        </section>

        {/* INDUSTRY IMAGE */}
        <section className="img-sec mid">
          <div className="con">
            <span className="lbl">// industries</span>
            <h2 className="h2">Documentation Moves at a Different Speed in Every Industry</h2>
            <img src="/img/industry-speed.png" alt="Documentation speed by industry: SaaS, Fintech, Healthcare, Enterprise" className="full-img"/>
          </div>
        </section>

        {/* BEFORE AFTER */}
        <section className="sec dark">
          <div className="con">
            <span className="lbl">// before and after</span>
            <h2 className="h2">This Is What the Forge Does</h2>
            <p className="lead">Drag the slider to see raw API notes transformed into production-ready documentation.</p>
            <div ref={sliderRef} className="sw" onMouseMove={handleMove} onMouseDown={()=>setDragging(true)} onMouseUp={()=>setDragging(false)} onMouseLeave={()=>setDragging(false)} onTouchMove={handleMove} onTouchStart={()=>setDragging(true)} onTouchEnd={()=>setDragging(false)}>
              <div className="sb">
                <span className="slbl" style={{color:'#4b5563'}}>// raw — before 7Forge</span>
                {['POST /messages','- sends message','- need auth','- returns id maybe','- content required','- priority field (???)','- errors: 400, 401, 429','- rate limit = 100/min','// TODO: document properly'].map((l,i)=>(
                  <div key={i} className={`rl${i===0?' hi':''}`}>{l}</div>
                ))}
              </div>
              <div className="sa" style={{'--clip':`${sliderPos}%`}}>
                <span className="slbl" style={{color:'#f97316'}}>// forged — production ready</span>
                <div className="dl" style={{color:'#f97316',fontWeight:700}}>POST /v1/messages</div>
                <div className="dl" style={{color:'#9ca3af'}}>Send a message and return a tracking ID.</div>
                <div className="sdiv"/>
                <div className="dl" style={{color:'#6b7280'}}>Auth &nbsp; Bearer token required</div>
                <div className="dl" style={{color:'#6b7280'}}>Rate &nbsp; 100 requests per minute</div>
                <div className="sdiv"/>
                <div className="dl" style={{color:'#22c55e'}}>content &nbsp; string &nbsp; required &nbsp; Max 1000 chars</div>
                <div className="dl" style={{color:'#9ca3af'}}>priority &nbsp; string &nbsp; optional &nbsp; high | normal | low</div>
                <div className="sdiv"/>
                <div className="dl" style={{color:'#f97316'}}>201 &nbsp; Message sent &nbsp; returns id, status, created_at</div>
                <div className="dl" style={{color:'#6b7280'}}>400 &nbsp; missing_content &nbsp; Add content field</div>
                <div className="dl" style={{color:'#6b7280'}}>401 &nbsp; unauthorized &nbsp;&nbsp;&nbsp;&nbsp; Check your API key</div>
                <div className="dl" style={{color:'#6b7280'}}>429 &nbsp; rate_exceeded &nbsp;&nbsp;&nbsp; Retry-After: 30s</div>
              </div>
              <div className="shdl" style={{left:`${sliderPos}%`}}><div className="sknb">&#8596;</div></div>
            </div>
            <p className="shint">drag to compare</p>
          </div>
        </section>

        {/* SEVEN PRINCIPLES */}
        <section className="sec mid">
          <div className="con">
            <span className="lbl">// principles</span>
            <h2 className="h2">The Seven Principles of Great API Documentation</h2>
            <p className="lead">Every template, workflow, and deliverable in 7Forge is built on these foundations.</p>
            <div>
              {principles.map(p=>(
                <div key={p.n} className="prin">
                  <span className="pn">{p.n}</span>
                  <div><p className="pt">{p.title}</p><p className="pd">{p.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="sec dark">
          <div className="con">
            <span className="lbl">// process</span>
            <h2 className="h2">How Every Project Is Forged</h2>
            <div className="tl">
              {[{n:'01',l:'Discovery',d:'Goals, audience, API access'},{n:'02',l:'Blueprint',d:'Scope, architecture, plan'},{n:'03',l:'Forge',d:'Research, write, test'},{n:'04',l:'Refine',d:'Review, revisions'},{n:'05',l:'QA',d:'Accuracy, style, links'},{n:'06',l:'Delivery',d:'Live docs, handoff'}].map(s=>(
                <div key={s.n} className="ts"><div className="td">{s.n}</div><span className="tl2">{s.l}</span><span className="td2">{s.d}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ARSENAL */}
        <section className="sec mid">
          <div className="con">
            <span className="lbl">// templates</span>
            <h2 className="h2">The Documentation Arsenal</h2>
            <p className="lead">Every template forged for API documentation. Plug in your API. Ship professional docs.</p>
            <div className="ar">
              {arsenal.map((t,i)=>(
                <div key={i} className="at">
                  <div className="adot" style={{background:tc[t.tier],boxShadow:`0 0 7px ${tc[t.tier]}`}}/>
                  <div><p className="an">{t.name}</p><p className="ades">{t.desc}</p></div>
                  <span className="atier" style={{background:`${tc[t.tier]}18`,color:tc[t.tier]}}>{t.tier}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="sec dark" id="pricing">
          <div className="con">
            <span className="lbl">// pricing</span>
            <h2 className="h2">Choose Your Forge</h2>
            <p className="lead">Three tiers. One system. Every deliverable built to the standard set by Stripe, Twilio, and GitHub.</p>
            <div className="pg">
              <div className="av">
                <div className="avv">{[40,60,80].map((h,i)=><div key={i} className="avb" style={{height:`${h}%`}}/>)}</div>
                <p className="avn">Forge Starter</p>
                <p className="avp">$29<span> /one time</span></p>
                <p className="avs">For beginners and learners</p>
                <ul>{['API reference template','Getting started guide','Authentication guide','Error code reference','GitBook setup guide','Basic workflow documentation'].map((x,i)=><li key={i}><span className="tick">&#x2192;</span>{x}</li>)}</ul>
                <a className="abt abo" href="https://gumroad.com">Get Starter</a>
              </div>
              <div className="av avf">
                <div className="avbg">Most Popular</div>
                <div className="avv">{[50,75,100,75,50].map((h,i)=><div key={i} className="avb" style={{height:`${h}%`}}/>)}</div>
                <p className="avn">Forge Pro</p>
                <p className="avp">$99<span> /one time</span></p>
                <p className="avs">For freelancers and SaaS teams</p>
                <ul>{['Everything in Starter','Full workflow system','GitHub and OpenAPI examples','Docs-as-code structure','Industry workflow simulations','NotiFlow GitHub repo structure','Postman collection included','Review systems and SOPs'].map((x,i)=><li key={i}><span className="tick">&#x2192;</span>{x}</li>)}</ul>
                <a className="abt abf" href="https://gumroad.com">Get Pro</a>
              </div>
              <div className="av">
                <div className="avv">{[60,80,100,100,80,60].map((h,i)=><div key={i} className="avb" style={{height:`${h}%`}}/>)}</div>
                <p className="avn">Forge Enterprise</p>
                <p className="avp">$249<span> /one time</span></p>
                <p className="avs">For agencies and companies</p>
                <ul>{['Everything in Pro','Full operational system','Client onboarding templates','QA systems and checklists','AI workflow documentation','Team structure systems','Complete NotiFlow system','Style guide and governance'].map((x,i)=><li key={i}><span className="tick">&#x2192;</span>{x}</li>)}</ul>
                <a className="abt abo" href="https://gumroad.com">Get Enterprise</a>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="fc2">
          <div className="fc2-glow"/>
          <div className="con" style={{textAlign:'center'}}>
            <h2>Ready to Enter the Forge?</h2>
            <p>Join the writers, freelancers, and agencies building documentation that developers actually use.</p>
            <a className="fb2" href="#pricing">Start Forging Today</a>
          </div>
        </section>

      </div>
    </Layout>
  );
}
