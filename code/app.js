const express=require("express") 
const port = process.env.PORT || 1111;

app.listen(port, () => { 
    console.log(
        `Server Running at  ${port}`
          .bgCyan.white
      );
    })