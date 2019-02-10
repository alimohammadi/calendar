const toPersian=(gy, gm, gd) => {
    let g_d_m=[0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let jy=0;
    if (gy>1600) {
        jy=979;
        gy-=1600;
    } else {
        jy=0;
        gy-=621;
    }
    let gy2=(gm>2)? (gy+1):gy;
    let days=(365*gy)+(parseInt((gy2+3)/4))-(parseInt((gy2+99)/100))+(parseInt((gy2+399)/400))-80+gd+g_d_m[gm-1];
    jy+=33*(parseInt(days/12053));
    days%=12053;
    jy+=4*(parseInt(days/1461));
    days%=1461;
    if (days>365) {
        jy+=parseInt((days-1)/365);
        days=(days-1)%365;
    }
    let jm=(days<186)? 1+parseInt(days/31):7+parseInt((days-186)/30);
    let jd=1+((days<186)? (days%31):((days-186)%30));
    return [jy, jm, jd];
};
const toGregorain=(jy, jm, jd) => {
    let gy=0;
    if (jy>979) {
        gy=1600;
        jy-=979;
    } else {
        gy=621;
    }
    let days=(365*jy)+((parseInt(jy/33))*8)+(parseInt(((jy%33)+3)/4))+78+jd+((jm<7)? (jm-1)*31:((jm-7)*30)+186);
    gy+=400*(parseInt(days/146097));
    days%=146097;
    if (days>36524) {
        gy+=100*(parseInt(--days/36524));
        days%=36524;
        if (days>=365) days++;
    }
    gy+=4*(parseInt(days/1461));
    days%=1461;
    if (days>365) {
        gy+=parseInt((days-1)/365);
        days=(days-1)%365;
    }
    let gd=days+1;
    let sal_a=[0, 31, ((gy%4==0&&gy%100!=0)||(gy%400==0))? 29:28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let gm=0;
    for (; gm<13; gm++) {
        let v=sal_a[gm];
        if (gd<=v) break;
        gd-=v;
    }
    return [gy, gm, gd];
};

export { toPersian, toGregorain };