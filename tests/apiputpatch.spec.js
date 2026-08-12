const { test , expect} = require('@playwright/test');

test("Put Example", async({request})=>{

    //first create token
    const authdata={
    "username" : "admin",
    "password" : "password123"
}
    const response=await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:authdata});

    const jsonresp = await response.json();
    const authtoken = jsonresp.token
    console.log("Token is:",authtoken);

    console.log("==========================================================================================");
    

    //Create booking
    const newdata1={
    "firstname" : "Aniket",
    "lastname" : "Shinde",
    "totalprice" : 111,
    "depositpaid" : false,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    const newbooking=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:newdata1});
    const booking = await newbooking.json();
    const bookingid = booking.bookingid;

    console.log(booking);
    console.log("==================================");
    
    console.log("Booking id:",bookingid);
    console.log("=======================================================================================================");
    

    //Update the booking with request.put

    const updateresponse={
    "firstname" : "Aniket",
    "lastname" : "Shinde",
    "totalprice" : 3000,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Dinner"
}
    
    const update = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{headers:{"Content-Type":"application/json","Accept":"application/json","Cookie": `token=${authtoken}`},data:updateresponse});

    const newupdate = await update.json();

    console.log(newupdate);
    
    
    


})