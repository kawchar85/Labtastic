import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Molarity from "../../../componants/Molarity";
import Navbar from "../../../componants/Navbar";
import CenteredContainer from "../../../componants/CenteredContainer";
export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>LabTastic</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <Navbar />
            
            <div  style={{
                margin:"250px"
            }}>
            <CenteredContainer >
            <div  style={{
                margin:"250px"
            }}>
                <Molarity />
            </div>
            </CenteredContainer>
            </div>
        </div>
    );
}