import test from 'node:test';
import assert from 'node:assert/strict';
import { KeyboardController } from '../src/core/interaction/KeyboardController.js';
import { UniverseScene } from '../src/core/3d/UniverseScene.js';

test('Interaction and Accessibility Controllers', async (t) => {
  await t.test('KeyboardController defines canonical chapters in order', () => {
    const mockApp = { lenis: null, scene: null, audioSynth: null };
    const kc = new KeyboardController(mockApp);
    assert.deepEqual(kc.chapters, ['hero', 'about', 'skill', 'experience', 'education', 'contact']);
    assert.equal(kc.isExploded, false);
  });

  await t.test('UniverseScene.isWebGLAvailable detection method is functional', () => {
    // In Node.js environment without window.WebGLRenderingContext, it should safely return false without throwing
    const available = UniverseScene.isWebGLAvailable();
    assert.equal(typeof available, 'boolean');
  });

  await t.test('KeyboardController toggleExplode triggers core explode', () => {
    let explosionFactor = -1;
    let sfxPlayed = false;
    const mockApp = {
      lenis: null,
      scene: {
        core: {
          setExplosionFactor: (val) => { explosionFactor = val; }
        }
      },
      audioSynth: {
        playSweep: () => { sfxPlayed = true; }
      }
    };
    const kc = new KeyboardController(mockApp);
    kc.toggleExplode();
    assert.equal(kc.isExploded, true);
    assert.equal(explosionFactor, 0.75);
    assert.equal(sfxPlayed, true);

    kc.toggleExplode();
    assert.equal(kc.isExploded, false);
    assert.equal(explosionFactor, 0);
  });
});
