try {
    let a = 3;
        b = 0;
        c = a/b
    if (c == Infinity){
        throw new Error('на ноль делить нельзя')
    }
    console.log(c);
} catch {
 console.log('на ноль делить нельзя');
}
