const debounce = (func, delay) => {
    let timeOutId;
    return (...args) => {
        //If theres a previous timeout, we clear it
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};