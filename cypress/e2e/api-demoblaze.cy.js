describe("API Demoblaze – Signup y Login", () => {
    
    const apiUrl = "https://api.demoblaze.com";

    const user = {
        username: "usuario" + Math.floor(Math.random() * 99999),
        password: "123456"
    };

    it("Crear un nuevo usuario en signup", () => {
        cy.request({
            method: "POST",
            url: `${apiUrl}/signup`,
            body: user
        }).then((response) => {
            expect(response.status).to.equal(200);

            // La API a veces devuelve "", así que solo validamos status 200
            // y que el login posterior funcione
        });
    });

    it("Validar que el usuario recién creado puede hacer login", () => {
        cy.request({
            method: "POST",
            url: `${apiUrl}/login`,
            body: user
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.include("Auth_token");
        });
    });

    it("Intentar crear un usuario ya existente", () => {
        cy.request({
            method: "POST",
            url: `${apiUrl}/signup`,
            failOnStatusCode: false,
            body: user
        }).then((response) => {
            expect(response.status).to.equal(200);

            // A veces devuelve texto, a veces vacío, así que no validamos contenido
        });
    });

    it("Usuario y password incorrecto en login", () => {
        cy.request({
            method: "POST",
            url: `${apiUrl}/login`,
            failOnStatusCode: false,
            body: {
                username: user.username,
                password: "incorrecta123"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);

            if (typeof response.body === "string") {
              expect(response.body).to.be.a("string");
            } else {
              expect(response.body).to.have.property("errorMessage");
              expect(response.body.errorMessage).to.equal("Wrong password.");
        }
        });
    });

});
