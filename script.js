// Callback Hell

// Problem : Display countdown from 10 to 1 & then print Happy Independence Day

let time=10;

setTimeout(() => {
    document.querySelector(".selectme").innerText=time;
    time--;
    setTimeout(() => {
        document.querySelector(".selectme").innerText=time;
        time--;
        setTimeout(() => {
            document.querySelector(".selectme").innerText=time;
            time--;
            setTimeout(() => {
                document.querySelector(".selectme").innerText=time;
                time--;
                setTimeout(() => {
                    document.querySelector(".selectme").innerText=time;
                    time--;
                    setTimeout(() => {
                        document.querySelector(".selectme").innerText=time;
                        time--;
                        setTimeout(() => {
                            document.querySelector(".selectme").innerText=time;
                            time--;
                            setTimeout(() => {
                                document.querySelector(".selectme").innerText=time;
                                time--;
                                setTimeout(() => {
                                    document.querySelector(".selectme").innerText=time;
                                    time--;
                                    setTimeout(() => {
                                        document.querySelector(".selectme").innerText=time;
                                        time--;
                                        setTimeout(() => {
                                            document.querySelector(".aaa").innerText="";
                                            document.querySelector(".selectme").innerText="Happy Independence Day!!!!";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);