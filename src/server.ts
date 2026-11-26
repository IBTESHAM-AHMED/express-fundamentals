import express, { type Application, type Request, type Response } from "express"

const app: Application = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  // res.send('This is Root Route!')
  res.status(200).json({
    success: true,
    message: "this is root route ",
    author: "Ibtesham"
  })
})
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);
  const {name, age,password} = req.body;
  console.log(password);
   res.status(200).json({
    success: true,
    message: "this is a test API!!! ",
    data: {name,age},
  })

});
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`)
})