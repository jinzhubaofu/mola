/**
 * @file file
 * @author leon <ludafa@outlook.com>
 */

export let os = {};
export let browser = {};

const ua = navigator.userAgent;
const webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
const webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
const touchpad = webos && ua.match(/TouchPad/);
const kindle = ua.match(/Kindle\/([\d.]+)/);
const silk = ua.match(/Silk\/([\d._]+)/);
const blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
const bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
const rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
const playbook = ua.match(/PlayBook/);
const chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
const firefox = ua.match(/Firefox\/([\d.]+)/);
const ie = ua.match(/MSIE ([\d.]+)/) || ua.match(/MSIE\s([\d.]+)/);
const webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
    && !chrome;
const runtime = ua.match(/BaiduLightAppRuntime/i);
const qingpai = ua.match(/qingpai(ios|android)client/i);
const uc = ua.match(/UCBrowser[\/]?([\d.]+)/i);
const weixin = ua.match(/MicroMessenger/i);
const weibo = ua.match(/Weibo/i);
const qq = ua.match(/MQQ/i);
const hao123 = ua.match(/hao123\/([\d.]+)/i);
const baidu = ua.match(/baiduboxapp\//i);
const safari = webkit
    && ua.match(/Mobile\//)
    && !chrome && !uc && !weixin && !qq && !weibo && !hao123;


// Todo: clean this up with a better OS/browser seperation:
// - discern (more) between multiple browsers on android
// - decide if kindle fire in silk mode is android or not
// - Firefox on Android doesn't specify the Android version
// - possibly devide in os, device and browser hashes

if (browser.webkit = !!webkit) {
    browser.version = webkit[1];
}

if (android) {
    os.android = true;
    os.version = android[2];
}

if (iphone && !ipod) {
    os.ios = os.iphone = true;
    os.version = iphone[2].replace(/_/g, '.');
}

if (ipad) {
    os.ios = os.ipad = true;
    os.version = ipad[2].replace(/_/g, '.');
}

if (ipod) {
    os.ios = os.ipod = true;
    os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
}

if (webos) {
    os.webos = true;
    os.version = webos[2];
}

if (touchpad) {
    os.touchpad = true;
}

if (blackberry) {
    os.blackberry = true;
    os.version = blackberry[2];
}

if (bb10) {
    os.bb10 = true;
    os.version = bb10[2];
}
if (rimtabletos) {
    os.rimtabletos = true;
    os.version = rimtabletos[2];
}
if (playbook) {
    browser.playbook = true;
}
if (kindle) {
    os.kindle = true;
    os.version = kindle[1];
}
if (silk) {
    browser.silk = true;
    browser.version = silk[1];
}
if (!silk && os.android && ua.match(/Kindle Fire/)) {
    browser.silk = true;
}
if (chrome) {
    browser.chrome = true;
    browser.version = chrome[1];
}
if (firefox) {
    browser.firefox = true;
    browser.version = firefox[1];
}
if (ie) {
    browser.ie = true;
    browser.version = ie[1];
}
if (safari && (ua.match(/Safari/) || !!os.ios)) {
    browser.safari = true;
}
if (webview) {
    browser.webview = true;
}
if (ie) {
    browser.ie = true;
    browser.version = ie[1];
}
if (runtime) {
    browser.runtime = true;
}
if (uc) {
    browser.uc = true;
    browser.version = uc[1];
}
if (qq) {
    browser.qq = true;
}
if (weixin) {
    browser.weixin = true;
}
if (baidu) {
    browser.baidu = true;
}

if (weibo) {
    browser.weibo = true;
}
if (qingpai) {
    browser.runtime = true;
    browser.qingpai = true;
}

os.tablet = !!(
    ipad
    || playbook || (android && !ua.match(/Mobile/))
    || (firefox && ua.match(/Tablet/))
    || (ie && !ua.match(/Phone/) && ua.match(/Touch/))
);

os.phone = !!(
    !os.tablet && !os.ipod
    && (
        android
        || iphone || webos || blackberry || bb10
        || (chrome && ua.match(/Android/))
        || (chrome && ua.match(/CriOS\/([\d.]+)/))
        || (firefox && ua.match(/Mobile/))
        || (ie && ua.match(/Touch/))
    )
);
