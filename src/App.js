import logo from './logo.svg';
import './styles/globals.css';
import styles from "./styles/Home.module.css";

import Button from '@material-ui/core/Button';
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import MarkdownContent from "./components/MarkdownContent";

function App() {
  const markdownContent = `  
  # Welcome to My Website  
    
  This is an example of Markdown content.  
    
  - List item 1  
  - List item 2  
    
  ## Subheading  
    
  Some more text here.  
`;
  return (
    <div className="App">

      <main className={`${styles.main} `}>
        <div className={styles.description}>
          <div className={styles.leftPart}>
            <div className={styles.logo}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32"
                  viewBox="0 0 36 32" fill="none" >
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
              </a>

            </div>
            <div className={styles.webName}>
              <span className={styles.mui}>MUI Core</span><br />
              <span className={styles.material}>Material UI</span>
            </div>
          </div>
          <div>
            <div className={styles.rightPart}>
              <div className={styles.search}>
                <SearchBar />
              </div>
              <div><Button color='primary' variant='contained'>Login</Button></div>
            </div>
          </div>


        </div>

        <div className={styles.content}>
          <div className={styles.menu}>
            <SideBar />
          </div>

          <div className={styles.rightContent}>

            <MarkdownContent content={markdownContent} />
            <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32"
                  viewBox="0 0 36 32" fill="none" >
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
              </a>
              <span>material-ui</span>
            </footer>
          </div>

        </div>


      </main>
    </div>
  );
}

export default App;