import styles from "./page.module.css";
import GermanSpitzViewer from "@/components/GermanSpitzViewer";

export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>Spitz button</header>
            <GermanSpitzViewer/>
        </div>
    );
}