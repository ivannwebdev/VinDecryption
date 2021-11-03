import styles from'./app.module.css'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'


const App = () => {

  return (
    <div className= {styles.app} >
       <Header/>
       <Nav/>
       <Content/>
       <Footer/>
    </div>
  );
}



export default App
