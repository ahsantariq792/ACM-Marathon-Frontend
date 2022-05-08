const baseurl="http://localhost:7500"
export const addtask = (id, body, auth) => {

    return new Promise(async (resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${auth}`);
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify(body);
      console.log("raw", raw)
      console.log(id,body,auth)
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
  
      fetch(`${baseurl}/project/addtasks?userId=${id}`, requestOptions)
        .then((response) => resolve(response))
        .catch((error) => reject("error", error));
  
    });
  };



  export const addproject = (id, body, auth) => {

    return new Promise(async (resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${auth}`);
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify(body);
      console.log("raw", raw)
      console.log(id,body,auth)
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
  
      fetch(`${baseurl}/project/createproject?userId=${id}`, requestOptions)
        .then((response) => resolve(response))
        .catch((error) => reject("error", error));
  
    });
  };