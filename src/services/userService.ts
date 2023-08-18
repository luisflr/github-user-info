

export const getUser = async ( username: string ) => {
  const response = await fetch(`https://api.github.com/users/${username}`)
                    .then(resp => resp.json())
                    .then(data => data)
  return response                    
}