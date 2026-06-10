import { creatures } from './data.js';
import { SceneManager } from './scene.js';
import { UIManager } from './ui.js';
import { AnimationManager } from './animations.js';

class App {
    constructor() {
        this.currentCreatureIndex = 0;
        this.sceneManager = new SceneManager('three-canvas');
        this.uiManager = new UIManager();
        this.animManager = new AnimationManager();

        this.init();
    }

    init() {
        this.sceneManager.onReady = () => {
            setTimeout(() => this.uiManager.hideLoader(), 500);
        };

        this.selectCreature(creatures[0].id);

        this.sceneManager.animate();

        this.uiManager.renderSidebar(creatures, creatures[0].id, (id) => this.selectCreature(id));
        this.uiManager.renderPagination(creatures, creatures[0].id, (id) => this.selectCreature(id));

        this.setupEventListeners();

        const headerCenter = document.getElementById('header-center');
        headerCenter.innerHTML = `
            <div class="scan-indicator">
                <span class="scan-indicator-label">SCAN ACTIVE</span>
                <div class="scan-dots">
                    ${[1,2,3,4,5].map(() => '<div class="scan-dot"></div>').join('')}
                </div>
            </div>
        `;

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.nextCreature();
            } else if (e.key === 'ArrowLeft') {
                this.prevCreature();
            }
        });
    }

    setupEventListeners() {
        document.getElementById('btn-explore').addEventListener('click', () => {
            const creature = creatures[this.currentCreatureIndex];
            console.log(`Exploring ${creature.name}...`);
            this.animManager.scanPulse(document.querySelector('.scan-circle'));
        });

        document.getElementById('logo').addEventListener('click', () => {
            this.selectCreature(creatures[0].id);
        });
    }

    selectCreature(creatureId) {
        const creature = creatures.find(c => c.id === creatureId);
        if (!creature) return;

        this.currentCreatureIndex = creatures.indexOf(creature);

        this.uiManager.renderSidebar(creatures, creatureId, (id) => this.selectCreature(id));
        this.uiManager.renderPagination(creatures, creatureId, (id) => this.selectCreature(id));
        this.uiManager.updateDisplay(creature, creatures);

        this.sceneManager.updateCreature(creature);

        // Preload the neighbouring creatures during idle time so navigation
        // (arrow keys / pagination) feels instant.
        const total = creatures.length;
        const nextCreature = creatures[(this.currentCreatureIndex + 1) % total];
        const prevCreature = creatures[(this.currentCreatureIndex - 1 + total) % total];
        this.sceneManager.preloadModel(nextCreature.modelPath);
        this.sceneManager.preloadModel(prevCreature.modelPath);

        document.querySelector('.sidebar')?.scrollTo({
            top: (this.currentCreatureIndex) * 76,
            behavior: 'smooth'
        });
    }

    nextCreature() {
        const next = (this.currentCreatureIndex + 1) % creatures.length;
        this.selectCreature(creatures[next].id);
    }

    prevCreature() {
        const prev = (this.currentCreatureIndex - 1 + creatures.length) % creatures.length;
        this.selectCreature(creatures[prev].id);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new App();
});
