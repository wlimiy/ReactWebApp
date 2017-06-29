//实现本地存储，就两个方法：设置get和获取set
export function getStorage(key) {
    return localStorage.getItem(key);
}
export function setStorage(key,value) {
    localStorage.setItem(key,value);
}

