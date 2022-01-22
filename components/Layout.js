import Navbar from './NavBar/NavBar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main> 
    </>
  )
}