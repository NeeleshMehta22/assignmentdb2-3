//enum for diferent users
enum Role{
    
        Superadmin,
        Admin,
        Subscriber 
}
//class model contain properties that are in json
 class  model{
    UserId: number;
    firstname:string;
    middlename:string;
    lastname:string;
    email:string|number;
    phonenumber: number;
    role:Role;
    address: string|number;
    createdon:number;
    modifiedon:number;
    
}

// crud interface generic type 
interface Icrud<T>{
    Create<T>();
    Read<T>();
    Update<T>(i:any,j:any);
    Delete<T>(i:any,p:any);
}

// some global letiables used in code
let row;
let initialRowCount=0;
let value1;
let value2;
let value3;
let value4;
let value5;
let value6;
let value7;
let value8;
let newrow=0;

// class type decorator formatted on class Myclass which extends 
// the model class and crud interface 
@FormatDate(new Date())
class Myclass extends model implements Icrud<any>{
    
    // create function which gonna create new row in table in ui for data entry
    Create():void{
    let add= document.getElementById("tble") as HTMLTableElement;
    let addrow = add.insertRow();
    newrow=1;
    
    let addc;
    for( let k=0;k<11;k++)
    {
        addc = addrow.insertCell();
        addc.innerHTML=`<input id="inp${k}[${initialRowCount}]">`
    
    }
    
    const btns=document.createElement('td');
    btns.innerHTML=`
    <button id="Editing" onClick="new Myclass().Update(this,${initialRowCount})">Edit</button>
    <button id="Cancel[${initialRowCount}]" onClick="new Myclass().Cancel(${initialRowCount})" disabled>Cancel</button>
    <button id="Save" onClick="new Myclass().Save(${initialRowCount})">Save</button>
    <button id="onDeleting" onClick="new Myclass().Delete(this,${initialRowCount})">Delete</button>`;
    addrow.appendChild(btns);
    initialRowCount++;


}
async Read<T>(){
    
    document.getElementById("load").innerHTML="RefreshData";
    let tab = `<div class="table"><table align="center" id="tble"><tr>`;
    tab += `<th>User Id</th>`;
    tab += `<th>First Name</th>`;
    tab += `<th>Middle Name</th>`;
    tab += `<th>Last Name</th>`;
    tab += `<th>Email</th>`;
    tab += `<th>Phone No.</th>`;
    tab += `<th>Role</th>`;
    tab += `<th>Address</th>`;
    tab += `<th>Customer</th>`;
    tab += `<th>CreatedOn</th>`;
    tab += `<th>ModifiedOn</th>`;
    tab+="<th></th></tr>";
    let validation = "<tr class='myrow'>";

const userdata = await fetch("/users/get")

        .then((response) => response.json())
        .then((json) => {
                console.log("getting data ",json)
                return json;
        });

        console.log("userdata",userdata);
        let itemCount = 1
        for(const user of userdata){

            console.log("user","itemCount",itemCount,user)
        
            this.firstname=user.firstname;
            this.UserId=user.id;
            this.middlename=user.middlename;
            this.lastname=user.lastname;
            this.email=user.email;
            this.phonenumber=user.phonenumber;
            this.address=user.address;
            this.createdon=user.createdon;
            this.modifiedon=user.modifiedon;
            this.role=user.role;
                    // console.log('above')
                    const customern= await this.getcustomername(user.id).then((obj)=>obj);
                    // const role = await this.getrolenamename(user.id).then((obj)=>obj);
                    // console.log(customern)
                    validation+=`<td><input id='inp0[${initialRowCount}]'  value="${this.UserId}" disabled></td>`;
                    validation+=`<td><input id='inp1[${initialRowCount}]'  value="${this.firstname}" disabled></td>`;
                    validation+=`<td><input id='inp2[${initialRowCount}]'  value="${this.middlename}" disabled></td>`;
                    validation+=`<td><input id='inp3[${initialRowCount}]'  value="${this.lastname}" disabled></td>`;
                    validation+=`<td><input id='inp4[${initialRowCount}]'  value="${this.email}" disabled></td>`;
                    validation+=`<td><input id='inp5[${initialRowCount}]'  value="${this.phonenumber}" disabled></td>`;
                    validation+=`<td><input id='inp6[${initialRowCount}]'  value="${this.role}" disabled></td>`;
                    validation+=`<td><input id='inp7[${initialRowCount}]'  value="${this.address}" disabled></td>`;
                    validation+=`<td><input id='inp8[${initialRowCount}]'  value="${customern}" disabled></td>`;
                    validation+=`<td><input id='inp9[${initialRowCount}]'  value="${this.createdon}" disabled></td>`;
                    validation+=`<td><input id='inp10[${initialRowCount}]'  value="${this.modifiedon}" disabled></td>`;


                    // adding buttons for crud operations
                    validation+=`<td id="btn1"> 
                    <button id="Editing" onClick="new Myclass().Update(this,${initialRowCount})">Edit</button>
                    <button id="Cancel[${initialRowCount}]" onClick="new Myclass().Cancel(${initialRowCount})" disabled>Cancel</button>
                    <button id="Save" onClick="new Myclass().Save(${initialRowCount})">Save</button>
                    <button id="onDeleting" onClick="new Myclass().Delete(this,${initialRowCount})">Delete</button> </td>`;
                            validation+=`</tr>`;
                    initialRowCount++;
        
                    
                    document.getElementById("page").innerHTML=` ${tab} ${validation}
                    </table>    </div>`;
                    itemCount++;
        }

}
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
//                 validation+=`<td><input id='inp0[${initialRowCount}]'  value="${this.UserId}" disabled></td>`;
//                 validation+=`<td><input id='inp1[${initialRowCount}]'  value="${this.firstname}" disabled></td>`;
//                 validation+=`<td><input id='inp2[${initialRowCount}]'  value="${this.middlename}" disabled></td>`;
//                 validation+=`<td><input id='inp3[${initialRowCount}]'  value="${this.lastname}" disabled></td>`;
//                 validation+=`<td><input id='inp4[${initialRowCount}]'  value="${this.email}" disabled></td>`;
//                 validation+=`<td><input id='inp5[${initialRowCount}]'  value="${this.phonenumber}" disabled></td>`;
//                 validation+=`<td><input id='inp6[${initialRowCount}]'  value="${this.role}" disabled></td>`;
//                 validation+=`<td><input id='inp7[${initialRowCount}]'  value="${this.address}" disabled></td>`;
//                 validation+=`<td><input id='inp8[${initialRowCount}]'  value="${customern}" disabled></td>`;


//                 // adding buttons for crud operations
//                 validation+=`<td id="btn1"> 
//                 <button id="Editing" onClick="new Myclass().Update(this,${initialRowCount})">Edit</button>
//                 <button id="Cancel[${initialRowCount}]" onClick="new Myclass().Cancel(${initialRowCount})" disabled>Cancel</button>
//                 <button id="Save" onClick="new Myclass().Save(${initialRowCount})">Save</button>
//                 <button id="onDeleting" onClick="new Myclass().Delete(this,${initialRowCount})">Delete</button> </td>`;
//                         validation+=`</tr>`;
//                 initialRowCount++;
//                 });
                
//                 document.getElementById("page").innerHTML=` ${tab} ${validation}
//                 </table>    </div>`;
//             });
// }



// update function for editing the data
Update<T>(i:any,l:any ){
    if(newrow===1){
        alert("You are currently adding new data!")
        return;
    }

    let cn=document.getElementById(`Cancel[${l}]`) as HTMLInputElement;

        let input0 =document.getElementById(`inp0[${l}]`) as HTMLInputElement;
        if(newrow==1){
            input0.disabled=false;
        }
        else{
            input0.disabled=true;
        }

        cn.disabled=false;
        let input1 = document.getElementById(`inp1[${l}]`) as HTMLInputElement;
        input1.disabled=false;
        cn.disabled=false;
        let input2 = document.getElementById(`inp2[${l}]`) as HTMLInputElement;
        input2.disabled=false;
        cn.disabled=false;
        let input3 = document.getElementById(`inp3[${l}]`) as HTMLInputElement;
        input3.disabled=false;
        cn.disabled=false;
        let input4 = document.getElementById(`inp4[${l}]`) as HTMLInputElement;
        input4.disabled=false;
        cn.disabled=false;
        let input5 = document.getElementById(`inp5[${l}]`) as HTMLInputElement;
        input5.disabled=false;
        cn.disabled=false;
        let input6 = document.getElementById(`inp6[${l}]`) as HTMLInputElement;
        input6.disabled=false;
        cn.disabled=false;
        let input7 = document.getElementById(`inp7[${l}]`) as HTMLInputElement;
        input7.disabled=false;
        cn.disabled=false;

        row=document.getElementById(`inp0[${l}]`);
        value1=row.value;
        row=document.getElementById(`inp1[${l}]`);
        value1=row.value;
        row=document.getElementById(`inp2[${l}]`);
        value2=row.value;
        row=document.getElementById(`inp3[${l}]`);
        value3=row.value;
        row=document.getElementById(`inp4[${l}]`);
        value4=row.value;
        row=document.getElementById(`inp5[${l}]`);
        value5=row.value;
        row=document.getElementById(`inp6[${l}]`);
        value6=row.value;
        row=document.getElementById(`inp7[${l}]`);
        value7=row.value;
        row=document.getElementById(`inp8[${l}]`);
        value8=row.value;
}

// delete function for deleting the row 
async Delete<T>(i:any,r:any){
    if (confirm("Are you sure to delete this record ?")) {
    let id= (document.getElementById(`inp0[${r}]`) as HTMLInputElement).value;
    let customer =(document.getElementById(`inp8[${r}]`) as HTMLInputElement).value
    let role =(document.getElementById(`inp6[${r}]`) as HTMLInputElement).value
    let del=i.parentElement.parentElement;
    // console.log(id)

    
    await fetch(`/users/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
          UId:id
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          res.json;
        })
        
        let tab = document.getElementById("tble") as HTMLTableElement;
        tab.deleteRow(del.rowIndex);
        alert(`Data deleted with User Id: ${id} !!`);
    }


}

// cancel for reterieve the old data 
Cancel<T>(i:any){

    row=document.getElementById(`inp1[${i}]`).parentElement;
    row.innerHTML=`<input id='inp1[${i}]' value="${value1}">`;
    row=document.getElementById(`inp2[${i}]`).parentElement;
    row.innerHTML=`<input id='inp2[${i}]' value="${value2}">`;
    row=document.getElementById(`inp3[${i}]`).parentElement;
    row.innerHTML=`<input id='inp3[${i}]' value="${value3}">`;
    row=document.getElementById(`inp4[${i}]`).parentElement;
    row.innerHTML=`<input id='inp4[${i}]' value="${value4}">`;
    row=document.getElementById(`inp5[${i}]`).parentElement;
    row.innerHTML=`<input id='inp5[${i}]' value="${value5}">`;
    row=document.getElementById(`inp6[${i}]`).parentElement;
    row.innerHTML=`<input id='inp6[${i}]' value="${value6}">`;
    row=document.getElementById(`inp7[${i}]`).parentElement;
    row.innerHTML=`<input id='inp7[${i}]' value="${value7}">`;
    

   
}

// save function used to save the data after manipulation is done
Save<T>(i:any){
    let always=true;
    let cn=document.getElementById(`Cancel[${i}]`) as HTMLInputElement;
    
    let input0 = document.getElementById(`inp0[${i}]`) as HTMLInputElement;
    cn.disabled=true;

    
    let input1 = document.getElementById(`inp1[${i}]`) as HTMLInputElement;
    let letters1 = /^[A-Za-z]+$/;
    if(!input1.value.match(letters1)){

        alert("Error Please Enter Valid Name");
        always=false;

    }
    cn.disabled=true;
    let input2 = document.getElementById(`inp2[${i}]`) as HTMLInputElement;
    let letters2 = /^[A-Za-z]+$/;
    if(!input2.value.match(letters2)){

        alert("Error Please Enter Valid Name");
        always=false;
    }

    cn.disabled=true;
    let input3 = document.getElementById(`inp3[${i}]`) as HTMLInputElement;
    let letters = /^[A-Za-z]+$/;
    if(!input3.value.match(letters)){
        alert("Error Please Enter Valid Name");
        always=false;
    }
  
    cn.disabled=true;
    let input4 = document.getElementById(`inp4[${i}]`) as HTMLInputElement;
    let email=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!input4.value.match(email))
    {
        alert("Please Enter Valid Email");
        always=false;
    }
   
    cn.disabled=true;
    let input5 = document.getElementById(`inp5[${i}]`) as HTMLInputElement;
    let phoneno = /^\d{10}$/;
    if(!input5.value.match(phoneno))
    {
        alert("Please Enter Valid number");
        always=false;
    }
    cn.disabled=true;
    let input6 = document.getElementById(`inp6[${i}]`) as HTMLInputElement;
    
    if(input6.value!="SuperAdmin" && input6.value!='Admin' && input6.value!='Subscriber')
    {
        alert("Please Enter Valid Role");
        always=false;
    }
   

    cn.disabled=true;
    let input7 = document.getElementById(`inp7[${i}]`) as HTMLInputElement;
    let add =/^[a-zA-Z0-9\s,'-]*$/;
        if(!input7.value.match(add))
        {
            alert("Please Enter Valid address");
            always=false;
        }
    cn.disabled=true;
    let input8 = document.getElementById(`inp8[${i}]`) as HTMLInputElement;
    let cus:string;
    if(typeof(input8)===typeof(cus)){
        always=true;
    }

    if(always){
        if(newrow==0){
        fetch(`/users/${input0.value}`, {
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
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => {
              res.json;
            })
            
            input0.disabled=true;
            input1.disabled=true;
            input2.disabled=true;
            input3.disabled=true;
            input4.disabled=true;
            input5.disabled=true;
            input6.disabled=true;
            input7.disabled=true;
        }
        else{
        fetch(`/users/`, {
                method: "POST",
                body: JSON.stringify({
                    id:input0.value,
                    firstname: input1.value,
                    middlename: input2.value,
                    lastname: input3.value,
                    email: input4.value,
                    phonenumber: input5.value,
                    role: input6.value,
                    address: input7.value,
                    
                }),
        
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
                .then((res) => {
                    if(res.status!=404){
                        res.json;
                        input0.disabled=true;
                        input1.disabled=true;
                        input2.disabled=true;
                        input3.disabled=true;
                        input4.disabled=true;
                        input5.disabled=true;
                        input6.disabled=true;
                        input7.disabled=true;
                       
                        alert("Data saved successfully!");
                        newrow=0;
                       }
                        else{
                         alert("Cannot update! UserId already exists");
                         input0.disabled=false;
                         input1.disabled=false;
                         input2.disabled=false;
                         input3.disabled=false;
                         input4.disabled=false;
                         input5.disabled=false;
                         input6.disabled=false;
                         input7.disabled=false;
                
                        }
                })
               
            }

    }
}

 async getcustomername(userid:number){
     let customername:string="";
     await fetch(`/users/${userid}`)
        .then((response) => response.json()
        ).then((cname)=>{
            const obj = cname as {cname:string};
            customername=obj.cname;
            
            
        })
    return customername;
}
async getrolenamename(userid:number){
    let rolename:string="";
    await fetch(`/users/${userid}`)
       .then((response) => response.json()
       ).then((rkey)=>{
           const obj = rkey as {rkey:string};
           rolename=obj.rkey;
           
           
       })
   return rolename;
}


}

// Decorator DateTime Function 
function FormatDate(dt:any):any{
    return function(target:any,name:string,descriptor:PropertyDescriptor){
     const dtm=document.getElementById("datetime") as HTMLInputElement;
     setInterval(function() {
        dtm.innerHTML=new Date().toLocaleString();
    },1000);
}
}


// main funcion 
function main()
{
    const obj = new Myclass();
    obj.Read();
}