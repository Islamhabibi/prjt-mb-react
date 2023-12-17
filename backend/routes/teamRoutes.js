var express = require('express')
const { getTeam, AddUser, UpdateUser, DeleteUser, LoginUser, getuser } = require('../controllers/teamController')
const { teamvalidation, validation } = require('../middleware/validation')
var teamRoute = express.Router()
teamRoute.get('/all',getTeam)
teamRoute.post('/adduser',teamvalidation,validation,AddUser)
teamRoute.put('/updateuser/:id',UpdateUser)
teamRoute.delete('/deleteUser/:id',DeleteUser)
teamRoute.post('/login',LoginUser)
teamRoute.get('/user/:id',getuser)
module.exports = teamRoute
 