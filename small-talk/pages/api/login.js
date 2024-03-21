import Mongoboi from "@/db/mongo"
import  {createCookieHash}  from "@/util/smolCwypto.js"
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
    await mongboi.connect()
    const result = await mongoboi.findOne("patients", query)
    await mongoboi.disconnect()
    if (result == null) { res.status(401).json({message: "FUCK"}); return; }
    // create sessionID hash to store in mongoDB and user browser storage
    const hash = createCookieHash({
      username: username,
      password: password,
      timestamp: Date.now()
    }, "FUCK") 
    data = {
      hash: hash
    }
  }

  return res.status(200).json(data)
}//