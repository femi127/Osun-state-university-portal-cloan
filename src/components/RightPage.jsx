import '../App.css';
import Important from '../Assect/Important.jpg';

function RightPage() {
  const openPopup = () => {
    window.open(
      "https://portal.uniosun.edu.ng/web_pay_tips.php",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <div style={{ width: '30%' }}>
      <div className="aboutus-container">
        <div className="sideBar-top_right_Page">&nbsp;</div>
        <ul className="sidebar_bar_ul">
          <li>
            <p className="welcome_p">WELCOME!</p>
            <p className="important_Notice_Payment">
              <strong>IMPORTANT NOTICE ON SCHOOL FEES PAYMENT:</strong>
              <br />
              &diams; Please note that payment of <strong>School Fees</strong>{" "}
              henceforth is by Remita Platform through the use of ATM cards.
              <br />
              <br />
              &diams; Ensure you read the{" "}
              <a
                href="/feeqtech/public/uniosun_webpay_guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="over_mouse"
              >
                Step-By-Step UNIOSUN WebPAY Guide
              </a>{" "}
              as well as the{" "}
              <button onClick={openPopup} className="over_mouse">
                UNIOSUN WebPAY FAQs/Tips
              </button>{" "}
              before you proceed. <br />
              <br />
              <img
                src={Important}
                alt="important notice"
                className="important_notice"
              />
            </p>
          </li>
        </ul>
        <div className="sideBar-bottom_right_Page">&nbsp;</div>
      </div>
    </div>
  );
}

export default RightPage;