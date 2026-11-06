import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioConfig } from '../src/config/portfolio.config.js';
import { Navbar } from '../src/ui/Navbar.js';
import { UniverseHUD } from '../src/ui/UniverseHUD.js';
import { ChapterViews } from '../src/ui/ChapterViews.js';

test('UI Components Render Integrity', async (t) => {
  await t.test('Navbar renders header and actions', () => {
    const html = Navbar.render(portfolioConfig);
    assert.ok(html.includes('id="navbarHeader"'));
    assert.ok(html.includes('id="langToggleBtn"'));
    assert.ok(html.includes('id="btnToggle3DMode"'));
    assert.ok(html.includes('id="btnToggleAudio"'));
    assert.ok(html.includes('href="#about"'));
    assert.ok(html.includes('href="#experience"'));
  });

  await t.test('UniverseHUD renders progress line and waypoint rail', () => {
    const html = UniverseHUD.render(portfolioConfig);
    assert.ok(html.includes('id="scrollLaserBar"'));
    assert.ok(html.includes('id="hudWaypointRail"'));
  });

  await t.test('ChapterViews renders all 6 canonical chapters', () => {
    const html = ChapterViews.render(portfolioConfig);
    assert.ok(html.includes('id="hero"'), 'Hero section must exist');
    assert.ok(html.includes('id="about"'), 'About section must exist');
    assert.ok(html.includes('id="skill"'), 'Skill section must exist');
    assert.ok(html.includes('id="experience"'), 'Experience section must exist');
    assert.ok(html.includes('id="education"'), 'Education section must exist');
    assert.ok(html.includes('id="contact"'), 'Contact section must exist');

    // Milestones
    assert.ok(html.includes('id="job-01"'), 'Job 01 must exist');
    assert.ok(html.includes('id="job-07"'), 'Job 07 must exist');
    assert.ok(html.includes('sch-parse-file-merah-putih'), 'Specific project code name must be rendered');
    assert.ok(html.includes('IMHOTS & EJ Dashboard'), 'Hitachi IMHOTS project must be rendered');
  });
});
