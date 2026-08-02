const result = document.getElementById("result");
setInterval(() => {

    const currentdate = Date.now(); // milliseconds
    const olympicdate = new Date(2028, 6, 14).getTime();
    let timer = olympicdate - currentdate;
    const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    timer %= 1000 * 60 * 60 * 24;
    const hours = Math.floor(timer / (1000 * 60 * 60));
    timer %= 1000 * 60 * 60;
    const minutes = Math.floor(timer / (1000 * 60));
    timer %= 1000 * 60;
    const seconds = Math.floor(timer / 1000);
    result.textContent = `${days}:days ${hours}:hours ${minutes}:minutes ${seconds}:seconds`;
}, 1000);