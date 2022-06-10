export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_PRIVATE_KEY}`
    )
    let data = await response.json()
    data = data.data
    const filteredResponse = []
    let idString = ''
    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      if (element.cmc_rank < 11) {
        idString+=element.id+','
        filteredResponse.push(element)
      }
    } 
    idString = idString.slice(0, -1)
    const response2 = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?CMC_PRO_API_KEY=${process.env.CMC_PRIVATE_KEY}&id=${idString}`)
    let data2 = await response2.json()
    const idArray = idString.split(',')
    for (let i = 0; i < idArray.length; i++) {
        const element = data2.data[idArray[i]]
        for (let j = 0; j < filteredResponse.length; j++) {
            if( element.id == filteredResponse[j].id){
                filteredResponse[j].image = element.logo
            }}
        
        }
    res.status(200).json({ filteredResponse })
  }
  getData()
}
