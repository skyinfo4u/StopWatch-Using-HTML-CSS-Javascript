let displaytime=document.getElementById('dd');
        let hours=0;
        let minutes=0;
        let seconds=0;
        let milliseconds=0;
        let int=null;

        document.querySelector('#start-btn').addEventListener('click',()=>{
            if(int!=null)
            {

                clearInterval(int);
            }
            int=setInterval(displaydd,10);
        });
        document.querySelector('#pause-btn').addEventListener('click',()=>{
            // setInterval(displaydd,100);
            clearInterval(int);
        });
        document.querySelector('#reset-btn').addEventListener('click',()=>{
            // setInterval(displaydd,100);
            seconds=0;
            minutes=0;
            hours=0;
            milliseconds=0;
            clearInterval(int);
            // displaytime.innerHTML= minutes+":"+seconds;
            displaytime.innerHTML= "00:00:00:000";

        });
        function displaydd()
        {
            
            milliseconds+=10;
            if(milliseconds==1000)
            {
                seconds++;
                milliseconds=0;
                if(seconds==60)
                {
                    minutes++;
                    seconds=0;
                    if(minutes==60)
                    {
                        hours++;
                        minutes=0;
                    }
                }
            }
            let h=hours<10?"0"+hours:hours;
            let m=minutes<10?"0"+minutes:minutes;
            let s=seconds<10?"0"+seconds:seconds;
            let ms=milliseconds<10?"00"+milliseconds:milliseconds<100?"0"+milliseconds:milliseconds;
            
            displaytime.innerHTML= h+":"+m+":"+s+":"+ms;
        }
        