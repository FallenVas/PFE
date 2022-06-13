export default function handler(req, res) {
    const getData = async()=>{
        const response = await fetch(`https://pfeServer.nightzokssa.repl.co/getDatachart`)
        let data = await response.json()
        res.status(200).json({data})
    }
    getData()
}