"use client";
import React, {useState} from 'react';
import styles from "@/app/page.module.css";

const GermanSpitzViewer: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchImage = async () => {
        setLoading(true);
        setImageUrl(null);
        try {
            const response = await fetch('https://dog.ceo/api/breed/spitz/images/random');
            const data = await response.json();
            setImageUrl(data.message);
        } finally {
            setLoading(false);
        }

    };

    return (
        <div>
            <button className={styles.spitzButton} onClick={fetchImage}>🐶</button>
            {loading && <div className={styles.spinner}></div>}
            {imageUrl && (
                <div className={styles.spitzPhotoWrapper}>
                    <img src={imageUrl} alt="German Spitz" style={{maxWidth: '400px', marginTop: '20px'}}/>
                </div>
            )}
        </div>
    );
};

export default GermanSpitzViewer;