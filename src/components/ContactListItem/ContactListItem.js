import PropTypes from "prop-types";
import css from './ContactListItem.module.css'

function ContactListItem({ id, name, number, onDeleteBtnClick, contactId }) { 
    return (
        <li key={id} className={css.item}>
             
            <p className={css.item__name}>{name}: </p>
            <p className={css.item__number}>{number}</p>
            <button
                className={css.item__btn}
                type="button"
                onClick={() => onDeleteBtnClick(contactId)} // 1й вариант (см ContactList)
                // onClick={onDeleteBtnClick} // 2й вариант (см ContactList)
            >
                Delete
            </button>
        </li>
    )
}


ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteBtnClick: PropTypes.func.isRequired,
    contactId: PropTypes.string.isRequired,
};


export default ContactListItem;