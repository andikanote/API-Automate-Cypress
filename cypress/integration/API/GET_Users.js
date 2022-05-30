/// <reference types="Cypress" />
const dataJson = require('../../fixtures/example')
describe('api test cases',() => {
    var payload = ""
    let accesstoken= 'b6b4fefcfa4ee3beef78a6965c8b3b02d135aef6e229a20be86c52b9d28b0d20'
    it('get user', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/4038/posts',
            headers: {
                'Authorization': 'Bearer '+accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination).has.property('limit',20)
            expect(res.body).has.to.deep.equal({
                "code": 200,
                "meta": {
                    "pagination": {
                        "total": 0,
                        "pages": 0,
                        "page": 1,
                        "limit": 20
                    }
                },
                "data": []
                })
        })
    })

    // it('get user by id', () => {
    //     cy.request({
    //         method : 'GET',
    //         url : 'https://gorest.co.in/public-api/users/2',
    //         headers: {
    //             'authorization': 'Bearer '+accesstoken,
    //           }
    //     }).then((res)=>{
    //         expect(res.status).to.eq(200)
    //         expect(res.body.data.name).to.eq('Shwet Acharya')
    //     })    
    // })  
})