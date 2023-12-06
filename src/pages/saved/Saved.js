import '../combined.css';
import React from 'react';
import Topforpages from '../../components/topforpages';
import Cardscontainer from '../../components/cardscontainer';

export default function Saved() {
    return (
        <div className="content">
            <Topforpages pagename='Saved Items' page='Saved'  pageref='saved' />

            <div className="saved-section2 cards-all">
                <Cardscontainer />
            </div>
        </div>
    )
}
