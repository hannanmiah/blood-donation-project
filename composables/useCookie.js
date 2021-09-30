import Cookies from 'js-cookie'

function useCookie() {
  const getCookieFromServer = (req, prefix) => {
    let matchedString
    if (typeof req === 'object') {
      const regexString = `(?<=(${prefix}=)).+`
      const regex = new RegExp(regexString)
      if (req.headers.cookie) {
        if (req.headers.cookie.startsWith(`${prefix}=`)) {
          matchedString = req.headers.cookie.match(regex)[0]
          return matchedString
        }
      }
    }

    return matchedString
  }

  const getCookieFromClient = (prefix) => {
    if (!prefix) return null
    return Cookies.get(prefix)
  }

  const setCookie = (prefix = 'key', value = 'value') => {
    Cookies.set(prefix, value.replace(' ', ''))
  }

  const removeCookie = (prefix) => {
    Cookies.remove(prefix)
  }

  const decodeString = (enodededString) => {
    const regex = /(%7B|%7D|%22|%3A|%2C)+/gim
    let decodeString = decodeURI(enodededString)
    if (regex.test(decodeString)) {
      decodeString = decodeString
        .replaceAll('%7B', '{')
        .replaceAll('%7D', '}')
        .replaceAll('%22', '"')
        .replaceAll('%3A', ':')
        .replaceAll('%2C', ',')
    }

    return decodeString
  }

  return {
    getCookieFromServer,
    getCookieFromClient,
    setCookie,
    removeCookie,
    decodeString,
  }
}

export default useCookie
