var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//enum for diferent users
var Role;
(function (Role) {
    Role[Role["Superadmin"] = 0] = "Superadmin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Subscriber"] = 2] = "Subscriber";
})(Role || (Role = {}));
//class model contain properties that are in json
var model = /** @class */ (function () {
    function model() {
    }
    return model;
}());
// some global letiables used in code
var row;
var j = 0;
var value1;
var value2;
var value3;
var value4;
var value5;
var value6;
var value7;
var value8;
var newrow = 0;
// class type decorator formatted on class Myclass which extends 
// the model class and crud interface 
var Myclass = /** @class */ (function (_super) {
    __extends(Myclass, _super);
    function Myclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create function which gonna create new row in table in ui for data entry
    Myclass.prototype.Create = function () {
        var add = document.getElementById("tble");
        var addrow = add.insertRow();
        newrow = 1;
        var addc;
        for (var k = 0; k < 11; k++) {
            addc = addrow.insertCell();
            addc.innerHTML = "<input id=\"inp" + k + "[" + j + "]\">";
        }
        var btns = document.createElement('td');
        btns.innerHTML = "\n    <button id=\"Editing\" onClick=\"new Myclass().Update(this," + j + ")\">Edit</button>\n    <button id=\"Cancel[" + j + "]\" onClick=\"new Myclass().Cancel(" + j + ")\" disabled>Cancel</button>\n    <button id=\"Save\" onClick=\"new Myclass().Save(" + j + ")\">Save</button>\n    <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this," + j + ")\">Delete</button>";
        addrow.appendChild(btns);
        j++;
    };
    Myclass.prototype.Read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tab, validation, userdata, itemCount, _i, userdata_1, user, customern;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document.getElementById("load").innerHTML = "RefreshData";
                        tab = "<div class=\"table\"><table align=\"center\" id=\"tble\"><tr>";
                        tab += "<th>User Id</th>";
                        tab += "<th>First Name</th>";
                        tab += "<th>Middle Name</th>";
                        tab += "<th>Last Name</th>";
                        tab += "<th>Email</th>";
                        tab += "<th>Phone No.</th>";
                        tab += "<th>Role</th>";
                        tab += "<th>Address</th>";
                        tab += "<th>Customer</th>";
                        tab += "<th>CreatedOn</th>";
                        tab += "<th>ModifiedOn</th>";
                        tab += "<th></th></tr>";
                        validation = "<tr class='myrow'>";
                        return [4 /*yield*/, fetch("/users/get")
                                .then(function (response) { return response.json(); })
                                .then(function (json) {
                                console.log("getting data ", json);
                                return json;
                            })];
                    case 1:
                        userdata = _a.sent();
                        console.log("userdata", userdata);
                        itemCount = 1;
                        _i = 0, userdata_1 = userdata;
                        _a.label = 2;
                    case 2:
                        if (!(_i < userdata_1.length)) return [3 /*break*/, 5];
                        user = userdata_1[_i];
                        console.log("user", "itemCount", itemCount, user);
                        debugger;
                        this.firstname = user.firstname;
                        this.UserId = user.id;
                        this.middlename = user.middlename;
                        this.lastname = user.lastname;
                        this.email = user.email;
                        this.phonenumber = user.phonenumber;
                        this.address = user.address;
                        this.createdon = user.createdon;
                        this.modifiedon = user.modifiedon;
                        this.role = user.role;
                        return [4 /*yield*/, this.getcustomername(user.id).then(function (obj) { return obj; })];
                    case 3:
                        customern = _a.sent();
                        // const role = await this.getrolenamename(user.id).then((obj)=>obj);
                        // console.log(customern)
                        validation += "<td><input id='inp0[" + j + "]'  value=\"" + this.UserId + "\" disabled></td>";
                        validation += "<td><input id='inp1[" + j + "]'  value=\"" + this.firstname + "\" disabled></td>";
                        validation += "<td><input id='inp2[" + j + "]'  value=\"" + this.middlename + "\" disabled></td>";
                        validation += "<td><input id='inp3[" + j + "]'  value=\"" + this.lastname + "\" disabled></td>";
                        validation += "<td><input id='inp4[" + j + "]'  value=\"" + this.email + "\" disabled></td>";
                        validation += "<td><input id='inp5[" + j + "]'  value=\"" + this.phonenumber + "\" disabled></td>";
                        validation += "<td><input id='inp6[" + j + "]'  value=\"" + this.role + "\" disabled></td>";
                        validation += "<td><input id='inp7[" + j + "]'  value=\"" + this.address + "\" disabled></td>";
                        validation += "<td><input id='inp8[" + j + "]'  value=\"" + customern + "\" disabled></td>";
                        validation += "<td><input id='inp9[" + j + "]'  value=\"" + this.createdon + "\" disabled></td>";
                        validation += "<td><input id='inp10[" + j + "]'  value=\"" + this.modifiedon + "\" disabled></td>";
                        // adding buttons for crud operations
                        validation += "<td id=\"btn1\"> \n                    <button id=\"Editing\" onClick=\"new Myclass().Update(this," + j + ")\">Edit</button>\n                    <button id=\"Cancel[" + j + "]\" onClick=\"new Myclass().Cancel(" + j + ")\" disabled>Cancel</button>\n                    <button id=\"Save\" onClick=\"new Myclass().Save(" + j + ")\">Save</button>\n                    <button id=\"onDeleting\" onClick=\"new Myclass().Delete(this," + j + ")\">Delete</button> </td>";
                        validation += "</tr>";
                        j++;
                        document.getElementById("page").innerHTML = " " + tab + " " + validation + "\n                    </table>    </div>";
                        itemCount++;
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // read function which gonna read the data from json file
    // Read<T>(){
    //     document.getElementById("load").innerHTML="RefreshData";
    //     let tab = `<div class="table"><table align="center" id="tble"><tr>`;
    //     tab += `<th>User Id</th>`;
    //     tab += `<th>First Name</th>`;
    //     tab += `<th>Middle Name</th>`;
    //     tab += `<th>Last Name</th>`;
    //     tab += `<th>Email</th>`;
    //     tab += `<th>Phone No.</th>`;
    //     tab += `<th>Role</th>`;
    //     tab += `<th>Address</th>`;
    //     tab += `<th>Customer</th>`;
    //     tab+="<th></th></tr>";
    //     let validation = "<tr class='myrow'>";
    // fetch("/users")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             json.forEach((user) => {
    //                 this.UserId=user.id;
    //                 this.firstname=user.firstname;
    //                 this.middlename=user.middlename;
    //                 this.lastname=user.lastname;
    //                 this.email=user.email;
    //                 this.phonenumber=user.phonenumber;
    //                 this.role=user.role;
    //                 this.address=user.address;
    //                 console.log('above')
    //                 const customern=  this.getcustomername(user.id).then((obj)=>obj);
    //                 console.log(customern)
    //                 validation+=`<td><input id='inp0[${j}]'  value="${this.UserId}" disabled></td>`;
    //                 validation+=`<td><input id='inp1[${j}]'  value="${this.firstname}" disabled></td>`;
    //                 validation+=`<td><input id='inp2[${j}]'  value="${this.middlename}" disabled></td>`;
    //                 validation+=`<td><input id='inp3[${j}]'  value="${this.lastname}" disabled></td>`;
    //                 validation+=`<td><input id='inp4[${j}]'  value="${this.email}" disabled></td>`;
    //                 validation+=`<td><input id='inp5[${j}]'  value="${this.phonenumber}" disabled></td>`;
    //                 validation+=`<td><input id='inp6[${j}]'  value="${this.role}" disabled></td>`;
    //                 validation+=`<td><input id='inp7[${j}]'  value="${this.address}" disabled></td>`;
    //                 validation+=`<td><input id='inp8[${j}]'  value="${customern}" disabled></td>`;
    //                 // adding buttons for crud operations
    //                 validation+=`<td id="btn1"> 
    //                 <button id="Editing" onClick="new Myclass().Update(this,${j})">Edit</button>
    //                 <button id="Cancel[${j}]" onClick="new Myclass().Cancel(${j})" disabled>Cancel</button>
    //                 <button id="Save" onClick="new Myclass().Save(${j})">Save</button>
    //                 <button id="onDeleting" onClick="new Myclass().Delete(this,${j})">Delete</button> </td>`;
    //                         validation+=`</tr>`;
    //                 j++;
    //                 });
    //                 document.getElementById("page").innerHTML=` ${tab} ${validation}
    //                 </table>    </div>`;
    //             });
    // }
    // update function for editing the data
    Myclass.prototype.Update = function (i, l) {
        if (newrow === 1) {
            alert("You are currently adding new data!");
            return;
        }
        var cn = document.getElementById("Cancel[" + l + "]");
        var input0 = document.getElementById("inp0[" + l + "]");
        if (newrow == 1) {
            input0.disabled = false;
        }
        else {
            input0.disabled = true;
        }
        cn.disabled = false;
        var input1 = document.getElementById("inp1[" + l + "]");
        input1.disabled = false;
        cn.disabled = false;
        var input2 = document.getElementById("inp2[" + l + "]");
        input2.disabled = false;
        cn.disabled = false;
        var input3 = document.getElementById("inp3[" + l + "]");
        input3.disabled = false;
        cn.disabled = false;
        var input4 = document.getElementById("inp4[" + l + "]");
        input4.disabled = false;
        cn.disabled = false;
        var input5 = document.getElementById("inp5[" + l + "]");
        input5.disabled = false;
        cn.disabled = false;
        var input6 = document.getElementById("inp6[" + l + "]");
        input6.disabled = false;
        cn.disabled = false;
        var input7 = document.getElementById("inp7[" + l + "]");
        input7.disabled = false;
        cn.disabled = false;
        row = document.getElementById("inp0[" + l + "]");
        value1 = row.value;
        row = document.getElementById("inp1[" + l + "]");
        value1 = row.value;
        row = document.getElementById("inp2[" + l + "]");
        value2 = row.value;
        row = document.getElementById("inp3[" + l + "]");
        value3 = row.value;
        row = document.getElementById("inp4[" + l + "]");
        value4 = row.value;
        row = document.getElementById("inp5[" + l + "]");
        value5 = row.value;
        row = document.getElementById("inp6[" + l + "]");
        value6 = row.value;
        row = document.getElementById("inp7[" + l + "]");
        value7 = row.value;
        row = document.getElementById("inp8[" + l + "]");
        value8 = row.value;
    };
    // delete function for deleting the row 
    Myclass.prototype.Delete = function (i, r) {
        return __awaiter(this, void 0, void 0, function () {
            var id, customer, role, del, tab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Are you sure to delete this record ?")) return [3 /*break*/, 2];
                        id = document.getElementById("inp0[" + r + "]").value;
                        customer = document.getElementById("inp8[" + r + "]").value;
                        role = document.getElementById("inp6[" + r + "]").value;
                        del = i.parentElement.parentElement;
                        // console.log(id)
                        return [4 /*yield*/, fetch("/users/" + id, {
                                method: "DELETE",
                                body: JSON.stringify({
                                    UId: id
                                }),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            })
                                .then(function (res) {
                                res.json;
                            })];
                    case 1:
                        // console.log(id)
                        _a.sent();
                        tab = document.getElementById("tble");
                        tab.deleteRow(del.rowIndex);
                        alert("Data deleted with User Id: " + id + " !!");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // cancel for reterieve the old data 
    Myclass.prototype.Cancel = function (i) {
        row = document.getElementById("inp1[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp1[" + i + "]' value=\"" + value1 + "\">";
        row = document.getElementById("inp2[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp2[" + i + "]' value=\"" + value2 + "\">";
        row = document.getElementById("inp3[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp3[" + i + "]' value=\"" + value3 + "\">";
        row = document.getElementById("inp4[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp4[" + i + "]' value=\"" + value4 + "\">";
        row = document.getElementById("inp5[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp5[" + i + "]' value=\"" + value5 + "\">";
        row = document.getElementById("inp6[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp6[" + i + "]' value=\"" + value6 + "\">";
        row = document.getElementById("inp7[" + i + "]").parentElement;
        row.innerHTML = "<input id='inp7[" + i + "]' value=\"" + value7 + "\">";
    };
    // save function used to save the data after manipulation is done
    Myclass.prototype.Save = function (i) {
        var always = true;
        var cn = document.getElementById("Cancel[" + i + "]");
        var input0 = document.getElementById("inp0[" + i + "]");
        cn.disabled = true;
        var input1 = document.getElementById("inp1[" + i + "]");
        var letters1 = /^[A-Za-z]+$/;
        if (!input1.value.match(letters1)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input2 = document.getElementById("inp2[" + i + "]");
        var letters2 = /^[A-Za-z]+$/;
        if (!input2.value.match(letters2)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input3 = document.getElementById("inp3[" + i + "]");
        var letters = /^[A-Za-z]+$/;
        if (!input3.value.match(letters)) {
            alert("Error Please Enter Valid Name");
            always = false;
        }
        cn.disabled = true;
        var input4 = document.getElementById("inp4[" + i + "]");
        var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!input4.value.match(email)) {
            alert("Please Enter Valid Email");
            always = false;
        }
        cn.disabled = true;
        var input5 = document.getElementById("inp5[" + i + "]");
        var phoneno = /^\d{10}$/;
        if (!input5.value.match(phoneno)) {
            alert("Please Enter Valid number");
            always = false;
        }
        cn.disabled = true;
        var input6 = document.getElementById("inp6[" + i + "]");
        if (input6.value != "SuperAdmin" && input6.value != 'Admin' && input6.value != 'Subscriber') {
            alert("Please Enter Valid Role");
            always = false;
        }
        cn.disabled = true;
        var input7 = document.getElementById("inp7[" + i + "]");
        var add = /^[a-zA-Z0-9\s,'-]*$/;
        if (!input7.value.match(add)) {
            alert("Please Enter Valid address");
            always = false;
        }
        cn.disabled = true;
        var input8 = document.getElementById("inp8[" + i + "]");
        var cus;
        if (typeof (input8) === typeof (cus)) {
            always = true;
        }
        if (always) {
            if (newrow == 0) {
                fetch("/users/" + input0.value, {
                    method: "PUT",
                    body: JSON.stringify({
                        firstname: input1.value,
                        middlename: input2.value,
                        lastname: input3.value,
                        email: input4.value,
                        phonenumber: input5.value,
                        role: input6.value,
                        address: input7.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(function (res) {
                    res.json;
                });
                input0.disabled = true;
                input1.disabled = true;
                input2.disabled = true;
                input3.disabled = true;
                input4.disabled = true;
                input5.disabled = true;
                input6.disabled = true;
                input7.disabled = true;
            }
            else {
                fetch("/users/", {
                    method: "POST",
                    body: JSON.stringify({
                        id: input0.value,
                        firstname: input1.value,
                        middlename: input2.value,
                        lastname: input3.value,
                        email: input4.value,
                        phonenumber: input5.value,
                        role: input6.value,
                        address: input7.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(function (res) {
                    if (res.status != 404) {
                        res.json;
                        input0.disabled = true;
                        input1.disabled = true;
                        input2.disabled = true;
                        input3.disabled = true;
                        input4.disabled = true;
                        input5.disabled = true;
                        input6.disabled = true;
                        input7.disabled = true;
                        alert("Data saved successfully!");
                        newrow = 0;
                    }
                    else {
                        alert("Cannot update! UserId already exists");
                        input0.disabled = false;
                        input1.disabled = false;
                        input2.disabled = false;
                        input3.disabled = false;
                        input4.disabled = false;
                        input5.disabled = false;
                        input6.disabled = false;
                        input7.disabled = false;
                    }
                });
            }
        }
    };
    Myclass.prototype.getcustomername = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var customername;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customername = "";
                        return [4 /*yield*/, fetch("/users/" + userid)
                                .then(function (response) { return response.json(); }).then(function (cname) {
                                var obj = cname;
                                customername = obj.cname;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, customername];
                }
            });
        });
    };
    Myclass.prototype.getrolenamename = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var rolename;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rolename = "";
                        return [4 /*yield*/, fetch("/users/" + userid)
                                .then(function (response) { return response.json(); }).then(function (rkey) {
                                var obj = rkey;
                                rolename = obj.rkey;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, rolename];
                }
            });
        });
    };
    Myclass = __decorate([
        FormatDate(new Date())
    ], Myclass);
    return Myclass;
}(model));
// Decorator DateTime Function 
function FormatDate(dt) {
    return function (target, name, descriptor) {
        var dtm = document.getElementById("datetime");
        setInterval(function () {
            dtm.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
// main funcion 
function main() {
    var obj = new Myclass();
    obj.Read();
}
