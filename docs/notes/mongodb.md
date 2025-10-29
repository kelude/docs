# mongodb


```bash
db.messages.insertOne(
   {
      chat_id: 1
      type: "text",
      content: "Testing",
      user_id: 100022
   }
)

db.messages.insertMany([
   {},
   {}
])
```

```bash
db.messages.find()
db.messages.find( { conversation_id: 7 } )
```

```bash
db.messages.updateOne(

)

db.messages.updateMany(
  { conversation_id: "7" },           
  { $set: { conversation_id: 7 } }
)


db.messages.replaceOne(

)
```

```bash
db.messages.deleteMany( { chat_id: 2 } )

db.messages.deleteOne( { content: "Testing" } )
```
