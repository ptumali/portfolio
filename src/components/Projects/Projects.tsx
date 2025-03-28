import React from 'react'
import { getImageUrl } from '../../utils'
import { Box, Typography, Stack, Card, CardContent, Divider } from '@mui/material'
import {
    project1Images, project1Content,
    project2Content, project2Images,
    project3Images, project3Content,
    project4Images, project4Content
} from './project'

type HorizontalCardProps = {
    images: string[];
    title: string;
    date: string;
    contents: string[];
};

const HorizontalCard = ({ title, images = [], date, contents = [] }: HorizontalCardProps) => {
    return (
        <Card
            sx={{
                display: 'flex',
                borderRadius: 5,
                maxWidth: 800,
                boxShadow: 1,
            }}>

            {/* Card-Contents */}
            <Box className='container'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    px: 2
                }}>

                <CardContent>
                    {/* Card-Title */}
                    <Typography
                        sx={{
                            color: '#333333',
                            mb: 1,
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: '500',
                            fontSize: '1.2rem',
                            '@media (max-width:700px)': {
                                fontSize: '1rem',
                            }
                        }}>
                        {title}
                    </Typography>

                    {/* Card List */}
                    <Box component="ul"
                        sx={{ pl: '1.25rem', mb: 0, mt: 0, }}
                    >
                        {contents.map((point, index) => (
                            <Box component="li" key={index}
                                sx={{
                                    lineHeight: 1.5,
                                    color: '#4b5563',
                                    fontSize: '1rem',
                                    '@media (max-width:700px)': {
                                        fontSize: '0.75rem',
                                    },
                                }}>
                                {point}
                            </Box>
                        ))}
                    </Box>

                    {/* Dev-Icons */}
                    <Box
                        sx={{
                            display: 'flex',
                            pt: 3,
                            pl: 1,
                            gap: 2,
                        }}>
                        {images.map((logo, index) => (
                            <img key={index} src={getImageUrl(`${logo}.svg`)} style={{ height: '30px' }} />
                        ))}
                    </Box>
                </CardContent>

                <Divider sx={{ mx: 2 }} />

                <Typography
                    sx={{
                        fontSize: '0.9rem',
                        '@media (max-width:700px)': {
                            fontSize: '0.6rem',
                        },
                        color: '#333333',
                        px: 2,
                        py: 2,
                    }}
                >
                    {date}
                </Typography>
            </Box >
        </Card >
    )
}

export const Projects = () => {
    return (
        <Box id='projects' component='section' className='container'
            sx={{
                position: 'relative',
                backgroundColor: 'var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                padding: {
                    xs: '45px 50px',
                    sm: '50px 75px',
                    md: '60px 100px',
                },
                zIndex: 20,
            }}>

            {/* Content */}
            <Box className='content'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '50px',
                    zIndex: 21,
                }}>

                {/* Projects-Title */}
                <Typography variant="h2" className='title'>Projects</Typography>

                {/* Projects-Cards */}
                <Stack spacing="25px" width="100%" alignItems="center">
                    <HorizontalCard
                        images={project1Images}
                        title="Porfotlio Website"
                        date="March 2025"
                        contents={project1Content} />
                    <HorizontalCard
                        images={project2Images}
                        title="Movie Sentiment Classifier"
                        date="February 2025"
                        contents={project2Content} />
                    <HorizontalCard
                        images={project3Images}
                        title="Search Engine"
                        date="March 2024"
                        contents={project3Content} />
                    <HorizontalCard
                        images={project4Images}
                        title="Property-Guessr"
                        date="January 2024"
                        contents={project4Content} />
                </Stack>

            </Box>

        </Box>
    )
}
