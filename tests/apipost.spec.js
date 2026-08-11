const{test , expect, request} = require("@playwright/test");

test("post Api Method",async({request})=>{

    const authdata={
    "username" : "admin",
    "password" : "password123"
}
    const resp = await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type": "application/json"},data:authdata});
    console.log(resp.status());
    const respData = await resp.json();
    console.log(respData);
    //Checks data is null or not by using the token
    expect(respData.token).not.toBeNull();
    
    
})

test("Post call with Create BookingID",async({request})=>{

    const bookingdata={
    "firstname" : "Aniket",
    "lastname" : "Shinde",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2025-01-01",
        "checkout" : "2026-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    const resp = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type": "application/json"},data:bookingdata});
    console.log(resp.status());
    const respData = await resp.json();
    console.log(respData);
    console.log(respData.bookingid);//print bookingid number

    //checking id should not be null
    expect(respData.bookingid).not.toBeNull();

    //checking whether the name is correct or not
    expect(respData.booking.firstname).toBe("Aniket");
    
})

test("new api post call practice",async({request})=>{

    const data2 = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

const response = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type": "application/json"},data:data2});
console.log(response);
console.log("=============================================");

console.log(response.status());
console.log("=============================================");


const response1 = await response.json();
console.log(response1);

})

