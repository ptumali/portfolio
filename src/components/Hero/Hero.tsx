import React, { useState } from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'
import { Box, Button, Typography, Stack } from '@mui/material/'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const heroBg = getImageUrl("hero-bg.svg");

export const Hero = () => {
    return (
        <Box component="section" className={styles.container}
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: {
                    xs: '300px',
                    sm: '400px',
                    md: '500px',
                },
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                padding: '120px 70px',
                zIndex: 0,
            }}
        >
            {/* Dark Overlay */}
            <Box className={styles.overlay}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Box className={styles.content}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '20px',
                    zIndex: 2,
                }}
            >
                <Box className={styles.giantHeader}
                >
                    <Typography variant="h1" className={styles.header}>Hi, my name is Peter.</Typography>
                    <Typography variant="h5" className={styles.support1}>
                        Aspiring <span style={{ color: '#6FFFD4' }}>Software Engineer</span><br />
                    </Typography>
                    <Typography variant="h5" className={styles.support1}>
                        <span style={{ color: '#255799' }}>UC </span>
                        <span style={{ color: '#FECC07' }}>Irvine </span>
                        | Computer Science<br />
                    </Typography>
                </Box>
                <Box className={styles.contacts}
                    sx={{
                        // display: 'flex',
                        // flexDirection: 'column',
                        // justifyContent: 'flex-start',

                    }}
                >
                    <Stack direction="row" spacing={1.5}
                        sx=
                        {{
                            marginBottom: '10px',
                        }}
                    >
                        <a href="https://www.linkedin.com/in/ptumali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                lineHeight: 0,
                            }}
                        >
                            <LinkedInIcon
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    color: 'white',
                                }}
                            />
                        </a>
                        <a href="https://github.com/ptumali"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                lineHeight: 0,
                            }}
                        >
                            <GitHubIcon
                                sx={{
                                    padding: '1px',
                                    width: '50px',
                                    height: '50px',
                                    color: 'white',
                                }}
                            />
                        </a>
                    </Stack>
                    <Button variant='outlined' href="#contact"
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            fontFamily: 'var(--font-ibm-plex-mono)',
                            fontWeight: 400,
                            fontSize: '1rem',
                            textTransform: 'none', // Keeps "Get in Touch!" as-is (no uppercase)
                            '&:hover': {
                                backgroundColor: 'white',
                                borderColor:'white',
                                color: 'black',
                            }
                        }}
                    >
                        Get in Touch!
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}