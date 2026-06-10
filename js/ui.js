import { AnimationManager } from './animations.js';

export class UIManager {
    constructor() {
        this.anim = new AnimationManager();
        this.sidebar = document.getElementById('sidebar');
        this.creatureHeader = document.getElementById('creature-header');
        this.creatureDescription = document.getElementById('creature-description');
        this.creatureTags = document.getElementById('creature-tags');
        this.creatureImage = document.getElementById('creature-image');
        this.speciesOverview = document.getElementById('species-overview');
        this.missionsPanel = document.getElementById('missions-panel');
        this.paginationDots = document.getElementById('pagination-dots');
        this.expeditionLog = document.getElementById('expedition-log');
        this.anatomyCallouts = document.getElementById('anatomy-callouts');
        this.scanCircle = document.getElementById('scan-circle');
        this.creatureAnatomy = document.getElementById('creature-anatomy');
        this.selectedBadge = null;
    }

    renderSidebar(creatures, activeId, onSelect) {
        this.sidebar.innerHTML = '';
        creatures.forEach(c => {
            const isActive = c.id === activeId;
            const card = document.createElement('div');
            card.className = `creature-card ${isActive ? 'active' : ''}`;
            card.dataset.id = c.id;

            const badgeHtml = isActive ? '<span class="selected-badge">SELECTED</span>' : '';

            card.innerHTML = `
                <div class="card-img">
                    <img src="assets/${c.image}" alt="${c.name}" loading="lazy">
                    <div class="card-scan-ring"></div>
                </div>
                <div class="card-info">
                    <h3>${c.name}</h3>
                    <p>${c.subtitle}</p>
                    ${badgeHtml}
                </div>
            `;
            card.addEventListener('click', () => {
                console.log('Sidebar card clicked:', c.id);
                onSelect(c.id);
            });
            this.sidebar.appendChild(card);
        });
    }

    async updateDisplay(creature, creatures) {
        await this.anim.transitionCreature(this.creatureHeader, () => {
            this.creatureHeader.innerHTML = `
                <h2>${creature.name}</h2>
                <p>${creature.subtitle}</p>
            `;
        });

        await this.anim.transitionCreature(this.creatureDescription, () => {
            const creditHtml = creature.credit
                ? `<div class="model-credit">3D model: <a href="${creature.credit.url}" target="_blank" rel="noopener">"${creature.credit.title}"</a> by ${creature.credit.author} · ${creature.credit.license}</div>`
                : '';
            this.creatureDescription.innerHTML = `
                <p>${creature.description}</p>
                <div class="sector-badge">
                    <span>${creature.sector || 'Ocean Sector Unknown'}</span>
                </div>
                ${creditHtml}
            `;
        });

        this.creatureTags.innerHTML = '';
        this.creatureTags.style.opacity = '0';
        this.creatureTags.innerHTML = creature.tags.map(t => `
            <div class="tag">
                <span class="tag-icon">${t.icon || ''}</span>
                <span class="tag-label">${t.label}</span>
                <span class="tag-value">${t.value}</span>
            </div>
        `).join('');
        requestAnimationFrame(() => {
            this.anim.fadeIn(this.creatureTags, 300);
            this.anim.staggerReveal(this.creatureTags, '.tag', 100);
        });

        this.renderSpeciesOverview(creature);
        this.renderMissions(creature);
        this.updateExpeditionLog(creature);
        this.renderAnatomy(creature);

        this.creatureImage.innerHTML = `
            <div class="scan-circle" id="scan-circle"></div>
        `;

        setTimeout(() => {
            const scanCircle = document.getElementById('scan-circle');
            if (scanCircle) {
                scanCircle.classList.add('scanning');
            }
        }, 100);
    }

    renderSpeciesOverview(creature) {
        this.speciesOverview.innerHTML = `
            <h3 class="orbitron section-title">SPECIES OVERVIEW</h3>
            ${Object.entries(creature.stats).map(([key, value]) => {
                const statPercent = this.getStatPercent(key, value);
                return `
                    <div class="stat-row">
                        <div class="stat-label">
                            <span>${key.toUpperCase()}</span>
                            <span class="stat-value">${value}</span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: 0%" data-target="${statPercent}"></div>
                        </div>
                    </div>
                `;
            }).join('')}
        `;

        requestAnimationFrame(() => {
            const fills = this.speciesOverview.querySelectorAll('.stat-fill');
            fills.forEach((fill, i) => {
                setTimeout(() => {
                    this.anim.animateProgressBar(fill, parseFloat(fill.dataset.target), 800);
                }, i * 100);
            });
        });
    }

    getStatPercent(key, value) {
        const map = {
            size: 60, habitat: 75, diet: 65, lifespan: 70, speed: 55, status: 80,
            intelligence: 85
        };
        return map[key] || 50 + Math.random() * 30;
    }

    renderMissions(creature) {
        this.missionsPanel.innerHTML = `
            <h3 class="orbitron section-title">HIGHLIGHTS & MISSIONS</h3>
            ${creature.missions.map(m => `
                <div class="mission-item">
                    <div class="mission-icon">${m.icon}</div>
                    <div class="mission-content">
                        <h4 class="mission-title">${m.title}</h4>
                        <p class="mission-desc">${m.desc}</p>
                    </div>
                    <svg class="mission-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            `).join('')}
        `;
    }

    updateExpeditionLog(creature) {
        const log = creature.expeditionLog || { current: 0, total: 42 };
        const percent = (log.current / log.total) * 100;
        this.expeditionLog.innerHTML = `
            <div class="log-label">
                <span class="orbitron">EXPEDITION LOG</span>
                <span class="log-count">${log.current} / ${log.total}</span>
            </div>
            <div class="log-bar">
                <div class="log-fill" style="width: 0%"></div>
            </div>
        `;
        requestAnimationFrame(() => {
            const fill = this.expeditionLog.querySelector('.log-fill');
            if (fill) this.anim.animateProgressBar(fill, percent, 1200);
        });
    }

    renderAnatomy(creature) {
        if (!this.creatureAnatomy) return;
        this.creatureAnatomy.innerHTML = '';
        if (!creature.anatomy) return;

        creature.anatomy.forEach(point => {
            const marker = document.createElement('div');
            marker.className = 'anatomy-marker';
            marker.style.left = `${point.x}%`;
            marker.style.top = `${point.y}%`;
            marker.innerHTML = `
                <div class="anatomy-dot"></div>
                <div class="anatomy-tooltip">
                    <strong>${point.label}</strong>
                    <span>${point.desc}</span>
                </div>
            `;
            this.creatureAnatomy.appendChild(marker);
        });
    }

    renderPagination(creatures, activeId, onSelect) {
        this.paginationDots.innerHTML = '';
        creatures.forEach(c => {
            const dot = document.createElement('div');
            dot.className = `dot ${c.id === activeId ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                console.log('Pagination dot clicked:', c.id);
                onSelect(c.id);
            });
            this.paginationDots.appendChild(dot);
        });
    }

    showAnatomyCallout(label, desc, x, y) {
        const existing = document.querySelector('.anatomy-callout-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.className = 'anatomy-callout-popup';
        popup.style.left = `${x}%`;
        popup.style.top = `${y}%`;
        popup.innerHTML = `
            <strong>${label}</strong>
            <p>${desc}</p>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 3000);
    }

    hideLoader() {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none'; // Ensure it doesn't block clicks
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }

}
