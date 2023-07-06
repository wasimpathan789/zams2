import Heading from "../heading/Heading";
import "./MainContact.css";
import NewContact from "./NewContact";

const MainContact = () => {
  return (
    <div className="main-contact">
      <Heading title={"Our Contact"} />
      <div className="main-contact-wrapper"  >
        <NewContact />
      </div>
    </div>
  );
};

export default MainContact;
