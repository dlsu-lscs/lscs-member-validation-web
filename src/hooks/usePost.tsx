import axios from 'axios'

const usePost = async (url: string, postData: any) => {
  try {
    const response = await axios.post(url, postData, {
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

export default usePost
