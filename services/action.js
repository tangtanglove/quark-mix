import { request } from '@/utils/request';

export const get = (params) => {
	let actionUrl = '',url = '';
	url = params.actionUrl;
	delete params['actionUrl'];

	if(url.indexOf("http") == -1) {
		actionUrl = `../../api/${actionUrl}`;
	}

	request(actionUrl,{
		method:'GET',
		data:params
	});
}