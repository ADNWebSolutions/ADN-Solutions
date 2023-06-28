import '../dist/output.css'
import Experience from './components/Experience'
import Header from './components/Header'
// import Banner from './components/Banner'
import Solutions from './components/Solutions'
// import Experience from './components/Experience'
// import Team from './components/Team'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Solutions />
        <Experience />

      </main>
      {/* 
                <Banner />
                <Experience />
                <Team />
                <Contact />
            <Footer /> */}
    </>
  )
}

export default App
