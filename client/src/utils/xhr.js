import Log from "./log";
class xhr {
  static post(url, payload, headers, cb) {
    xhr.requestWithBody("POST", url, payload, headers, cb);
  }

  static postWithCredentials(url, payload, headers, cb) {
    xhr.requestWithBodyAndCredentials("POST", url, payload, headers, cb);
  }

  static postRedirect(url, payload, headers, cb) {
    xhr.requestWithBodyRedirect("POST", url, payload, headers, cb);
  }

  static put(url, payload, headers, cb) {
    xhr.requestWithBody("PUT", url, payload, headers, cb);
  }

  static patch(url, payload, headers, cb) {
    xhr.requestWithBody("PATCH", url, payload, headers, cb);
  }

  static get(url, headers, cb) {
    xhr.request("GET", url, headers, cb);
  }

  static delete(url, headers, cb) {
    xhr.requestDelete("DELETE", url, headers, cb);
  }

  static postFile(url, payload, headers, cb) {
    xhr.requestWithFormData("POST", url, headers, payload, cb);
  }

  static updateFile(url, payload, headers, cb) {
    xhr.requestWithFormData("PUT", url, headers, payload, cb);
  }

  static requestWithFormData(method, url, headers, payload, cb) {
    fetch(url, {
      method: method,
      headers: headers,
      body: payload
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        cb(null, data);
      })
      .catch(error => {
        cb(error);
      });
  }

  static requestWithBodyAndCredentials(method, url, payload, headers, cb) {
    if(payload === null) {
      fetch(url, {
        mode: 'cors',
        credentials: 'include',
        method: method,
        headers: headers
      })
      .then(results => {
        return results.json();
      })
      .then(data => {
        Log.i(`Data in Body ${data}`);
        cb(null, data);
      })
      .catch(error => {
        Log.i(`Error in Body ${error}`);
        cb(error);
      });
    } else {
      fetch(url, {
        mode: 'cors',
        credentials: 'include',
        method: method,
        body: JSON.stringify(payload),
        headers: headers
      })
      .then(results => {
        return results.json();
      })
      .then(data => {
        Log.i(`Data in Body ${data}`);
        cb(null, data);
      })
      .catch(error => {
        Log.i(`Error in Body ${error}`);
        cb(error);
      });
    }
  }

  static requestWithBody(method, url, payload, headers, cb) {
    fetch(url, {
      method: method,
      body: JSON.stringify(payload),
      headers: headers
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        Log.i(`Data in Body ${data}`);
        cb(null, data);
      })
      .catch(error => {
        Log.i(`Error in Body ${error}`);
        cb(error);
      });
  }

  static requestWithBodyRedirect(method, url, payload, headers, cb) {
    fetch(url, {
      method: method,
      redirect: "follow",
      body: JSON.stringify(payload),
      headers: headers
    })
      .then(results => {
        var redirectUrl = results.url !== url ? results.url : "";
        if (redirectUrl) {
          return { redirect: redirectUrl };
        } else {
          return results.json();
        }
      })
      .then(data => {
        cb(null, data);
      })
      .catch(error => {
        cb(error);
      });
  }

  static request(method, url, headers, cb) {
    fetch(url, {
      method: method,
      headers: headers
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        cb(null, data);
      })
      .catch(error => {
        cb(error);
      });
  }

  static requestDelete(method, url, headers, cb) {
    fetch(url, {
      method: method,
      headers: headers
    })
      .then(results => {
        if (results.status === 200) {
          return results.json();
        } else {
          cb(null);
        }
      })
      .then(data => {
        cb(null, data);
      })
      .catch(error => {
        cb(error);
      });
  }
}

export default xhr;
