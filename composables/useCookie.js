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
    if (!prefix) return ''
    return Cookies.get(prefix)
  }

  const setCookie = (prefix = 'key', value = 'value', expiration = 7) => {
    Cookies.set(prefix, value.trim(),{expires: expiration})
  }

  const removeCookie = (prefix) => {
    Cookies.remove(prefix)
  }

  const decodeString = (enodededString) => {
    if (typeof enodededString === 'string') {
      const regex = /(%7B|%7D|%22|%3A|%2C|%20|%2D|%5F|%5C|%2E)+/gim
      let decodeString = decodeURI(enodededString.trim())
        .replaceAll('%2C', ',')
        .replaceAll('%20', '')
      if (regex.test(decodeString)) {
        decodeString = decodeString
          .replaceAll('%7B', '{')
          .replaceAll('%7D', '}')
          .replaceAll('%22', '"')
          .replaceAll('%3A', ':')
          .replaceAll('%2D', '-')
          .replaceAll('%5F', '_')
          .replaceAll('%2E', '.')
          .replaceAll('%5C', '\\')
      }

      return decodeString
    }

    return enodededString
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
