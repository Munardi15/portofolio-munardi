import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioConfig } from '../src/config/portfolio.config.js';

test('Portfolio Configuration Schema & Data Integrity', async (t) => {
  await t.test('has all required top-level sections', () => {
    assert.ok(portfolioConfig.personal, 'Missing personal section');
    assert.ok(portfolioConfig.navigation, 'Missing navigation section');
    assert.ok(portfolioConfig.about, 'Missing about section');
    assert.ok(portfolioConfig.stats, 'Missing stats section');
    assert.ok(portfolioConfig.skills, 'Missing skills section');
    assert.ok(portfolioConfig.experiences, 'Missing experiences section');
    assert.ok(portfolioConfig.education, 'Missing education section');
    assert.ok(portfolioConfig.marquee, 'Missing marquee section');
  });

  await t.test('personal information is complete and valid', () => {
    const { personal } = portfolioConfig;
    assert.strictEqual(personal.name, 'Munardi');
    assert.strictEqual(personal.rolePrimary, 'Software Engineer');
    assert.ok(personal.contact.email.includes('@'), 'Invalid email format');
    assert.ok(personal.contact.whatsapp.startsWith('+62'), 'Invalid Indonesian phone code');
    assert.ok(personal.cvDownloads.length >= 3, 'Must have at least 3 CV variants');
  });

  await t.test('experiences contain all 5 verified companies and 18+ projects', () => {
    const { experiences } = portfolioConfig;
    assert.strictEqual(experiences.length, 5, 'Must contain exactly 5 verified institutional companies');

    const totalProjects = experiences.reduce((sum, exp) => sum + exp.projects.length, 0);
    assert.ok(totalProjects >= 18, `Expected at least 18 projects, got ${totalProjects}`);

    // Verify company 1 (BRI)
    const bri = experiences.find((e) => e.company.includes('BRI') || e.id === 'job-01');
    assert.ok(bri, 'Bank Rakyat Indonesia must be present in experiences');
    assert.ok(bri.projects.length >= 13, 'BRI must have at least 13 detailed project cases');

    // Verify company 2 (Hitachi)
    const hitachi = experiences.find((e) => e.company.includes('Hitachi') || e.id === 'job-02');
    assert.ok(hitachi, 'Hitachi must be present in experiences');
    assert.strictEqual(hitachi.projects.length, 3, 'Hitachi must have 3 detailed project cases');

    // Verify company 3 (OCBC)
    const ocbc = experiences.find((e) => e.company.includes('OCBC') || e.id === 'job-03');
    assert.ok(ocbc, 'OCBC must be present in experiences');
    assert.strictEqual(ocbc.projects.length, 2, 'OCBC must have 2 detailed project cases');
    assert.ok(
      ocbc.projects.some((p) => p.codeName.includes('AS400')),
      'OCBC must contain AS400 core banking verification project'
    );
  });

  await t.test('every project has complete bilingual fields and tags', () => {
    portfolioConfig.experiences.forEach((exp) => {
      exp.projects.forEach((proj) => {
        assert.ok(proj.codeName, `Project in ${exp.company} is missing codeName`);
        assert.ok(proj.tags.length > 0, `Project ${proj.codeName} has no tech tags`);
        assert.ok(proj.problem.en && proj.problem.id, `Project ${proj.codeName} missing bilingual problem statement`);
        assert.ok(proj.role.en && proj.role.id, `Project ${proj.codeName} missing bilingual role description`);
      });
    });
  });

  await t.test('skills contain all 5 architectural categories', () => {
    assert.strictEqual(portfolioConfig.skills.length, 5, 'Must have exactly 5 categorized skill groups');
    portfolioConfig.skills.forEach((group) => {
      assert.ok(group.title.en && group.title.id, 'Skill group missing title');
      assert.ok(group.tags.length >= 4, `Skill group ${group.title.en} should have at least 4 tags`);
    });
  });

  await t.test('education lists degree with GPA 3.71 Cum Laude and Bootcamp', () => {
    const mercu = portfolioConfig.education.find((e) => e.school.includes('Mercu Buana'));
    assert.ok(mercu, 'Universitas Mercu Buana must be present');
    assert.ok(mercu.details.some((d) => d.includes('3.71')), 'GPA 3.71 must be present');
    assert.ok(mercu.details.some((d) => d.includes('Cum Laude')), 'Cum Laude honor must be present');

    const bootcamp = portfolioConfig.education.find((e) => e.school.includes('Code Academy'));
    assert.ok(bootcamp, 'Code Academy bootcamp must be present in education');
  });
});
