export const createQueryString = (searchParams: URLSearchParams, name: string, value: string) => {
  const params = new URLSearchParams(searchParams.toString())
  params.set(name, value)

  return params.toString()
}

export const removeQueryString = (searchParams: URLSearchParams, name: string) => {
  const params = new URLSearchParams(searchParams.toString())
  params.delete(name)

  return params.toString()
}
