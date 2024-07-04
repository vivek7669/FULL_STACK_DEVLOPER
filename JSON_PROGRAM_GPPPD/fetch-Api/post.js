export const postdata = async (user) => {

    let url = "http://localhost:3000/user";
    let option = {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          User_Email : user.username,
          User_Password :user.password
      })
    };
  
      let ad_user_req = await fetch(url, option);
      let ad_user_res = await ad_user_req.json();
  };
  
