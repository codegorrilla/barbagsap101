import gsap from 'gsap';

const leaveFromProject = (container) => {
    const headerLink = container.querySelectorAll('header a'),
          projects = container.querySelectorAll('.image'),
          images = container.querySelectorAll('img'),
          content = container.querySelector('.content'),
          tl = gsap.timeline({
              defaults: {
                  duration: 0.4, ease: 'power1.in'
              }
          });
    
    tl
        .to(headerLink, {yPercent: 101}, 0)
        .to(projects, {xPercent: 100, stagger: 0.05}, 0)
        .to(content, {autoAlpha: 0, ease: 'none'}, 0)
        .to(images, {xPercent: -100, stagger: 0.05}, 0);
    
    return tl;
}

export default leaveFromProject;