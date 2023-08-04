module.exports = function reverse (n) {
      const nativeNumber = Math.abs(n);
      const arr = ('' + nativeNumber).split('');
    const arr2 = arr.reverse();
    return arr2.join('');
}
