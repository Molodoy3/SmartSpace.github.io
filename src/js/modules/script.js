export function delegationClick() {
    document.addEventListener('click', documentActions)
    function documentActions(e) {
        const targetElement = e.target;
        //Открывание бургера
        if (targetElement.closest('.menu__icon')) {
            targetElement.closest('.menu__icon').classList.toggle('active');
            document.querySelector('.menu__body').classList.toggle('open');
            document.body.classList.toggle('lock');
        }

        if (targetElement.closest('[data-tab-id]')) {
            const tabs = targetElement.closest('[data-tabs]');
            const titleTab = targetElement.closest('[data-tab-id]');
            const tabID = titleTab.dataset.tabId;
            const sectionTab = tabs.querySelector(`#${tabID}`);
            const activeTitle = tabs.querySelector('.active');
            activeTitle.classList.remove('active');
            const idActiveSectionTab = activeTitle.dataset.tabId;
            tabs.querySelector(`#${idActiveSectionTab}`).style.cssText = 'display: none';
            sectionTab.style.cssText = 'display: grid';
            titleTab.classList.add('active');
        }

        //Плавный скрол с закрыванием бурегера
        if (targetElement.closest('[data-goto]')) {
            if (targetElement.closest('.menu__link')) {
                document.querySelector('.menu__body').classList.remove('open');
                document.querySelector('.menu__icon').classList.remove('active');
                document.body.classList.remove('lock');
            }
            const link = targetElement.closest('[data-goto]');
            const goToBlock = document.querySelector(link.dataset.goto);
            if (goToBlock) {
                let goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY;
                const header = document.querySelector('.header');
                if (header) {
                    goToBlockValue -= header.offsetHeight;
                }
                window.scrollTo({
                    top: goToBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
}
//Анимация шакпи при скролле
export function headerScroll() {
    const header = document.querySelector('.header');
    if (header) {
        let countRed = 255;
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        }
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                let y = window.scrollY;
                if(y < 2000){
                    header.style.cssText = `background-color: rgb(${255 - y*0.05}, ${255 - y*0.03}, ${255 - y*0.01})`;
                }
                header.classList.add('scroll');
            } else {
                header.classList.remove('scroll');
                header.style.cssText = `background-color: none`;
            }
        });
    }
}


