import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div className="container-center">
        <div className="text-title">עמוד שגיאה</div>
        <div className="text-paragraph">מסיבה כלשהי שלא תלויה בך, לא נמצא העמוד. אנא נסה/י שוב:</div>

        <Link to="/">

        <button className="login-button">בוא נתחיל שוב</button>
        </Link>
    </div>
);

export default NotFoundPage;