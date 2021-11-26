let db = connect("localhost:27017");

db = db.getSiblingDB("energy");
db.createUser({
  user: "admin",
  pwd: "admin_energy_pwd",
  roles: [{ role: "readWrite", db: "energy" }],
});

db.users.insert({
  login: "superadmin",
  password: "$2a$10$mb4KMUbrRV.0In2AmNvt8u2WQyGI4h03cN6AWQxMUIqw2cst.3VCq",
  type: "superadmin",
});
