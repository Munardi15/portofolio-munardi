import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioConfig } from '../src/config/portfolio.config.js';

test('Portfolio Config & Data Integrity', async (t) => {
  await t.test('has all canonical sections', () => {
    assert.ok(portfolioConfig.personal, 'Missing personal');
    assert.ok(portfolioConfig.about, 'Missing about');
    assert.ok(portfolioConfig.stats, 'Missing stats');
    assert.ok(portfolioConfig.skills, 'Missing skills');
    assert.ok(portfolioConfig.experiences, 'Missing experiences');
    assert.ok(portfolioConfig.education, 'Missing education');
  });

  await t.test('experiences contain all 7 career milestones from CV and 20+ projects', () => {
    const { experiences } = portfolioConfig;
    assert.strictEqual(experiences.length, 7, 'Must have exactly 7 milestones from CV');

    const totalProjects = experiences.reduce((sum, e) => sum + e.projects.length, 0);
    assert.ok(totalProjects >= 20, `Expected at least 20 projects, got ${totalProjects}`);

    // Verify BRI
    const bri = experiences.find((e) => e.id === 'job-01');
    assert.ok(bri, 'BRI must exist');
    assert.ok(bri.projects.length >= 13, 'BRI must have 13 projects');

    // Verify Hitachi
    const hitachi = experiences.find((e) => e.id === 'job-02');
    assert.ok(hitachi, 'Hitachi must exist');
    assert.strictEqual(hitachi.projects.length, 4, 'Hitachi must have 4 projects');

    // Verify OCBC
    const ocbc = experiences.find((e) => e.id === 'job-03');
    assert.ok(ocbc, 'OCBC must exist');
    assert.strictEqual(ocbc.projects.length, 2, 'OCBC must have 2 projects');
  });

  await t.test('education lists degree with GPA 3.71 Cum Laude', () => {
    const mercu = portfolioConfig.education.find((e) => e.school.includes('Mercu Buana'));
    assert.ok(mercu, 'Universitas Mercu Buana must be present');
    assert.ok(mercu.details.some((d) => d.includes('3.71')), 'GPA 3.71 must be present');
  });
});
