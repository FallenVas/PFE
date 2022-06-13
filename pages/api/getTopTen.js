export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pfeserver.nightzokssa.repl.co/getTableData`
    )
    let data = await response.json()
    data = data.tableData
    res.status(200).json({ data })
  }
  getData()
}
