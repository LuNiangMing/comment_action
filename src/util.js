export

function debounce(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}
//创建一个标志位，如果还在
export function throttle(delay, fn) {
    let flag = true
    return function() {
        let args = arguments
        let timer = null
            //还在执行？
        if (!flag) {
            //关掉你！
            flag = false
            clearTimeout(timer)
        }
        //打开在执行！
        timer = setTimeout(() => {
            flag = true
            fn.call(this, args)
        }, delay);
    }
}