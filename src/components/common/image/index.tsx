'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from './style.module.scss'
import error from '/public/img/picture-video.png'
import error_ from '/public/img/picture.png'
import error_1 from '/public/img/Group 70.png'

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | undefined;
    alt: string;
    fallbackSrc?: string;
    width: number;
    height: number;
    aspectRatio?: '1/1' | '16/9' | '1/2' ;
    className?: string
}

export const CustomImage: React.FC<CustomImageProps> = React.memo(({ aspectRatio, className, height, width, src, alt, fallbackSrc, ...props }) => {
    const [imgSrc, setImgSrc] = useState<any>(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    const handleError = () => {
        setImgSrc(fallbackSrc ? fallbackSrc : aspectRatio === '1/1' ? error_ : aspectRatio === '16/9' ? error : error_1);
    };

    const aspectClass = aspectRatio === '1/1' ? styles.square : aspectRatio === '16/9' ? styles.video : styles.rectangle;

    return (
        <Image
            className={`${className} ${aspectRatio ? aspectClass : ''}`}
            width={width || 100}
            height={height || 100}
            src={imgSrc}
            alt={alt || 'Image'}
            onError={handleError}
            {...props}
        />
    );
});
