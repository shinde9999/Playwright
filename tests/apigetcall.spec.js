const{test , expect} = require("@playwright/test");

test("Get Api Method",async({request})=>{

    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");

    //Simple call
    console.log(resp);
    console.log("==================================================================");

    //for body 
    console.log(await resp.body());
    console.log("==================================================================");
    
    //For headers
    console.log(await resp.headers());
    console.log("==================================================================");

    //for headerArray
    console.log(await resp.headersArray());
    console.log("==================================================================");

    //for status
    console.log(await resp.status());
    console.log("==================================================================");

    //for statusText
    console.log(await resp.statusText());
    console.log("==================================================================");

    //to check status no
    expect(resp.status()).toBe(200);

    //to check statusText
    expect(resp.statusText()).toBe("OK");

    //check true
    expect(resp.ok()).toBeTruthy();

    //for json
    const resp1 = await resp.json();
    console.log(resp1);
    console.log("==================================================================");

    //To check the properties
    expect(resp1).toHaveProperty("userId",1);
    expect(resp1).toHaveProperty("id", 1);
    expect(resp1).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(resp1).toHaveProperty( "body","quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");



})