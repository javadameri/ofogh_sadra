'use client'

import React, { useEffect, useRef } from 'react';

export const OtpInput: React.FC = () => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // حرکت به ورودی بعدی  
        if (value.length === 1 && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        // اگر ورودی خالی شد، به ورودی قبلی بروید  
        if (value.length === 0 && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const setRef = (el: HTMLInputElement | null) => {
        // ما از `el` استفاده می‌کنیم و آن را به `inputsRef.current` اضافه می‌کنیم  
        if (el) {
            inputsRef.current.push(el);
        }
    };

    useEffect(() => {
        // اگر می‌خواهید که ورودی اول به طور پیش‌فرض فوکوس شود  
        inputsRef.current[0]?.focus();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', direction: 'rtl' }}>
            {Array.from({ length: 5 }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    onChange={(e) => handleInputChange(index, e)}
                    ref={setRef}
                    style={{
                        width: '48px',
                        height: '48px',
                        textAlign: 'center',
                        fontSize: '14px',
                        margin: '0 10px',
                        border: '2px solid #CBCBCB',
                        borderRadius: '5px',
                    }}
                />
            ))}
        </div>
    );
};  
