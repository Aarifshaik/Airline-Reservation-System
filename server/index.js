const express = require('express');
const cors = require('cors');
const {MongoClient, ObjectId} = require('mongodb')
const bcrypt = require('bcrypt');

const client = new MongoClient('mongodb+srv://Aarif:1419@cluster0.gnmhymx.mongodb.net/?retryWrites=true&w=majority');
client.connect();



const app = express();
app.use(cors());
app.use(express.json());
const db = client.db('Airline')
const col= db.collection('user_register')

app.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = {
        Name: req.body.Name,
        password: hashedPassword,
        email: req.body.email,
        Role: req.body.Role,
      };
      await col.insertOne(user);
      res.send("Data Received");
    } catch {
      res.status(500).send("Error registering user");
    }
  });

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { Name, Role, email, password } = req.body;
  
    // Build the update query dynamically
    const updateQuery = { $set: {} };
    if (Name) updateQuery.$set.Name = Name;
    if (Role) updateQuery.$set.Role = Role;
    if (email) updateQuery.$set.email = email;
    if (password) updateQuery.$set.password = password;
  
    const result = await col.updateOne({ _id: new ObjectId(id) }, updateQuery);
    res.send('updated');
  });

app.get('/retrieve',async (req,res)=>{
    const result = await col.find().toArray()
    console.log(result)
    res.send(result)
})


app.delete('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const result=await col.deleteOne({_id : new ObjectId(id)})  
    res.send('deleted')
})


app.post('/login', async (req, res) => {
  const user = await col.findOne({ email: req.body.email });
  console.log(user);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    res.send(user.Name);
  } else {
    res.send(null);
  }
});


app.listen(8080,async()=>{
    console.log("Server is running on port 8080");
})
