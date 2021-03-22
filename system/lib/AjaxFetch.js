import Config from '../../config/config'
const fetch = require('node-fetch')
class AjaxFetch {

	constructor() {

		this.setConfig = {}
		this.mainConfig = Config
	}

	fetchConfig() {
		this.setConfig = {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, *cors, same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'omit', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			// redirect: 'follow', // manual, *follow, error
			// referrer: 'no-referrer', // no-referrer, *client
			body: {} // body data type must match "Content-Type" header
		}
	}

	mergeFetch() {
		this.fetchConfig()
		let fetchConfig = this.setConfig
		let newHeaders = Object.assign({}, fetchConfig.headers, this.mainConfig.fetch.headers)
		this.mainConfig.fetch.headers = newHeaders
		this.setConfig = Object.assign({}, fetchConfig, this.mainConfig.fetch)
	}


	queryString(paramObject) {
		var esc = encodeURIComponent;
		var query = Object.keys(paramObject)
			.map(k => {
				if (Array.isArray(paramObject[k])) {
					let urlEncode = ''
					paramObject[k].forEach((item, index) => {
						for (const [itemkey, itemvalue] of Object.entries(item)) {
							urlEncode += `${k}[${index}][${itemkey}]=${encodeURI(itemvalue)}&`
						}
					})
					return urlEncode.slice(0, -1)
				} else {
					return esc(k) + '=' + esc(paramObject[k])
				}
			})
			.join('&');
		return query;
	}
	fetch(method = '', url = '', data = '') {
		let t = this;
		this.mergeFetch()
		this.setConfig.method = method;
		this.setConfig.body = JSON.stringify(data);
		if (method == 'get' || method == 'GET') {
			delete this.setConfig.body
			let getData = data == '' ? '' : '?' + this.queryString(data)
			url = url + getData
		}

		// Default options are marked with *
		// console.log(this.setConfig)
		const response = fetch(url, this.setConfig)
			.then(response => response.json())

		// .catch((error) => {
		// 	return t.output(false, error)
		// });
		this.setConfig = {}
		return response; // parses JSON response into native JavaScript objects

	}

	fetchUpload(e) {
		let input = event.target
		let self = this
		if (input.files && input.files[0]) {
			let image = new Image()
			let reader = new FileReader()
			let ggImage
				; (reader.onload = e => {
					self.fileimage = e.target.result
				}),
					reader.readAsDataURL(input.files[0])
			if (
				input.files[0].type == 'image/jpeg' ||
				input.files[0].type == 'image/png'
			) {
				let fileData = input.files[0]
				this.filename = fileData.name
				self.fileimage = fileData.filename
			}
		}
		let formData = new FormData()
		formData.append('key', '59e51e5db668184d8c4a085fb8389c3acfd76a50')
		formData.append('file', input.files[0])
		const response = fetch(`https://cdn.esd.co.id/image`, {
			method: 'POST',
			body: formData
		}).then(res => res.json())
		return response
	}

	output(status, data = '') {
		return {
			status: status,
			data: data,
		}
	}

	getConfig() {
		this.mergeFetch()
		return this
	}

}


export default new AjaxFetch()