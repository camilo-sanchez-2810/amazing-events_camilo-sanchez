const getData = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('ERROR:', response.status)
  }
  const data = await response.json()
  return data
}
export default getData