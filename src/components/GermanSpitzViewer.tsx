"use client";
import React, {useState} from 'react';
import styles from "@/app/page.module.css";
import Image from "next/image";

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
            <div className={styles.spitzPhotoWrapper}>
                {imageUrl && (
                    <img src={imageUrl} alt="German Spitz" className={styles.spitzPhoto} />
                )}
            </div>
        </div>
    );
};

export default GermanSpitzViewer;