export const getdata = async () => {
  
  let url = "http://localhost:3000/user";

    let ad_user_req = await fetch(url);
    let ad_user_res = await ad_user_req.json();
    console.log(ad_user_res);
};
