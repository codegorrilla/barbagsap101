console.log('Hello Barba');

import barba from '@barba/core';
//import barbaPrefetch from '@barba/prefetch';
import barbaRouter from '@barba/router';
import gsap from 'gsap';
import {revealProject, leaveToProject, leaveFromProject, animationEnter, animationLeave} from './animations';

const myRoutes = [
    {name: 'home', path: '/index.html'},
    {name: 'architecture', path: '/architecture.html'},
    {name: 'detail', path: '/detail-page.html'},
    {name: 'detail-2', path: '/detail-page-2.html'}
]

//barba.use(barbaPrefetch);
barba.use(barbaRouter, {
    routes: myRoutes
});

const resetActiveLink = ()=> gsap.set('a.is-active span', {
    xPercent: -100,
    transformOrigin: 'left'
});

//global hooks
barba.hooks.enter((data) => {
   window.scrollTo(0,0);
   console.log(data);
});

barba.hooks.after(() => {
   console.log('after'); 
});

//init Barba
barba.init({
    views: [//views for any particular page
        {
            namespace: 'architecture',
            beforeEnter(){
                console.log('before enter architecture');
            }
        }
    ],
    transitions: [
        {
            name: 'detail',
            to: {
                namespace: ['detail']
            },
            once({next}){
                revealProject(next.container);
            },
            leave: ({current}) => leaveToProject(current.container),
            enter({next}){
                revealProject(next.container);
            }
        },{
            name: 'general-transition',
            once({next}){
                resetActiveLink();
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: ()=> animationEnter(next.container)
                });
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                animationEnter(next.container);
            }
        },{
            name: 'from-detail',
            from: {
                namespace: ['detail']
                //route: ['detail-2']
            },
            leave: ({current}) => leaveFromProject(current.container),
            enter({next}){
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(next.container)
                })
            }
        }
    ]
});


import './style.scss';



