import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Button
            sx={{ position: 'fixed', bottom: '2rem', right: '2rem', display: isVisible ? 'block' : 'none' }}
            onClick={scrollToTop}
            color="info"
            variant="text"
        >
            <ArrowCircleUpIcon fontSize="large" />
        </Button>
    );
};

export default BackToTopButton;
