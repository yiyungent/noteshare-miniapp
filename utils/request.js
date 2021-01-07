import config from "../config/config.js";


/**
 * 发送http请求
 * @param {String} url 目标rl
 * @param {String} method 方法get,post,put etc.
 * @param {Object} data 对象参数
 * @returns {Promise<unknown>}
 */
const request = function(url, method, data) {
	return new Promise((resolve, reject) => {
		const options = {
			url: config.baseUrl + url,
			method: method,
			data: data,
			success: (res) => {
				console.log(res);
				res.data.status = res.statusCode;
				resolve(res.data);
			},
			fail: (err) => {
				console.log(err)
				reject(err.errMsg);
			}
		};
		
		wx.request(options);
	});
};

export default request;
