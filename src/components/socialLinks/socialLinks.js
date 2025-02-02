import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
    {
        name: 'Instagram',
        icon: InstagramIcon,
        url: 'https://www.instagram.com/noemielemoine_mua/',
    },
    {
        name: 'Facebook',
        icon: FacebookIcon,
        url: 'https://www.facebook.com/noemielemoineMUA/',
    },
    {
        name: 'LinkedIn',
        icon: LinkedInIcon,
        url: 'https://www.linkedin.com/in/noëmie-lemoine-a5589065/',
    },
];

const SocialLinks = ({ color, hoverColor, gap = '0.5rem', padding = '.5rem' }) => {
    return (
        <Box sx={{ display: 'flex', gap: gap }}>
            {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                    <IconButton
                        key={social.name}
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        sx={{
                            padding,
                            color: color,


                        }}
                    >
                        <Icon />
                    </IconButton>
                );
            })}
        </Box>
    );
};

export default SocialLinks; 