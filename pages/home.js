import Home from "../components/mainpage.js"
//This page is identical to index.js, but for anyone who goes to /home for some reason
export default function HomePage() {
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