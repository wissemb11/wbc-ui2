// import { assertType } from '@/plugins/Common'

function get(key, asPromise = false, defaultValue = "undefined") {
	if (!asPromise == true) {
		return localStorage.getItem(key);
	} else {
		return new Promise((resolve, reject) => {
			if (typeof window !== "undefined") {
				resolve(localStorage.getItem(key) || defaultValue);
				return;
			} else if (chrome.storage.local) {
				chrome.storage.local.get(key, (data) => {
					if (!data || typeof data[key] === "undefined") {
						if (typeof defaultValue === "undefined") {
							reject(`item "${key}" not stored`);
							return;
						}
						resolve(defaultValue);
						return;
					}

					// if (!assertType(data[key])) {
					//   reject(`item "${key}"'s type is not as expected`)
					//   return
					// }

					resolve(data[key]);
				});
			}
		});
	}
}
function set(key, value, asPromise = false) {
	if (!asPromise == true) {
		localStorage.setItem(key, value);
		return true;
	} else {
		return new Promise((resolve, reject) => {
			if (typeof window !== "undefined") {
				localStorage.setItem(key, value);
				resolve(true);
				return;
			} else if (chrome.storage.local) {
				const object = {};

				object[key] = value;

				chrome.storage.local.set(object, () => {
					if (chrome.runtime.lastError) {
						reject(chrome.runtime.lastError);
						return;
					}
				});
				resolve(true);
			}
		});
	}
}
function clear(asPromise = false) {
	if (asPromise == false) {
		localStorage.clear();
		return true;
	} else {
		return new Promise((resolve, reject) => {
			if (typeof window !== "undefined") {
				localStorage.clear();
				resolve(true);
				return;
			} else if (chrome.storage.local) {
				chrome.storage.local.clear();

				resolve(true);
			}
		});
	}
}

export default {
	install(Vue) {
		Vue.prototype.$Storage = { get, set, clear };
	},
};
