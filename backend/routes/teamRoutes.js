var express = require('express')
const { getTeam, AddUser, UpdateUser, DeleteUser, LoginUser, getuser } = require('../controllers/teamController')
const { teamvalidation, validation, loginvalidation } = require('../middleware/validation')
const { IsAuth } = require('../middleware/IsAuth')
var teamRoute = express.Router()
teamRoute.get('/all',getTeam)
teamRoute.post('/adduser',teamvalidation,validation,AddUser)
teamRoute.put('/updateuser/:id',UpdateUser)
teamRoute.delete('/deleteUser/:id',DeleteUser)
teamRoute.post('/login',validation,LoginUser)
teamRoute.get('/user/:id',getuser)
teamRoute.get('/getcurrent',IsAuth,(req,res)=>{
    res.send(req.user)
})
module.exports = teamRoute
 