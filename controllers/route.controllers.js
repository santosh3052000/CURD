const routeFunc = {}

routeFunc.create = (req,res)=>{           //POST request

    console.log(req.body)
    return res.json(req.body)
    
}

routeFunc.show = (req,res)=>{            //GET request
    res.send("This is show or get")
}

routeFunc.update = (req,res)=>{          //PUT request
    res.send("This is put or update")
}

routeFunc.delete = (req,res)=>{          //DELETE request
    res.send("This is delete")
}

module.exports = routeFunc