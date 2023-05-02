import PropTypes from "prop-types";
import css from "./Filter.module.css";

function Filter({onFilterInputChange, filter}) { 
    return (
        <>
            <label className={css.filter__label}>
                Find contacts by name
                <input
                    value={filter}
                    className={css.filter__input}
                    type="text"
                    name="filter"
                    onChange={onFilterInputChange}
                />
            </label>
        </>
    )
}

Filter.propTypes = {
    onFilterInputChange: PropTypes.func.isRequired,
    filter: PropTypes.string,
}

export default Filter;