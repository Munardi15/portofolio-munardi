import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioConfig } from '../src/config/portfolio.config.js';

import { NavbarComponent } from '../src/components/NavbarComponent.js';
import { HeroComponent } from '../src/components/HeroComponent.js';
import { MarqueeComponent } from '../src/components/MarqueeComponent.js';
import { AboutComponent } from '../src/components/AboutComponent.js';
import { SkillsComponent } from '../src/components/SkillsComponent.js';
import { ExperienceComponent } from '../src/components/ExperienceComponent.js';
import { EducationComponent } from '../src/components/EducationComponent.js';
import { ContactComponent } from '../src/components/ContactComponent.js';
import { FooterComponent } from '../src/components/FooterComponent.js';

test('MVC Component Renderers Integrity', async (t) => {
  await t.test('NavbarComponent renders header and navigation links', () => {
    const html = NavbarComponent.render(portfolioConfig);
    assert.ok(html.includes('id="header"'));
    assert.ok(html.includes('id="mobileNav"'));
    assert.ok(html.includes('id="themeToggle"'));
    assert.ok(html.includes('id="langToggle"'));
    assert.ok(html.includes('href="#about"'));
    assert.ok(html.includes('href="#experience"'));
  });

  await t.test('HeroComponent renders canvas, name, and CTA buttons', () => {
    const html = HeroComponent.render(portfolioConfig);
    assert.ok(html.includes('id="heroCanvas3D"'), 'Hero must contain 3D WebGL canvas element');
    assert.ok(html.includes('Munardi'));
    assert.ok(html.includes('Download CV (PDF)'));
    assert.ok(html.includes('id="heroWaBtn"'));
  });

  await t.test('MarqueeComponent renders dual velocity tracks', () => {
    const html = MarqueeComponent.render(portfolioConfig);
    assert.ok(html.includes('id="marqueeTrack1"'));
    assert.ok(html.includes('id="marqueeTrack2"'));
    assert.ok(html.includes('GOLANG'));
  });

  await t.test('AboutComponent renders bento grid and stats', () => {
    const html = AboutComponent.render(portfolioConfig);
    assert.ok(html.includes('id="about"'));
    assert.ok(html.includes('about-bento-grid'));
    assert.ok(html.includes('05+'));
    assert.ok(html.includes('3.71'));
  });

  await t.test('SkillsComponent renders 5 skill cards', () => {
    const html = SkillsComponent.render(portfolioConfig);
    assert.ok(html.includes('id="skill"'));
    assert.ok(html.includes('skills-grid'));
    assert.ok(html.includes('Golang'));
    assert.ok(html.includes('Docker'));
  });

  await t.test('ExperienceComponent renders laser rail and 5 company blocks', () => {
    const html = ExperienceComponent.render(portfolioConfig);
    assert.ok(html.includes('id="experience"'));
    assert.ok(html.includes('id="timelineLaser"'), 'Laser beam element must exist');
    assert.ok(html.includes('id="toggleAllProjects"'), 'Toggle all button must exist');
    assert.ok(html.includes('id="job-01"'), 'Job 01 must exist');
    assert.ok(html.includes('id="job-05"'), 'Job 05 must exist');
    assert.ok(html.includes('sch-parse-file-merah-putih'), 'Specific project code name must be rendered');
  });

  await t.test('EducationComponent renders degrees and Mercu Buana', () => {
    const html = EducationComponent.render(portfolioConfig);
    assert.ok(html.includes('id="education"'));
    assert.ok(html.includes('Universitas Mercu Buana'));
    assert.ok(html.includes('GPA 3.71 • Cum Laude'));
  });

  await t.test('ContactComponent renders contact channels and CV deck', () => {
    const html = ContactComponent.render(portfolioConfig);
    assert.ok(html.includes('id="contact"'));
    assert.ok(html.includes('id="waChannel"'));
    assert.ok(html.includes('dira20590@gmail.com'));
    assert.ok(html.includes('MUNARDI-CV_SoftwareEngineer.pdf'));
  });

  await t.test('FooterComponent renders copyright and back to top button', () => {
    const html = FooterComponent.render(portfolioConfig);
    assert.ok(html.includes('id="backToTopBtn"'));
    assert.ok(html.includes('Munardi'));
  });
});
