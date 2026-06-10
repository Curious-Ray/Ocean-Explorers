export class AnimationManager {
    constructor() {
        this.activeAnimations = new Map();
    }

    fadeOut(element, duration = 300) {
        return new Promise(resolve => {
            element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            setTimeout(() => resolve(), duration);
        });
    }

    fadeIn(element, duration = 400) {
        return new Promise(resolve => {
            element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            setTimeout(() => resolve(), duration);
        });
    }

    async transitionCreature(container, renderFn) {
        await this.fadeOut(container, 200);
        renderFn();
        requestAnimationFrame(() => {
            this.fadeIn(container, 300);
        });
    }

    animateValue(el, start, end, duration = 1000, suffix = '') {
        const startTime = performance.now();
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * eased);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        requestAnimationFrame(update);
    }

    animateProgressBar(el, targetPercent, duration = 1200) {
        const startTime = performance.now();
        const startWidth = parseFloat(el.style.width) || 0;
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = startWidth + (targetPercent - startWidth) * eased;
            el.style.width = `${current}%`;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        requestAnimationFrame(update);
    }

    staggerReveal(container, selector, delay = 80) {
        const items = container.querySelectorAll(selector);
        items.forEach((item, i) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, i * delay);
        });
    }

    scanPulse(element) {
        element.classList.add('scan-pulse');
        setTimeout(() => element.classList.remove('scan-pulse'), 1500);
    }
}
