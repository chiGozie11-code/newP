import store from './/images/appstore.svg';
import play from './/images/playstore.svg';
import gif from './/images/paperCloud.gif';

const main = () => {
    return ( 
        <section className='wrapper'>
            <div className='holder'>
                <h1>Your Personal<br></br> <span>Business</span> Manager</h1>
                <p id='para'>That saves you hours of tedious paper work.</p>
                <p id='para1'>Whether you're a Creator, a Freelancer, or a Business owner PaperCloud makes it super easy to close deals 2x faster, either from our phone, iPad or computer.</p>
                <p id='para2'>With a simple, and straight forward user interface. You can create beautiful Invoices in seconds, organise your customers data in one place, automatically track your income, inventory, expenses, and profits on the go.</p>
                 <div id='mage'>
                 <div className='mage'> <img className='store' src={store} alt="appstore"/></div>
                 <div className='mage'> <img className='play' src={play} alt="googlestore"/></div>
                 </div>
            </div>
            <div id='dolted' className='holder'>
            <img className='gif' src={gif} alt="gif"/>
            </div>
            <div id='mab'></div>
        </section>
     );
}
 
export default main;