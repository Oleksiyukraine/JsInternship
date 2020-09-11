const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 'k',
    yay: 'yay',
};
const same = [];

Object.entries(object).forEach(([key, value]) => {
    if (key === value) {
        same.push([key, value]);
    }
});
const map = new Map(same);

console.log(typeof map.get('yay'), map.get('yay'));
// expected output: string 'yay'
