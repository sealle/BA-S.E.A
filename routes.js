const routes = require("next-routes")();

module.exports = routes;
routes.add("passwordchange", "/passwordchange/:id", "passwordchange");
