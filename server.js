const express =require ('express')
const app=express()
const cors = require('cors');

const mysql=require ('mysql2')

const port=3000
app.use(express.json())
app.use(cors())
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  const connection =mysql.createConnection({
database: 'pgnotion',
host:'localhost',
user:'pgnotion',
password:'Masaladosa07092002?',
port: '3306',
})

connection.connect((err)=>{
    if (err) {
        console.error('Error connecting to MySQL database:', err);
      } else {
        console.log('Connected to MySQL database');
      }
})

app.post('/stu',(req,res)=>{
    const{who,fname,lname,email,pass}=req.body;
    console.log("baray?");
    var q='';
    if(who==1)
        {
q='insert into  student values (?,?,?,?)';}else{
    q='insert into  instructor values (?,?,?,?)';
}

connection.query(q,[fname,lname,email,pass],(err,result)=>{  if (err) {
    console.error('Error inserting selected options:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }else{res.json({success:true})}})});




app.post('/login',(req,res)=>{
    console.log('login called',req.body)
    const{email,pass}=req.body;
    var q='',f=0;
    q='select * from student where email=? and password=?';
    connection.query(q,[email,pass],(err,result)=>{  if (err) {
        console.error('Error inserting selected options:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;}else{
            if(result.length==0)
                {f=1;
                    q='select * from instructor where email=? and password=?';
                }else{
                    console.log('found');
                    console.log(result);
                    res.json({success:true,fname:result[0].f_name,lname:result[0].l_name});
                }
        }
    

})
if(f===1)
    {
        connection.query(q,[email,pass],(err,result)=>{  if (err) {
            console.error('Error inserting selected options:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;}else{
                if(result.length==0)
                    {res.json({success:false});
                    }else{
                        res.json({success:true,fname:result.f_name,lname:result.l_name});
                    }
            }
        
    
    })
    }


})