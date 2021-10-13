import axios from 'axios';

export default class apiClient {
    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    query(sql, params = []) {
        var arr = {
            "string": sql,
            "params": params
        }
        return this.postRequest('/api', arr);
    }

    getRequest(url) {
        return axios
            .get(url)
            .then(this.status)
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    postRequest(url, data) {
        return axios
            .post(url, data)
            .then(this.status)
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
}
