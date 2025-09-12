"use client";
import React, {useState} from 'react';
import styles from "@/app/page.module.css";

const breeds = ['spitz',
    'buhund/norwegian',
    'akita',
    'chow',
    'corgi/cardigan',
    'elkhound/norwegian',
    'eskimo',
    'finnish/lapphund',
    'husky',
    'keeshond',
    'malamute',
    'pembroke',
    'pomeranian',
    'samoyed',
    'schipperke',
    'shiba'
];

const GermanSpitzViewer: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchImage = async () => {
        setLoading(true);
        setImageUrl(null);
        try {
            const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
            const response = await fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`);
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
                    <img src={imageUrl} alt="Spitz-type dog" className={styles.spitzPhoto}/>
                )}
            </div>
        </div>
    );
};

export default GermanSpitzViewer;