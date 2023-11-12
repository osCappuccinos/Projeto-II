import StarIcon from '@mui/icons-material/Star';
import { Rating } from "@mui/material";
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React from 'react';

import "./ratings.css"

function Ratings({ ratingCount, averageRating, ratings }) {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 12,
        width:200,
        borderRadius: 20,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

    return (
        <div className="ratingsContainer">
            <h3>Avaliações de clientes</h3>
            <div className="ratingsTop">
                <h3>{averageRating}</h3>
                <Rating className="ratings" name="read-only" value={averageRating} readOnly precision={0.5}/>
                <p>{ratingCount} avaliações</p>
            </div>
            <div className="ratingsBottom">
                <div className="ratingsRow">
                    <h4>5</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*ratings.five/ratingCount} />
                    </Box>
                    <p>{ratings.five}</p>
                </div>
                <div className="ratingsRow">
                    <h4>4</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*ratings.four/ratingCount} />
                    </Box>
                    <p>{ratings.four}</p>
                </div>
                <div className="ratingsRow">
                    <h4>3</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*ratings.three/ratingCount} />
                    </Box>
                    <p>{ratings.three}</p>
                </div>
                <div className="ratingsRow">
                    <h4>2</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*ratings.two/ratingCount} />
                    </Box>
                    <p>{ratings.two}</p>
                </div>
                <div className="ratingsRow">
                    <h4>1</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*ratings.one/ratingCount} />
                    </Box>
                    <p>{ratings.one}</p>
                </div>
            </div>
        </div>
    );
}

export default Ratings;