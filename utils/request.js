export const request = (url, options) => {

	uni.request({
		url: url,
		data: options.data,
		method: options.method,
		header: {
			Authorization: `Bearer ${sessionStorage.getItem('token') ?? ''}`
		},
		success: (res) => {
			console.log(res.data);
			return res.data;
		}
	});
}