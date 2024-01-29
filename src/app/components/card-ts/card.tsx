'use client';
import styles from '@/app/ui/components/card/card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({image,text}:{image : any,text:any}){
    return(
        <div className={styles.card}>
            <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height} />
            <div className={styles.card_text + ' pd-15'}>
                <h3>{text.title}</h3>
                <p>{text.body}</p>
            </div>
        </div>
    )
}