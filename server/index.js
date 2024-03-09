const express = require('express');
const cors = require('cors');
const {MongoClient, ObjectId} = require('mongodb')
const bcrypt = require('bcrypt');

const client = new MongoClient('mongodb+srv://Aarif:1419@cluster0.gnmhymx.mongodb.net/?retryWrites=true&w=majority');
client.connect();



const app = express();
app.use(cors());
app.use(express.json());
const db = client.db('Counselling')
const col= db.collection('register')
