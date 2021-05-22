import { connect } from 'react-redux';
import ContactList from '../ContactList';
import Form from '../Form';
import Filter from '../Filter';

const Phonebook = ({ contacts }) => {
    return (
      <div>
        <h1> Phonebook ☎️ </h1>
        <Form />
        
        {contacts.length > 1 && (<Filter />)}
        {contacts.length > 0 && (<ContactList/>)}
        {contacts.length === 0 && (<h3> No Contacts <span>🙁</span> </h3>)}
    
      </div>
  
    )
  };
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(Phonebook);
