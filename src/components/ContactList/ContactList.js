import ContactListItem from "components/ContactListItem";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDeleteBtnClick }) { 
    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <ContactListItem
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteBtnClick={onDeleteBtnClick} // 1й вариант (см ContactListItem)
                    // onDeleteBtnClick={() => onDeleteBtnClick(contact.id)}  // 2й вариант (см ContactListItem)
                    contactId={contact.id}
                />
            ))               
            }
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteBtnClick: PropTypes.func,
    
};


export default ContactList;