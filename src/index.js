import _ from 'lodash';
import './style.css';
import image from './image/index1.jpeg'
import {MyPrint} from './print.js'
import {square } from './math.js'

function component(){
    var element = document.createElement('div');
    // element.innerHTML = _.join(['hello','world', '!'], ' ');
    element.innerHTML = square(2);
    // var MyImage = new Image();
    // MyImage.src = image;
    // element.appendChild(MyImage);
    var button = document.createElement('button');
    button.innerHTML = 'please click me';
    button.onclick = MyPrint;
    element.appendChild(button);
    return element;
}

document.body.appendChild(component());