import Home from "../components/mainpage.js"
import FirefoxHome from "../components/firefox.js"
import Mobile from "../components/mobile.js"
//This page is identical to index.js, but for anyone who goes to /home for some reason
export default function HomePage() {

  if (typeof window!== 'undefined' && (navigator.userAgent.match(/iphone|android|blackberry/ig))) {
    
    return (
    
    <Mobile />)
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