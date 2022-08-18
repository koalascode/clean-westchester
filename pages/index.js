import Home from "../components/mainpage.js"
import Mobile from "../components/mobile.js"
import FirefoxHome from "../components/firefox.js"

export default function HomePageReal() {
  if (typeof window!== 'undefined' && (navigator.userAgent.match(/iphone|android|blackberry/ig))) {
    return <Mobile />
  }

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