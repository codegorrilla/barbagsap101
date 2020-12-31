console.log('Hello Barba');

import barba from '@barba/core';
import barbaCss from '@barba/css';

//tell barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

//hiding default background trick
barba.hooks.before((data)=>{
   const background = data.current.container.dataset.background;
    
    body.style.setProperty('--page-background', background);
});

//init Barba
barba.init({
    transitions: [
        {
            name: 'home',
            sync: true,
            once(){
                //with css plugin ,this will not run
                console.log('once');
            },
            leave(){},
            enter(){}
        },{
            name: 'fade',
            to: {
                namespace: ['fade']
            },
            leave(){
                
            },
            enter(){
                
            }
        },{
            name: 'clip',
            sync: true,
            to: {
                namespace: ['clip']
            },
            leave(){
                
            },
            enter(){
                
            },
            beforeEnter(){
                console.log('clip page loaded');
            }
        },{
            name: 'with-cover',
            to: {
                namespace: ['with-cover']
            },
            leave(){
                
            },
            enter(){
                
            }
        }
    ]
});

//import './demo.css';
import './style.scss';

//import sum from './sum.js';

//import heroImg from './assets/images/vacation-one.jpg';

//var homeImg = document.getElementById('vacation');
//homeImg.src = heroImg;

