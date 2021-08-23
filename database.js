var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Pool = require('pg').Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Neelesh@22',
    port: 5432
});
var getUsers = function (req, res) {
    pool.query('SELECT * FROM userdata as u order by u.id', function (error, results) {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
        console.log("cashmoney", results.rows);
    });
};
// ,(SELECT cname FROM customer where customer.user_id = u.id)
var getUserById = function (req, res) {
    var id = parseInt(req.params.id);
    pool.query("SELECT * FROM userdata as u,customer as c,role as r where u.id=r.rid and u.id=c.user_id and id=$1", [id], function (error, results) {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows[0]);
    });
};
var createUser = function (req, res) {
    var _a = req.body, id = _a.id, firstname = _a.firstname, middlename = _a.middlename, lastname = _a.lastname, email = _a.email, phonenumber = _a.phonenumber, role = _a.role, address = _a.address;
    console.log("req.body", req.body);
    pool.query('INSERT INTO userdata (id,firstname,middlename,lastname,email,phonenumber,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [id, firstname, middlename, lastname, email, phonenumber, role, address], function (error, results) {
        if (error) {
            console.log("MOHIT MEHTA");
            res.status(404).send();
        }
        else {
            console.log("NEELESH MEHTA");
            res.status(201).send("User added with ID: " + id);
        }
    });
};
var updateUser = function (req, res) {
    var id = parseInt(req.params.id);
    var _a = req.body, firstname = _a.firstname, middlename = _a.middlename, lastname = _a.lastname, email = _a.email, phonenumber = _a.phonenumber, role = _a.role, address = _a.address;
    console.log(req.body);
    pool.query('UPDATE userdata SET firstname = $1,middlename=$2,lastname=$3,email = $4,phonenumber=$5,role=$6,address=$7 WHERE id = $8', [firstname, middlename, lastname, email, phonenumber, role, address, id], function (error, results) {
        if (error) {
            throw error;
        }
        res.status(200).send("User modified with ID: " + id);
    });
};
var deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                console.log("deleting!");
                console.log(id);
                return [4 /*yield*/, pool.query('DELETE FROM customer WHERE customer.user_id = $1', [id], function (error, results) {
                        // if (error) {
                        //   console.log(error);
                        //   throw error
                        // }
                        // res.status(200).send(`customer deleted with ID: ${id}`)
                        pool.query('DELETE FROM role WHERE rid = $1', [id], function (error, results) {
                            // if (error) {
                            //   console.log(error);
                            //   throw error
                            // }
                            // res.status(200).send();
                            pool.query('DELETE FROM userdata WHERE id = $1', [id], function (error, results) {
                                if (error) {
                                    console.log(error);
                                    throw error;
                                }
                                res.status(200).send();
                            });
                        });
                    })
                    // pool.query('DELETE FROM userdata WHERE id = $1', [id], (error, results) => {
                    //   if (error) {
                    //     throw error
                    //   }
                    //   res.status(200).send(`User deleted with ID: ${id}`)
                    // })
                ];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};
