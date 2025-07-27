import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
    // Lodash is now properly imported as a module
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());