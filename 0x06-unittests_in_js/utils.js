class Utils {
    static calculateNumber(type, a, b) {
	const an = Math.round(a);
	const bn = Math.round(b);
	let k = 0;
	switch (type) {
	case 'SUM':
            k = an + bn;
            break;
	case 'SUBTRACT':
            k = an - bn;
            break;
	case 'DIVIDE':
	    if (bn === 0) {
		k = "Error";
	    } else {
		k = an / bn;
	    }
	    break;
	}
	return k;
    }
}

module.exports = Utils;
