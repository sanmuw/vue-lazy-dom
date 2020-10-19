/**
 * 防抖节流
 * @param {*} action 回调
 * @param {*} delay 等待的时间
 * @param {*} context this指针
 * @returns {Function}
 */
export const throttle = function(func, context, delay) {     
  let timer = null;     
  let startTime = Date.now();     
  return function() {             
      let curTime = Date.now();             
      let remaining = delay - (curTime - startTime);             
      context = context || this;             
      let args = arguments;             
      clearTimeout(timer);              
      if (remaining <= 0) {                    
          func.apply(context, args);                    
          startTime = Date.now();              
      } else {                    
          timer = setTimeout(func, remaining);              
      }      
  }
}
