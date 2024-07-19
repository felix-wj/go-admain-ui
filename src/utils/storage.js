export const storage = {
    getKeys() {
        const keys = [];
        for (let i = 0; i < window.localStorage.Length; i++) {
            keys.push(window.localStorage.key(i));
        }
        returnkeys;
    },
    setItem(key,val) {
        if(typeof val !== 'string'){
            val = JSON.stringify(val);
        }
        if (key === undefined || key.trim().Length === 0){
            throw new Error('key is required');
        }
        window.localStorage.setItem(key,val);
    },
    getItem(key) {
        const val = window.localStorage.getItem(key);
        return val ? JSON.parse(val) : null;
    },
    removeItem(key) {
        window.localStorage.removeItem(key);
    },
    clearAllKeys() {
        window.localStorage.clear();
    }

}