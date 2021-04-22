/// <reference types = "cypress" />

describe('HTTP Example', () => {

    let token = null;

    beforeEach(()=>{
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                'username' : 'admin',
                'password' : 'password123'
            },
            headers:{
                'Content-Type' : 'application/json' 
            }

        }).then((response)=>{
            expect(response.body).have.property('token')
            expect(response).to.have.property('status', 200)
            expect(response).to.not.be.null
            //const token = cy.get(response.body).value('token')
            // expect(response).then((responseToken) => { // or postToken() in your case
            // token = responseToken;
        })
    })
})

    it('POST - create', () =>{
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: {
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

        }).then((response)=> {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.contain({
                 "booking": {
                 "firstname": "Jim",
                 "lastname": "Brown",
                 "totalprice": 111,
                 "depositpaid": true,
                 "bookingdates": {
                 "checkin": "2018-01-01",
                 "checkout": "2019-01-01"
                 },
                 "additionalneeds": "Breakfast"
                }
                 })
        })
    })

    it('GET - read', () =>{
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',

        }).then((response)=> {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.deep.contain({
                "bookingid":8
            })
        })
    })

    it('PUT - update', ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/1',
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
               // 'Cookie' : 'token'
            },
            body:({
                "firstname" : "James",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            })
        })

        it(('DELETE'), () =>{
            cy.request({
                method: 'DELETE',
                url: 'https://restful-booker.herokuapp.com/booking/1',
                headers:{
                    'Content-Type' : 'application/json',
                    'Cookie' : 'token=abc123'
                }.then((response) =>{
                    expect(response).to.have.property('status', 201)

                })
             
            })
        })






    })

    