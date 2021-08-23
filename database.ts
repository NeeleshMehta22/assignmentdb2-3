const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Neelesh@22',
  port: 5432,
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM userdata as u order by u.id', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
       console.log("cashmoney",results.rows);
    })
  }

  // ,(SELECT cname FROM customer where customer.user_id = u.id)

  const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query(`SELECT * FROM userdata as u,customer as c,role as r where u.id=r.rid and u.id=c.user_id and id=$1`, [id], (error, results) => {
      
      if (error) {
        throw error
      }

      res.status(200).json(results.rows[0]);
    })
  } 


  const createUser = (req, res) => {
    const {id,firstname,middlename,lastname,email,phonenumber,role,address } = req.body
    console.log("req.body",req.body);
    pool.query('INSERT INTO userdata (id,firstname,middlename,lastname,email,phonenumber,role,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
     [id,firstname,middlename,lastname,email,phonenumber,role,address], (error, results) => {
      if (error) {
        console.log("MOHIT MEHTA");
        res.status(404).send();
      }
      else{
        console.log("NEELESH MEHTA");
        
        res.status(201).send(`User added with ID: ${id}`)}
    
    })
  }


  const updateUser = (req, res) => {
    const id = parseInt(req.params.id) 
    const { firstname,middlename,lastname,email,phonenumber,role,address } = req.body
    console.log(req.body);
  
    pool.query(
      'UPDATE userdata SET firstname = $1,middlename=$2,lastname=$3,email = $4,phonenumber=$5,role=$6,address=$7 WHERE id = $8',
      [firstname,middlename,lastname,email,phonenumber,role,address, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

   const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id)
    console.log("deleting!")
    console.log(id);
    
    await pool.query('DELETE FROM customer WHERE customer.user_id = $1', [id], (error, results) => {
      
      // if (error) {
      //   console.log(error);
      //   throw error
      // }
      
      // res.status(200).send(`customer deleted with ID: ${id}`)
      pool.query('DELETE FROM role WHERE rid = $1', [id], (error, results) => {
        // if (error) {
        //   console.log(error);
        //   throw error
        // }
        // res.status(200).send();
     
      pool.query('DELETE FROM userdata WHERE id = $1', [id], (error, results) => {
        if (error) {
          console.log(error);
          throw error
        }
        res.status(200).send();
      })
    })
  })

  
    // pool.query('DELETE FROM userdata WHERE id = $1', [id], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   res.status(200).send(`User deleted with ID: ${id}`)
    // })
}

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
    
  }