/*!
 * This code taken from vue
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

const _toString = Object.prototype.toString;

function getType(fn) {
	const match = fn && fn.toString().match(/^\s*function (\w+)/);
	return match ? match[1] : "";
}

export function assertType(value, type) {
	let valid;

	const expectedType = getType(type);

	if (simpleCheckRE.test(expectedType)) {
		const t = typeof value;
		valid = t === expectedType.toLowerCase();
		// for primitive wrapper objects
		if (!valid && t === "object") {
			valid = value instanceof type;
		}
	} else if (expectedType === "Object") {
		valid = isPlainObject(value);
	} else if (expectedType === "Array") {
		valid = Array.isArray(value);
	} else {
		valid = value instanceof type;
	}

	return valid;
}

export function isPlainObject(obj) {
	return _toString.call(obj) === "[object Object]";
}

export default assertType;
