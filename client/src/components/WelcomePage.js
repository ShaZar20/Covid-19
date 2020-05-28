import React from 'react';
import {Link} from 'react-router-dom'

const WelcomePage = () => (
    <div className="container-center">

        <div className="text-title">הסבר על התהליך</div>

        <div className="text-paragraphBold">צופים/ות חזק!</div>
        <div className="text-paragraphBold">יש לקרוא היטב את ההנחיות למילוי
        ההצהרה ולוודא שהפרטים נכונים ומדוייקים.</div>

        <div className="text-paragraph">בסיום התהליך, תקבלו את הצהרת הבריאות
        ישירות לתיבת הדואר האלקטרוני שלכם/ן
        ותוכולו להציגה למדריך/ה או לשתף
         דרך ה - Whatsapp.</div>
        <div className="spacer-column" />
         <div className="text-paragraph">נתראה בשבט!</div>

        <Link to="/main" style={{width:"100%"}}><button className="login-button">התחלה</button></Link>
    </div>
);

export default WelcomePage;

{/* <div className="text-title">הסבר על התהליך</div>

<div className="text-paragraph">צופים/ות חזק!</div>
<div className="text-paragraph">יש לקרוא היטב את היטב את ההנחיות למילוי</div>
<div className="text-paragraph">ההצהרה ולוודא שהפרטים נכונים ומדוייקים.</div>

<div className="text-paragraph">בסיום התהליך, תקבלו את הצהרת הבריאות</div>
<div className="text-paragraph">ישירות לתיבת הדואר האלקטרוני שלכם/ן</div>
<div className="text-paragraph">ותוכולו להציגה למדריך/ה או לשתף</div>
<div className="text-paragraph"> דרך ה - Whatsapp.</div>

<div className="text-paragraph">נתראה בשבט!</div> */}