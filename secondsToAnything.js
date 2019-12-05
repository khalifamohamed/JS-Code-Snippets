function formatDuration (seconds) {
    if(seconds == 0)
    {
        return 'now';
    }
    else if(seconds < 60){
        return remainingTimeSec(seconds);
    } else if(seconds >= 60 && seconds < 3600){
        return remainingTimeMin(seconds);
    } else if(seconds >= 3600 && seconds < 86400){
        return remainingTimeHour(seconds);
    } else if(seconds >= 86400 && seconds < 31536000 ) {return remainingTimeDay(seconds)}
    else {return remainingTimeYear(seconds);}
    
    
    // Helper Functions
    function remainingTimeSec(time){
        if(time == 1){return time + " second";}
        return time + " seconds";
    }    
    function remainingTimeMin(time){
        var minutes = Math.floor(time/60);
        var timeleft = time - (minutes*60);
        if(minutes == 0) {return remainingTimeSec(timeleft)}
        else if(timeleft == 0 && minutes == 1){return minutes + " minute";}
        else if(minutes == 1 && timeleft > 0){return minutes + " minute and " + remainingTimeSec(timeleft);}
        else if(minutes > 1 && timeleft == 0){return minutes + " minutes";}
        else if(timeleft % 60 == 0){return minutes + " minutes and " + remainingTimeSec(timeleft);}
        else return minutes + " minutes and " +  remainingTimeSec(timeleft);
    }
    function remainingTimeHour(time){
        var hours = Math.floor(time/3600);
        var timeleft = time - (hours * 3600);
        if(hours == 0) {return remainingTimeMin(timeleft)}
        else if(timeleft == 0 && hours == 1){return hours + " hour";}
        else if(hours == 1 && timeleft != 0){return hours + " hour, " + remainingTimeMin(timeleft);}
        else if(timeleft % 60 == 0){return hours + " hours and " + remainingTimeMin(timeleft);}
        else return hours + " hours, " + remainingTimeMin(timeleft);
    }
    function remainingTimeDay(time){
        var days = Math.floor(time/86400);
        var timeleft = time - (days * 86400);
        if(timeleft == 0 && days == 1){return days + " day";}
        else if(days == 1 && timeleft != 0){return days + " day, " + remainingTimeHour(timeleft);}
        else return days + " days, " + remainingTimeHour(timeleft);
    }
    function remainingTimeYear(time){
        var years = Math.floor(time / 31536000);
        var timeleft = time - (years * 31536000);
        if(timeleft == 0 && years == 1){return years + " year";}
        else if(years == 1 && timeleft != 0){return years + " year, " + remainingTimeDay(timeleft);}
        else return years + " years, " + remainingTimeDay(timeleft);
    }
  }
  