import "./ratings.css"
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

function Ratings(props) {

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
                <h3>{props.averageRating}</h3>
                <Rating justifyContent="left" className="ratings" name="read-only" value={props.averageRating} readOnly precision={0.5}/>
                <p>{props.ratingsCount} avaliações</p>
            </div>
            <div className="ratingsBottom">
                <div className="ratingsRow">
                    <h4>5</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*props.fiveStarCount/props.ratingsCount} />
                    </Box>
                    <p>{props.fiveStarCount}</p>
                </div>
                <div className="ratingsRow">
                    <h4>4</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*props.fourStarCount/props.ratingsCount} />
                    </Box>
                    <p>{props.fourStarCount}</p>
                </div>
                <div className="ratingsRow">
                    <h4>3</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*props.threeStarCount/props.ratingsCount} />
                    </Box>
                    <p>{props.threeStarCount}</p>
                </div>
                <div className="ratingsRow">
                    <h4>2</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*props.twoStarCount/props.ratingsCount} />
                    </Box>
                    <p>{props.twoStarCount}</p>
                </div>
                <div className="ratingsRow">
                    <h4>1</h4>
                    <StarIcon fontSize="small" className="star"/>
                    <Box >
                        <BorderLinearProgress className="boxProgress" variant="determinate" value={100*props.oneStarCount/props.ratingsCount} />
                    </Box>
                    <p>{props.oneStarCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Ratings;