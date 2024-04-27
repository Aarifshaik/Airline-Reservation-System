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
const col2=db.collection('flight_register')




app.post('/register', async (req, res) => {
  try {
    const existingUser = await col.findOne({ email: req.body.email });
    if (existingUser) {
      res.send(400);
      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      FName: req.body.FName,
      LName: req.body.LName,
      DOB:req.body.DOB,
      Country:req.body.Country,
      Phone:req.body.Phone,
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

app.post('/flightregister', async (req, res) => {
  try {
    const flight = {
      
      fid: req.body.fid,
      model:req.body.model,
      Airine:req.body.Airline,
      dest:req.body.dest,
      dept: req.body.dept,
      captain: req.body.captain,
      occupancy: req.body.occupancy,
    };
    await col2.insertOne(flight);
    res.send("Data Received");
  } catch {
    res.status(500).send("Error registering user");
  }
});

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { FName,LName, email, Phone } = req.body;
  
    // Build the update query dynamically
    const updateQuery = { $set: {} };
    if (FName) updateQuery.$set.FName = FName;
    if (LName) updateQuery.$set.LName = LName;
    if (email) updateQuery.$set.email = email;
    if (Phone) updateQuery.$set.Phone = Phone;
  
    const result = await col.updateOne({ _id: new ObjectId(id) }, updateQuery);
    res.send('updated');
  });


  app.put('/flights/:id', async (req, res) => {
    const { id } = req.params;
    const { captain, dest, Airline, dept } = req.body;
  
    // Build the update query dynamically
    const updateQuery = { $set: {} };
    if (captain) updateQuery.$set.captain = captain;
    if (dest) updateQuery.$set.dest = dest;
    if (Airline) updateQuery.$set.email = Airline;
    if (dept) updateQuery.$set.dept = dept;
  
    const result = await col2.updateOne({ _id: new ObjectId(id) }, updateQuery);
    res.send('updated');
  });

app.get('/retrieve',async (req,res)=>{
    const result = await col.find().toArray()
    console.log(result)
    res.send(result)
})

app.get('/retrieve_flight',async (req,res)=>{
  const result = await col2.find().toArray()
  console.log(result)
  res.send(result)
})


app.delete('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const result=await col.deleteOne({_id : new ObjectId(id)})  
    res.send('deleted')
})

app.delete('/flights/:id', async (req,res)=>{ 
  const {id}= req.params 
  const result=await col2.deleteOne({_id : new ObjectId(id)})  
  res.send('deleted')
})


app.post('/login', async (req, res) => {
  const user = await col.findOne({ email: req.body.email });
  console.log(user);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    res.send(user);
  } else {
    res.send(null);
  }
});



app.post('/send-otp', async (req, res) => {
  try {
    const mobileNumber = req.body.mobileNumber;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const response = await axios.get('https://www.fast2sms.com/dev/bulk', {
      params: {
        authorization: process.env.FAST2SMS_API_KEY,
        variables_values: `Your OTP is ${otp}`,
        route: 'otp',
        numbers: mobileNumber
      }
    });
    res.json({ success: true, message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
});


app.listen(8080,async()=>{
    console.log("Server is running on port 8080");
})
