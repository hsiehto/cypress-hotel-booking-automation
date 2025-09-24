/// <reference types="cypress" />

describe("Booking Tests", () => {
  cy.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from.
    // failing the test.
    return false;
  });

  beforeEach(() => {
    cy.visitBookingPage();
  });
  it("display booking form", () => {
    cy.contains("Shady Meadows B&B").should("be.visible");
  });
  it("enter form details", () => {
    cy.enterFormDetails();
  });
  it("GET rooms", () => {
    cy.request("GET", "https://automationintesting.online/api/room").then(
      (response) => {
        console.log(response);
        expect(response.status).eq(200);
        expect(response.body.rooms[0].accessible).eq(true);
      }
    );
  });
  it("Submit a message", () => {
    cy.request("POST", "https://automationintesting.online/api/message", {
      name: "john",
      email: "johndoe@gmail.com",
      phone: "111-111-1111",
      subject: "hihi this is john",
      description: "this is a long message for john doe",
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(response.body.success).eq(true);
    });
  });
  it.only("Incorrect Subject", () => {
    cy.request({
      method: "POST",
      url: "https://automationintesting.online/api/message",
      body: {
        name: "john",
        email: "johndoe@gmail.com",
        phone: "111-111-1111",
        subject: "hi",
        description: "this is a long message for john doe",
      },
      // include when testing for error
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.body[0]).eq(
        "Subject must be between 5 and 100 characters."
      );
      expect(response.status).eq(400);
    });
  });
});
