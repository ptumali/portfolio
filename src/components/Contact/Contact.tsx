import React from 'react'
import { useState } from 'react';
import { Alert, Box, Snackbar, Stack, Typography, } from '@mui/material'
import { MailOutlineRounded } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    const [open, setOpen] = useState(false);

    const copyToClipboard = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText('tumalipeter8@gmail.com');
            setOpen(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleSnackbarClose = (
        _event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    // For Alert (receives only event)
    const handleAlertClose = (_event: React.SyntheticEvent) => {
        setOpen(false);
    };

    return (
        <Box id="contact" component="section" className="container"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                backgroundColor: 'var(--color-secondary)',
                display: 'flex',
                flexDirection: 'column',
                padding: {
                    xs: '50px 50px',
                    sm: '70px 80px',
                    md: '80px 100px',
                },
                zIndex: 10,
            }}>

            {/* Content */}
            <Box className='content'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 12,
                    gap: '30px',
                    // border: 'solid 2pt red',
                }}>

                {/* Contact-Title */}
                <Typography variant="h2" className='title'>Contact</Typography>

                {/* Contact-Content */}
                <Box className="contact-content"
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        gap: 10,
                        // border: 'solid 2pt red',
                    }}>

                    {/* Contact-List */}
                    <Stack spacing={3} className="contact-list">
                        <a style={{ cursor: 'pointer', lineHeight: 0, textDecoration: 'none' }} onClick={copyToClipboard}>
                            <Stack spacing={2} direction="row">
                                {/* Mail-Icon */}
                                <MailOutlineRounded sx={{ width: '50px', height: '50px', color: 'white' }} />

                                <Stack direction="column">
                                    <Typography sx={{ color: 'white', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem' }}>
                                        Email
                                    </Typography>
                                    <Typography variant="body1">
                                        tumalipeter8@gmail.com
                                    </Typography>
                                </Stack>
                            </Stack>
                        </a>

                        <a href="https://www.linkedin.com/in/ptumali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ lineHeight: 0, textDecoration: 'none' }}>
                            <Stack spacing={2} direction="row">
                                {/* LinkedIn-Icon */}
                                <LinkedInIcon sx={{ width: '50px', height: '50px', color: 'white' }} />

                                <Stack direction="column">
                                    <Typography sx={{ color: 'white', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem' }}>
                                        LinkedIn
                                    </Typography>
                                    <Typography variant="body1">
                                        linkedin.com/in/ptumali/
                                    </Typography>
                                </Stack>

                            </Stack>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/ptumali" target="_blank" rel="noopener noreferrer" aria-label="Github" style={{ lineHeight: 0, textDecoration: 'none' }}>
                            <Stack spacing={2} direction="row">
                                {/* Github-Icon */}
                                <GitHubIcon sx={{ padding: '1px', width: '50px', height: '50px', color: 'white' }} />

                                {/* GitHub-Link */}
                                <Stack direction="column">
                                    <Typography sx={{ color: 'white', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: '1rem' }}>
                                        GitHub
                                    </Typography>
                                    <Typography variant="body1">
                                        github.com/ptumali
                                    </Typography>
                                </Stack>
                            </Stack>
                        </a>
                    </Stack>

                    {/* Planet-Art */}
                    <Box
                        sx={{
                            maxWidth: 300,
                            width: '50%',
                            height: 'auto',
                            display: 'inline-block',
                            animation: 'float 3s ease-in-out infinite',
                            '@keyframes float': {
                                '0%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-10px)' },
                                '100%': { transform: 'translateY(0px)' },
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={getImageUrl('planet.svg')}
                            alt="Planet-Art"
                            sx={{
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.1) rotate(3deg)',
                                    cursor: 'pointer',
                                },
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '-10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '60%',
                                height: '10px',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                borderRadius: '50%',
                                filter: 'blur(6px)',
                                zIndex: 1,
                            }}
                        />
                    </Box>

                    {/* Coming soon */}
                    {/* Contact-Form
                    <Box className="contact-form"
                        sx={{
                            display: 'flex',
                            border: '2pt solid red'
                        }}>
                        Right
                    </Box> */}
                </Box>
            </Box>

            {/* Blur Overlay */}
            <Box className='top-blur'
                sx={{
                    position: 'absolute',
                    width: '50vw',
                    height: '60%',
                    top: 0,
                    right: 0,
                    transform: 'translateX(45%) translateY(-20%)',
                    borderRadius: '50%',
                    background: '#2B3D5B',
                    filter: 'blur(150px) brightness(110%)',
                }} />
            <Box className='bottom-blur'
                sx={{
                    position: 'absolute',
                    width: '50vw',
                    height: '60%',
                    bottom: 0,
                    left: 0,
                    transform: 'translateX(-45%) translateY(20%)',
                    borderRadius: '50%',
                    background: '#2B3D5B',
                    filter: 'blur(150px) brightness(110%)',
                }} />

            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%', fontFamily: 'var(--font-montserrat)' }}>
                    Email copied to clipboard!
                </Alert>
            </Snackbar>
        </Box >
    )
}
