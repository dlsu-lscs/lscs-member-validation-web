import axios from 'axios'

const useDelete = async (url: string) => {
  try {
    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    if (response.status == 200) {
      window.location.reload()
    }
  } catch (e) {
    console.log(e)
  }
}

export default useDelete
