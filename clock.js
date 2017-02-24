var clock = {

    showtime: function () {
        this.time = new Date();
        this.h = this.time.getHours();
        this.m = this.time.getMinutes();
        this.s = this.time.getSeconds();

        this.m = (this.m < 10 ? "0" : "") + this.m;
        this.s = (this.s < 10 ? "0" : "") + this.s;
        this.ampm = (this.h < 12) ? "am" : "pm";
        this.h = (this.h > 12) ? this.h - 12 : this.h;
        this.h = (this.h === 0) ? 12 : this.h;

        $("#time").text(this.h + ":" + this.m + ":" + this.s + " " + this.ampm);
    }
};

$(document).ready(function () {
    clock.showtime();
    setInterval(clock.showtime, 1000);
});