'use strict';
const   blockCreateElem = document.querySelector('.blockCreateElem');
const   inp = document.querySelector('#inp');
const   button = document.querySelector('button');

function DomElement(){
    this.block = document.createElement('div');
    this.x = 10;
    this.y = 10;
}
    DomElement.prototype.screenWidth = () => Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    DomElement.prototype.screenHeight = () => Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    DomElement.prototype.createElem = function () {
        const body = document.querySelector('body');
        this.block.style.cssText = 
        `
        height: 100px;
        width: 100px;
        background: url(arrows.png);
        background-size: 100% 100%;
        position: absolute;
        `;
        body.append(this.block);
    };
    DomElement.prototype.leftAndUp = function (button) {
        if (button === 'left') {
            if(this.x > 10) {
                this.x += -10;
                this.block.style.left = `${this.x}px`;
            }
        } else if (button === 'top') {
            if(this.y > 10) {
                this.y += -10;
                this.block.style.top = `${this.y}px`;
            }
        }
    };
    DomElement.prototype.rightAndDown = function (button) {
        if (button === 'right'){
            if((this.screenWidth() - 110) > this.x) {
                this.x += 10;
                this.block.style.left = `${this.x}px`;
            }
        } else if (button === 'down') {
            if((this.screenHeight() - 110) > this.y) {
                this.y += 10;  
                this.block.style.top = `${this.y}px`; 
            }
        }
    };

    DomElement.prototype.moveBlock = function (event) {    
        if (event.key === "ArrowRight") {

            this.rightAndDown('right');

        } else if (event.key === "ArrowLeft") {

            this.leftAndUp('left');

        } else if (event.key === "ArrowUp") {

            this.leftAndUp('top');

        } else if (event.key === "ArrowDown"){

            this.rightAndDown('down');
        }
    };
const domElement = new DomElement();

document.addEventListener('DOMContentLoaded', domElement.createElem());
document.addEventListener('keydown', domElement.moveBlock.bind(domElement));
