'use client';
import Button from '../Button/Button';
import './Banner.css';
import banner_data from '@/data/banner';

export default function Banner() {
    return (
        <div className="banner">

            <h2>{banner_data.heading}</h2>
            <p>
                {banner_data.description}
            </p>
            <div className="button-container">
                <Button label='Explore Games' varient='exploreBtn' href="/games/tictactoe"/>
            </div>
        </div>
    );
}