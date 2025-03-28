import React from 'react'
import { getImageUrl } from '../../utils'
import { Box, Typography, Avatar, Chip, Grid } from '@mui/material'

const codeIcon = getImageUrl('codeIcon.svg')

const handleClick = () => {
    console.info('You clicked the Chip.');
};

export const About = () => {
    return (
        <Box id='about' component='section' className='container'
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                minHeight: {
                    xs: '300px',
                    sm: '400px',
                    md: '500px',
                },
                backgroundColor: 'var(--color-secondary)',
                display: 'flex',
                flexDirection: 'column',
                padding: {
                    xs: '50px 50px',
                    sm: '100px 80px',
                    md: '120px 100px',
                },
                zIndex: 30,
            }}>

            {/* Content */}
            <Box className='content'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '22px',
                    zIndex: 31,
                }}>

                {/* About-Title */}
                <Typography variant='h2' className='title'>About</Typography>

                {/* Avatar-Icon */}
                <Avatar src={getImageUrl('profileAvatar.png')} alt='Profile-Avatar'
                    sx={{
                        width: '150px',
                        height: '150px',
                        animation: 'float 3s ease-in-out infinite',
                        '@keyframes float': {
                            '0%': {
                                transform: 'translateY(0px)',
                            },
                            '50%': {
                                transform: 'translateY(-10px)',
                            },
                            '100%': {
                                transform: 'translateY(0px)',
                            },
                        }
                    }} />

                {/* About-Description */}
                < Grid container spacing={4} justifyContent='center'>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant='body1'>
                            Greetings! I am Peter, an aspiring software engineer and a computer science student at UC Irvine. I enjoy exploring web development, embedded systems, networks systems, and more.
                            <br />
                            <br />
                            I'm always seeking opportunities to merge my passion for code with my love for learning, tackling challenges that push me to grow and innovate.
                        </Typography>
                    </Grid>

                    <Grid size={{ sm: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                mb: 2,
                            }}>
                            <Box component="img" src={codeIcon}
                                sx={{ height: '25px' }} />
                            <Typography variant='h3'>
                                Tools & Technologies
                            </Typography>
                        </Box>

                        <Grid container spacing={1}>
                            {['Python', 'Java', 'C++', 'C', 'JavaScript', 'HTML/CSS',
                                'React', 'MySQL', 'PostgreSQL', 'NodeJS', 'Git', 'More...'
                            ].map((tech) => (
                                <Grid size={{ xs: 3 }} key={tech}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                    <Chip label={tech} onClick={handleClick}
                                        sx={{
                                            fontSize: '0.9rem',
                                            backgroundColor: 'none',
                                            color: 'white',
                                            border: '1pt solid white',
                                            width: '120px',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                borderColor: 'white',
                                                fontWeight: 500,
                                                color: 'black',
                                            },
                                            '@media (max-width:700px)': {
                                                fontSize: '0.75rem', // smaller font for smaller screens
                                            },
                                        }} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

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
        </Box>
    )
}
