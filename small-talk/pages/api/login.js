import Mongoboi from "@/db/mongo"
import  {createCookieHash}  from "@/util/smolCwypto"
var uri = "mongodb+srv://"+ "vercel-admin-user" + ":" + "pokemonwithguns" + "@smalltalkcluster0.jo4jne6.mongodb.net/?retryWrites=true&w=majority"
// POST, preferably with SSL because parameters with GET get cached all over the place
export default async function POST(req, res) {
  let data = {
  }

  if (req.body) {
    let { username, password } = JSON.parse(req.body)

    const query = {
      username: username,
      password: password
    }
    
    const mongoboi = new Mongoboi(uri, "Users")
    await mongoboi.connect()
    const result = await mongoboi.findOne("patients", query)
    await mongoboi.disconnect()
    if (result == null) { res.status(401).json({message: "Empty"}); return; }
    // create sessionID hash to store in mongoDB and user browser storage
    const hash = createCookieHash({
      username: username,
      password: password,
      timestamp: Date.now()
    }, "Empty") 
    data = {
      hash: hash
    }
  }

  return res.status(200).json(data)
}

module.exports = {createCookieHash};
module.exports =  POST ;