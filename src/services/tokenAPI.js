const getGravatar = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  //  console.log(response);
  const location = await response.json();
  //  console.log(location.token);
  //  const url = response.url
  // // console.log(url);
  localStorage.setItem('token', location.token);
  return location.token;
};

export default getGravatar;
