import Home from "../components/mainpage.js"
import FirefoxHome from "../components/firefox.js"

export default function HomePageReal() {
  if (typeof window!== 'undefined' && (navigator.userAgent.indexOf("Firefox") > -1)) {
      return (
        <FirefoxHome />
      )
    } else {
      return (
        <Home />
      )
    }
  }