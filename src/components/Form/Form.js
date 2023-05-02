import React, { Component } from "react";
import css from "./Form.module.css";

class Form extends Component { 
    state = {
        name: '',
        number: '',
    };

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

     // reset формы
    reset = () => {
        this.setState({name: '', number: ''})
    };
    

    render() { 
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label className={css.form__label}>
                    Name
                    <input
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={this.handleInputChange}    
                        className={css.form__input}
                        required
                    />
                </label>

                <label className={css.form__label}>
                    Number
                    <input
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handleInputChange}
                        className={css.form__input}
                        required
                        />
                </label>

                <button type="submit" className={css.form__btn}>Add contact</button>
            </form>
        )
    }
};

export default Form;